import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{isLoading && <h2>Cargando...</h2>}

			<div className='card-grid'>
				{images.map((image) => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};

// Hook de React que sirve para disparar efectos secundarios. Sería algún proceso que querramos ejecutar cuando algo suceda,por ej: cuando el counter cambie, lanzamos un efecto, cuando agregamos una categoria, lanzamos un efecto, cuando el componente se renderiza por primera vez, lanzamos un efecto, lanzamos los efectos secuandarios en cualquier punto que querramos.

// El hook useEffect utiliza dos argumentos, el primero es un callback(cualquier función) y luego una lista de dependencias(condiciones por las cuales queremos volver a ejecutar el callback)
