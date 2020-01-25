import React, { useState, Fragment, useEffect } from 'react';

function ClockDisplay({ isTicking, time, toggleTicker }) {
  const [rotation, setRotation] = useState(0);

  function onRotationClicked(event) {
    event.stopPropagation();
    setRotation(rotation + 45);
  }

  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().padStart(2, '0');

  const containerStyles = isTicking ? 'shadow-2xl bg-gray-300 border border-gray-700' : 'bg-white';
  const timerStyles = isTicking ? 'text-gray-700' : 'text-gray-300';

  return (
    <div
      onClick={() => isTicking && time > 0 && toggleTicker()}
      className={`relative rounded-lg h-half flex justify-center items-center ${containerStyles}`}
    >
      <svg
        className={`${timerStyles} h-8 w-8 hover:text-black absolute top-0 right-0 m-2`}
        onClick={onRotationClicked}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M15 17v-2.99A4 4 0 0 0 11 10H8v5L2 9l6-6v5h3a6 6 0 0 1 6 6v3h-2z" />
      </svg>
      <div className={`text-8xl ${timerStyles}`} style={{ transform: `rotate(${rotation}deg)` }}>
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
      className="text-center my-4 uppercase tracking-wider font-semibold text-sm text-gray-700"
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
