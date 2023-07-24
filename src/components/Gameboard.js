import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pokemon1 from '../assets/pokemon1.jpg';
import pokemon2 from '../assets/pokemon.png';

export default function Gameboard() {
  const { id } = useParams();
  const source = `pokemon${id}`
  console.log(source)
  const image = source === 'pokemon1' ? pokemon1 : pokemon2;
  const photo = document.getElementByClassName('picture')
  useEffect(() => {
    handleClick();
  }, []);

  function handleClick(event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(`The click event occurred at (${x}, ${y})`);

  }
  function clickHotSpotImage(event) {
    
  }
  return (
    <>
      <h1> Gameboard {id} </h1>
      <img className="picture" src={image} alt="pokemon-puzzle" />
    </>
  );
}
