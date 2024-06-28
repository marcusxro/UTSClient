import React, { useEffect } from 'react';

const ImageLoader = ({ src, onLoad, onError }) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = onLoad;
    img.onerror = onError;
  }, [src, onLoad, onError]);

  return null; // This component does not render any visible content
};

export default ImageLoader;
