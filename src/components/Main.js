// Main.js
import React from 'react';
import Slider from './Slider';
import images from '../img/imgList';

const Main = () => (
  <main className="flex-1 w-full mx-auto bg-hoverPink bg-opacity-30 flex items-center justify-center">
    <div className="w-full max-w-4xl">
      <Slider images={images} />
    </div>
  </main>
);

export default Main;
