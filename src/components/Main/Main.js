import React from 'react';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';
import './Main.css';
import background from '../../background.png';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((item) => (
        <Animal key={item.name} {...item} />
      ))}
    </main>
  );
}
