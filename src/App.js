import React, { useState, useEffect } from 'react';

function ClockDisplay({ isTicking, time, toggleTicker }) {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().padStart(2, '0');

  const containerStyles = isTicking ? 'shadow-2xl bg-green-900' : 'bg-white';
  const timerStyles = isTicking ? 'text-gray-100' : 'text-gray-300';

  return (
    <div
      onClick={() => isTicking && toggleTicker()}
      className={`block h-half text-center bg-white ${containerStyles}`}
    >
      <div className={`text-7xl text-gray-300 py-20 md:py-48 ${timerStyles}`}>
        <div>
          {minutes}:{seconds}
        </div>
      </div>
    </div>
  );
}

function Clock({ isTicking, toggleTicker }) {
  const [time, setTime] = useState(600);

  useEffect(() => {
    if (isTicking) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timeout);
    }
  });

  return <ClockDisplay time={time} isTicking={isTicking} toggleTicker={toggleTicker} />;
}

function App() {
  const [isTicking, setIsTicking] = useState(true);

  return (
    <div className="App h-screen">
      <Clock isTicking={isTicking} toggleTicker={() => setIsTicking(!isTicking)} />
      <Clock isTicking={!isTicking} toggleTicker={() => setIsTicking(!isTicking)} />
    </div>
  );
}

export default App;
