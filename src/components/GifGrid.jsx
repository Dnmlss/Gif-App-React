import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
	getGifs(category);

	// constante con array y cantidad de gifs

	return (
		<>
			<h3>{category}</h3>
			<p>op</p>
		</>
	);
};
