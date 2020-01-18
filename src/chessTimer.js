import React, { useState, Fragment, useEffect } from 'react';

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

function PauseButton({ toggle, text }) {
  return (
    <div
      onClick={toggle}
      className="text-center my-2 uppercase tracking-wider font-semibold text-sm text-gray-700"
    >
      {text}
    </div>
  );
}

export function ChessTimer() {
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
