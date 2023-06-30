import React from 'react';
import {
  Routes, Route, Link,
} from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Gameboard from './Gameboard';
function RouteSwitch() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameboard" element={<Gameboard />} />
      </Routes>
    </>
  );
}
export default RouteSwitch;
