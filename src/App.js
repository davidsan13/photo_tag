/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RouteSwitch from './components/RouteSwitch';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouteSwitch />
      </div>
    </BrowserRouter>
  );
}

export default App;
