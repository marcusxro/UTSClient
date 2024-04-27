import React from 'react';
import imgFile from '../images/IMG_6582.png';

const CoolSVG = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 200 150"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: '#f0f0f0', borderRadius: '10px' }}
    >
      <rect width="200" height="100" fill="#3498db" />
      <polygon points="0,100 100,150 200,100" fill="#3498db" />
      {/* Embedding the image directly using the <image> tag */}
      <image href={imgFile} width="200" height="100" />
    </svg>
  );
};

export default CoolSVG;
