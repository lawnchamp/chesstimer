import React, { useState, Fragment, useEffect } from 'react';

export function ClockDisplay({ isTicking, time, toggleTicker }) {
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
        className={`${containerStyles} w-full rounded-lg h-half`}
      >
        <div className={`${timerStyles} text-8xl`}>
          {minutes}:{seconds}
        </div>
      </button>
    </div>
  );
}

function Clock({ isTicking, toggleTicker, startTime }) {
  return (
    <ClockDisplay
      time={600}
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
  return (
    <Fragment>
      <Clock isTicking={true} toggleTicker={alert} />
      <PauseButton toggle={alert} isPaused={true} />
      <Clock isTicking={false} toggleTicker={alert} />
    </Fragment>
  );
}
