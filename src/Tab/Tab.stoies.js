import React from 'react';
import Tab from './Tab';
// import '../styles/tailwind.css';

export default {
  title: 'Tab',
  component: Tab,
  argTypes: { onClick: { action: 'tab clicked' } },
  args: {
    active: false,
  },
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  label: 'Button',
};

// export const HardCodedTabs = () => {
//   return (
//     <ul className="flex mb-2 border-b border-gray-500">
//       <Tab onClick={action('tab 1 clicked')} active={false}>
//         Setup
//       </Tab>

//       <Tab onClick={action('tab 2 clicked')} active={true}>
//         Play
//       </Tab>

//       <Tab onClick={action('tab 3 clicked')} active={false}>
//         About
//       </Tab>

//       <Tab onClick={action('tab 4 clicked')} active={false}>
//         Contact Us
//       </Tab>

//       <Tab onClick={action('tab 5 clicked')} active={false}>
//         Pricing
//       </Tab>
//     </ul>
//   );
// };

// export const ReactiveTabs = () => {
//   const [activeTab, setActiveTab] = useState(2);

//   return (
//     <ul className="flex mb-2 border-b border-gray-500">
//       <Tab onClick={() => setActiveTab(1)} active={activeTab === 1}>
//         Setup
//       </Tab>

//       <Tab onClick={() => setActiveTab(2)} active={activeTab === 2}>
//         Play
//       </Tab>

//       <Tab onClick={() => setActiveTab(3)} active={activeTab === 3}>
//         About
//       </Tab>

//       <Tab onClick={() => setActiveTab(4)} active={activeTab === 4}>
//         Contact Us
//       </Tab>

//       <Tab onClick={() => setActiveTab(5)} active={activeTab === 5}>
//         Pricing
//       </Tab>
//     </ul>
//   );
// };

// export const PureTabs = () => {
//   return (
//     <div>
//       <Tab onClick={action('tab 1 clicked')} active={false}>
//         Setup
//       </Tab>
//       <Tab onClick={action('tab 2 clicked')} active={true}>
//         play
//       </Tab>
//       <Tab onClick={action('tab 3 clicked')} active={false}>
//         fun
//       </Tab>
//     </div>
//   );
// };
