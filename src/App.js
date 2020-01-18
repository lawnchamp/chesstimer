import React, { useState, useEffect, Fragment } from 'react';

function ClockDisplay({ isTicking, time, toggleTicker }) {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().padStart(2, '0');

  const containerStyles = isTicking ? 'shadow-2xl bg-gray-300 border border-gray-700' : 'bg-white';
  const timerStyles = isTicking ? 'text-gray-700' : 'text-gray-100';

  return (
    <div
      onClick={() => isTicking && time > 0 && toggleTicker()}
      className={`rounded-lg text-center my-2 ${containerStyles}`}
    >
      <div className={`text-7xl py-12 sm:py-24 ${timerStyles}`}>
          {minutes}:{seconds}
        </div>
      </div>
  );
}

function Clock({ isTicking, toggleTicker }) {
  const [time, setTime] = useState(600);

  useEffect(() => {
    if (isTicking && time > 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timeout);
    }
  });

  return <ClockDisplay time={time} isTicking={isTicking} toggleTicker={toggleTicker} />;
}

function ChessTimer() {
  const [isTicking, setIsTicking] = useState(true);
  const [paused, setPaused] = useState(true);

  return (
    <Fragment>
      <Clock isTicking={isTicking && !paused} toggleTicker={() => setIsTicking(!isTicking)} />
      <PauseButton toggle={() => setPaused(!paused)} text={paused ? 'play' : 'pause'} />
      <Clock isTicking={!isTicking && !paused} toggleTicker={() => setIsTicking(!isTicking)} />
    </Fragment>
  );
}

function PauseButton({ toggle, text }) {
  return (
    <div
      onClick={toggle}
      class="rounded-lg text-center bg-grey-100 my-2 uppercase tracking-wider font-semibold text-sm text-gray-700"
    >
      {text}
    </div>
  );
}

function Tab({ active, text }) {
  const activeClasses = active
    ? 'border-gray-500 bg-gray-100 border-l border-t border-r text-blue-700'
    : 'bg-gray-300 text-blue-500 hover:text-blue-800';
  return (
    <li className={`mr-1 ${active ? '-mb-px' : ''}`}>
      <a class={`inline-block rounded-t py-2 px-4 font-semibold ${activeClasses}`} href="#">
        {text}
      </a>
    </li>
  );
}

function NavBar() {
  return (
    <ul class="flex border-b border-gray-500 mb-2">
      <Tab active={false} text="Setup" />
      <Tab active={true} text="Play" />
      <Tab active={false} text="About" />
    </ul>
  );
}

function App() {
  return (
    <div className="App bg-gray-100">
      <div className="px-6 h-screen flex flex-col justify-center">
        <NavBar />
        <ChessTimer />
      </div>
    </div>
  );
}

export default App;
