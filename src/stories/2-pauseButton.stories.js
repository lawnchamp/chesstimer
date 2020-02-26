import React from 'react';
import { action } from '@storybook/addon-actions';
import { PauseButton } from '../chessTimer';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import '../styles/tailwind.css';

export default {
  title: 'Pause Button',
  component: 'PauseButton',
  decorators: [withKnobs],
};

export function GameIsPaused() {
  return (
    <PauseButton toggle={action('button clicked')} isPaused={true} />
  );
}

export function GameIsPlaying() {
  return (
    <PauseButton toggle={action('button clicked')} isPaused={false} />
  );
}

export function VariableState() {
  return (
    <PauseButton
      toggle={action('button clicked')}
      isPaused={boolean('isPaused', true)}
    />
  );
}
