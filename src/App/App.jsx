import React, { useState } from 'react';
import { Link, Route, HashRouter } from 'react-router-dom';

import { About } from '../About/About';
import { ChessTimer } from '../ChessTimer/ChessTimer';
import Tab from '../Tab/Tab';
import Setup from '../Setup/Setup';

import '../tailwind.generated.css';

export default function App() {
  const [activeTab, setActiveTab] = useState(window.location.hash);

  return (
    <HashRouter>
      <div className="App h-screen bg-gray-100 antialiased">
        <header className="max-w-xl p-6 mx-auto">
          <nav className="navbar navbar-light">
            <ul className="flex mb-2 border-b border-gray-500">
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
            <Route path="/setup" component={Setup} />
            <Route exact={true} path="/" component={ChessTimer} />
            <Route path="/about" component={About} />
          </nav>
        </header>
      </div>
    </HashRouter>
  );
}
