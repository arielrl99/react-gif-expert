// import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// import { getGif } from '../helpers/getGif';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  // el use effect se usa para disparar un efecto secundario, ejemplo, cuando suceda el counter hacer algo
  //   cuando mande una categoria, cuando el componente se renderice x primera vez
  //   quiero disparar mi peticion hhtp
  //   Como funciona? se le pasa un callback que son los efectos y las dependencias que hacen q se vuelva a ejecutar

  //   en el arreglo van las dependencias, si estan vacias significa q solo se va a disparar la primera vez

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className='card-grid'>
        {images.map((image) => (
          // <GifItem key={image.id} title={image.title} url={image.url} />
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
