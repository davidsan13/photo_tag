import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <Link to="/gameboard"><h1>Gameboard 1</h1></Link>
      <Link to="/gameboard"><h1>Gameboard 2</h1></Link>
    </div>
  );
}
