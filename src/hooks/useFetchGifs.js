// un hook es una funcion que retorna algo

import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGif';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    // images: images,
    images,
    // isLoading: isLoading,
    isLoading,
  };
};
