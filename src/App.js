import React, { useState, useEffect } from 'react';

function ClockDisplay({ time }) {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().padStart(2, '0');

  return (
    <div>
      {minutes}:{seconds}
    </div>
  );
}

function Clock({ active, toggleTime }) {
  const [time, setTime] = useState(600);

  useEffect(() => {
    if (active) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timeout);
    }
  });

  const containerStyles = active ? 'shadow-2xl bg-green-900' : 'bg-white';
  const timerStyles = active ? 'text-gray-100' : 'text-gray-300';

  return (
    <div
      onClick={() => active && toggleTime()}
      className={`block h-half text-center bg-white ${containerStyles}`}
    >
      <div className={`text-7xl text-gray-300 py-20 md:py-48 ${timerStyles}`}>
        <ClockDisplay time={time} />
      </div>
    </div>
  );
}

function App() {
  const [clockOneIsActive, setClockOneIsActive] = useState(true);

  return (
    <div className="App h-screen">
      <Clock active={clockOneIsActive} toggleTime={() => setClockOneIsActive(!clockOneIsActive)} />
      <Clock active={!clockOneIsActive} toggleTime={() => setClockOneIsActive(!clockOneIsActive)} />
    </div>
  );
}

export default App;
