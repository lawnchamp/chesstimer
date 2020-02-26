import React, { useState, Fragment, useEffect } from 'react';

export function ClockDisplay({ isTicking, time, toggleTicker }) {
  const containerStyles = isTicking ? '' : '';
  const timerStyles = isTicking ? '' : '';

  return (
    <button>
      <div>10:00</div>
    </button>
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
