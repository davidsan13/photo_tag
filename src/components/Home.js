import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <Link to="/gameboard/1"><h1>Gameboard 1</h1></Link>
      <Link to="/gameboard/2"><h1>Gameboard 2</h1></Link>
    </div>
  );
}
