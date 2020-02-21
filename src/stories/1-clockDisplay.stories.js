import React from 'react';
import { action } from '@storybook/addon-actions';
import { ClockDisplay } from '../chessTimer';
import '../styles/tailwind.css';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Clock Display',
  component: 'ClockDisplay',
  decorators: [withKnobs],
};

export const Active = () => {
  return <ClockDisplay time={600} isTicking={true} toggleTicker={action('clock face clicked')} />;
};

export const Paused = () => {
  return <ClockDisplay time={600} isTicking={false} toggleTicker={action('clock face clicked')} />;
};

export const VariableTime = () => {
  const defaultValue = 90;
  const options = {
    range: true,
    min: 0,
    max: 700,
    step: 1,
  };

  return (
    <ClockDisplay
      time={number('Time (seconds)', defaultValue, options)}
      isTicking={boolean('isTicking', true)}
      toggleTicker={action('clock face clicked')}
    />
  );
};
