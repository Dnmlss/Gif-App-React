import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
	// test('debe escribir en el value lo que se escribe en input', () => {
	// 	render(<GifExpertApp />);
	// 	const input = screen.getByRole('textbox');
	// 	fireEvent.input(input, { target: { value: 'Gta 6' } });

	// 	expect(input.value).toBe('Gta 6');
	// });

	// test('debe hacer match con el snapshot', () => {
	// 	const { container } = render(<GifExpertApp />);
	// 	expect(container).toMatchSnapshot();
	// });

	test('No agrega categorias vacias al estado', () => {
		const { getByTestId } = render(<GifExpertApp />);
		const input = getByTestId(h3);

		fireEvent.change(input, { target: { value: '' } });
		fireEvent.keyDown(input, { key: 'enter', code: 13, charCode: 13 });
		screen.debug();
		expect(screen.queryByText('')).toBeNull();
	});
});
