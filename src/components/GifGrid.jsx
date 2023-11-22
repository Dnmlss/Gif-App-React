import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	const [counter, setCounter] = useState(10);

	// Dos argumentos, el primero es un callback(cualquier función) y luego una lista de dependencias(condiciones por las cuales queremos volver a ejecutar el callback)
	useEffect(() => {
		getGifs(category);
	}, []); // si dejamos las dependencias [array] vacias, significa que este hook solo se va a disparar la primera vez que se crea y construye este componente

	return (
		<>
			<h3>{category}</h3>
			<h5>{counter}</h5>
			<button onClick={() => setCounter(counter + 1)}>+1</button>
		</>
	);
};

// Hook de React que sirve para disparar efectos secundarios. Sería algún proceso que querramos ejecutar cuando algo suceda,por ej: cuando el counter cambie, lanzamos un efecto, cuando agregamos una categoria, lanzamos un efecto, cuando el componente se renderiza por primera vez, lanzamos un efecto, lanzamos los efectos secuandarios en cualquier punto que querramos.
