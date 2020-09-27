import React from 'react';
import { ClockDisplay } from './ChessTimer';
// import './styles/tailwind.css';

export default {
  title: 'Chess Timer/ClockDisplay',
  component: ClockDisplay,
  argTypes: { toggleTicker: { action: 'clock face clicked' } },
  args: {
    time: 600,
  },
};

const Template = (args) => <ClockDisplay {...args} />;

export const Active = Template.bind({});
Active.args = {
  isTicking: true,
};

export const Paused = Template.bind({});
Paused.args = {
  isTicking: false,
};

// export const VariableTime = () => {
//   const defaultValue = 90;
//   const options = {
//     range: true,
//     min: 0,
//     max: 700,
//     step: 1,
//   };

//   return (
//     <ClockDisplay
//       time={number('Time (seconds)', defaultValue, options)}
//       isTicking={boolean('isTicking', true)}
//       toggleTicker={action('clock face clicked')}
//     />
//   );
// };
