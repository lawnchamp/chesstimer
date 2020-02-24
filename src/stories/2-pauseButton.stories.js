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

export const GameIsPaused = () => <PauseButton toggle={action('button clicked')} paused={true} />;
export const GameIsPlaying = () => <PauseButton toggle={action('button clicked')} paused={false} />;
export const VariableState = () => (
  <PauseButton toggle={action('button clicked')} paused={boolean('paused', true)} />
);
