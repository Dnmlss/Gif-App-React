import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	useFetchGifs.mockReturnValue({
		images: [],
		isLoading: true,
	});

	const category = 'Mortal Kombat';

	test('debe mostrar el Loading inicialmente', () => {
		render(<GifGrid category={category} />);
		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
	});

	test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
		const gifs = [
			{
				id: 'ABC',
				title: 'Scorpion',
				url: 'https://mortalkombat.jpg',
			},

			{
				id: 'CBA',
				title: 'Sub Zero',
				url: 'https://mortalkombat.jpg',
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);
		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
