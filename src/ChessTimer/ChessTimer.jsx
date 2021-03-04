import React, { useState, Fragment, useEffect } from 'react';

export function ClockDisplay({ isTicking, time, toggleTicker }) {
  const [rotation, setRotation] = useState(0);

  function onRotationClicked(event) {
    event.stopPropagation();
    setRotation(rotation + 45);
  }

  const minutes = Math.floor(time / 60);
  const seconds = (time % 60).toString().padStart(2, '0');

  const containerStyles = isTicking
    ? 'bg-gray-300 border border-gray-700 shadow-2xl'
    : 'bg-white border';
  const timerStyles = isTicking ? 'text-gray-700' : 'text-gray-300';

  return (
    <div className="relative">
      <button
        disabled={!isTicking || time <= 0}
        onClick={toggleTicker}
        className={`${containerStyles} w-full rounded-lg h-half focus:outline-none`}
      >
        <svg
          className={`${timerStyles} absolute top-0 right-0 w-8 h-8 m-2 fill-current hover:text-gray-900`}
          onClick={onRotationClicked}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M15 17v-2.99A4 4 0 0 0 11 10H8v5L2 9l6-6v5h3a6 6 0 0 1 6 6v3h-2z" />
        </svg>
        <div
          className={`${timerStyles} text-8xl`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {minutes}:{seconds}
        </div>
      </button>
    </div>
  );
}

function Clock({ isTicking, toggleTicker, startTime = 600 }) {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    if (isTicking && time > 0) {
      const timeout = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timeout);
    }
  });

  return (
    <ClockDisplay
      time={time}
      isTicking={isTicking}
      toggleTicker={toggleTicker}
    />
  );
}

export function PauseButton({ toggle, isPaused }) {
  const buttonStyles = isPaused
    ? 'text-white bg-teal-800 hover:bg-teal-600'
    : 'text-gray-700 border hover:bg-gray-200';

  return (
    <div className="text-center">
      <button
        onClick={toggle}
        className={`${buttonStyles} w-24 py-2 my-4 text-sm font-semibold tracking-wider uppercase rounded-full focus:outline-none focus:shadow-outline`}
      >
        {isPaused ? 'play' : 'pause'}
      </button>
    </div>
  );
}

export function ChessTimer() {
  const [firstClockIsTicking, setFirstClockIsTicking] = useState(
    true
  );
  const [gameIsPaused, setGameIsPaused] = useState(true);

  return (
    <Fragment>
      <Clock
        isTicking={firstClockIsTicking && !gameIsPaused}
        toggleTicker={() =>
          setFirstClockIsTicking(!firstClockIsTicking)
        }
      />
      <PauseButton
        toggle={() => setGameIsPaused(!gameIsPaused)}
        isPaused={gameIsPaused}
      />
      <Clock
        isTicking={!firstClockIsTicking && !gameIsPaused}
        toggleTicker={() =>
          setFirstClockIsTicking(!firstClockIsTicking)
        }
      />
    </Fragment>
  );
}
