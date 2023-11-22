import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
	};

	useEffect(() => {
		getImages();
	}, []); // si dejamos las dependencias [array] vacias, significa que este hook solo se va a disparar la primera vez que se crea y construye este componente

	return (
		<>
			<h3>{category}</h3>

			<div className='card-grid'>
				{images.map((images) => (
					<GifItem key={images.id} {...images} />
				))}
			</div>
		</>
	);
};

// Hook de React que sirve para disparar efectos secundarios. Sería algún proceso que querramos ejecutar cuando algo suceda,por ej: cuando el counter cambie, lanzamos un efecto, cuando agregamos una categoria, lanzamos un efecto, cuando el componente se renderiza por primera vez, lanzamos un efecto, lanzamos los efectos secuandarios en cualquier punto que querramos.

// El hook useEffect utiliza dos argumentos, el primero es un callback(cualquier función) y luego una lista de dependencias(condiciones por las cuales queremos volver a ejecutar el callback)
