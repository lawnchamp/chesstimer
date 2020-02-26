import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { About } from './about';
import { ChessTimer } from './chessTimer';

export function Tab({ active, children, onClick }) {
  const activeClasses = active
    ? 'text-blue-800 bg-gray-100 border-t border-l border-r border-gray-500'
    : 'text-blue-500 hover:text-blue-800';

  return (
    <li
      className={`mr-1 ${active ? '-mb-px' : ''}`}
      onClick={onClick}
    >
      <div
        className={`${activeClasses} inline-block px-4 py-2 font-medium rounded-t`}
      >
        {children}
      </div>
    </li>
  );
}

function Tabs() {
  const [activeTab, setActiveTab] = useState(window.location.hash);

  return (
    <nav className="navbar navbar-light">
      <ul className="flex mb-2 border-b border-gray-500">
        <Link to="/setup">
          <Tab
            onClick={() => setActiveTab('#/setup')}
            active={activeTab === '#/setup'}
          >
            Setup
          </Tab>
        </Link>
        <Link to="/">
          <Tab
            onClick={() => setActiveTab('#/')}
            active={activeTab === '#/'}
          >
            Play
          </Tab>
        </Link>
        <Link to="/about">
          <Tab
            onClick={() => setActiveTab('#/about')}
            active={activeTab === '#/about'}
          >
            About
          </Tab>
        </Link>
      </ul>
      <Route path="/setup" component={Setup} />
      <Route exact={true} path="/" component={ChessTimer} />
      <Route path="/about" component={About} />
    </nav>
  );
}

function Setup() {
  return (
    <h2 className="my-2 text-2xl font-semibold text-gray-700">
      Coming soon!
    </h2>
  );
}

function App() {
  return (
    <div className="h-screen bg-gray-100 App">
      <header className="max-w-xl p-6 mx-auto">
        <Tabs />
      </header>
    </div>
  );
}

export default App;
