import React, { useState, Fragment, useEffect } from 'react';

export function ClockDisplay({ isTicking, time, toggleTicker }) {
  const containerStyles = isTicking ? '' : '';
  const timerStyles = isTicking ? '' : '';

  return (
    <div className="">
      <button className={`${containerStyles} w-full`}>
        <div className={`${timerStyles}`}>10:00</div>
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
  const buttonStyles = isPaused ? '' : '';

  return (
    <div className="text-center">
      <button className={`${buttonStyles}`}>play</button>
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
