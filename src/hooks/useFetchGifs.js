// Custom Hooks

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
	}, []); // si dejamos las dependencias [array] vacias, significa que este hook solo se va a disparar la primera vez que se crea y construye este componente

	return {
		images,
		isLoading,
	};
};
