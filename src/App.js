import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { About } from './about';
import { ChessTimer } from './chessTimer';

function Tab({ active, children, onClick }) {
  const activeClasses = active
    ? 'border-gray-500 bg-gray-100 border-l border-t border-r text-blue-800'
    : 'text-blue-500 hover:text-blue-800';
  return (
    <li className={`mr-1 ${active ? '-mb-px' : ''}`} onClick={onClick}>
      <div className={`inline-block rounded-t py-2 px-4 font-medium ${activeClasses}`}>
        {children}
      </div>
    </li>
  );
}

function Setup() {
  return <h2 className="my-2 font-semibold text-2xl text-gray-700">Coming soon!</h2>;
}

function App() {
  const [activeTab, setActiveTab] = useState(window.location.hash);

  return (
    <div className="App bg-gray-100 px-6 h-screen">
      <header className="py-6 max-w-xl mx-auto">
        <nav className="navbar navbar-light">
          <ul className="flex border-b border-gray-500 mb-2">
            <Link to="/setup">
              <Tab onClick={() => setActiveTab('#/setup')} active={activeTab === '#/setup'}>
                Setup
              </Tab>
            </Link>
            <Link to="/">
              <Tab onClick={() => setActiveTab('#/')} active={activeTab === '#/'}>
                Play
              </Tab>
            </Link>
            <Link to="/about">
              <Tab onClick={() => setActiveTab('#/about')} active={activeTab === '#/about'}>
                About
              </Tab>
            </Link>
          </ul>
        </nav>
        <Route path="/setup" component={Setup} />
        <Route exact={true} path="/" component={ChessTimer} />
        <Route path="/about" component={About} />
      </header>
    </div>
  );
}

export default App;
