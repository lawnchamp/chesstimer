import React, { Fragment } from 'react';

export function ClockDisplay({ isTicking, time, toggleTicker }) {
  const containerStyles = isTicking ? '' : '';
  const timerStyles = isTicking ? '' : '';

  return (
    <div className="relative flex justify-center items-center">
      <button className={`${containerStyles}`}>
        <div className={`${timerStyles}`}>10:00</div>
      </button>
    </div>
  );
}

function Clock({ isTicking, toggleTicker, startTime = 600 }) {
  return (
    <ClockDisplay
      time={600}
      isTicking={isTicking}
      toggleTicker={toggleTicker}
    />
  );
}

export function PauseButton({ toggle, isPaused }) {
  const buttonStyles = isPaused ? '' : '';

  return (
    <div className="text-center">
      <button className={`${buttonStyles}`}>
        {isPaused ? 'play' : 'pause'}
      </button>
    </div>
  );
}

export function ChessTimer() {
  return (
    <Fragment>
      <Clock isTicking={false} toggleTicker={alert} />
      <PauseButton toggle={alert} isPaused={true} />
      <Clock isTicking={false} toggleTicker={alert} />
    </Fragment>
  );
}
