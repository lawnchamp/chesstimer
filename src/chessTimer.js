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
  const buttonStyles = isPaused ? '' : '';

  return (
    <div>
      <button>play</button>
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
