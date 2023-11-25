import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

describe('Pruebas en <GifGrid />', () => {
	const category = 'Mortal Kombat';

	test('debe mostrar el Loading inicialmente', () => {
		render(<GifGrid category={category} />);

		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
	});
});
