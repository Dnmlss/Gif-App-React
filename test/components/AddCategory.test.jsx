import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	test('debe cambiar el valor de la caja de texto', () => {
		// Creamos el sujeto de pruebas
		render(<AddCategory onNewCategory={() => {}} />);

		// extraemos el input
		const input = screen.getByRole('textbox');

		// Disparamos un evento simulado al input, en este caso como si el usuario hubiera escrito Mortal Kombat
		fireEvent.input(input, { target: { value: 'Mortal Kombat' } });

		// hacemos la aserción de lo que estamos esperando que suceda despues del evento
		expect(input.value).toBe('Mortal Kombat');
		//screen.debug();
	});

	test('debe llamar onNewCategory si el input tiene un valor', () => {
		// Creamos el valor del input
		const inputValue = 'Mortal Kombat';
		// función Mock
		const onNewCategory = jest.fn();

		// creamos sujeto de pruebas
		render(<AddCategory onNewCategory={onNewCategory} />);

		// agarro las referencias del input y form
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		// disparo el primer evento del form que es establecer el valor del input
		fireEvent.input(input, { target: { value: inputValue } });
		// disparamos el submit del form
		fireEvent.submit(form);
		//screen.debug();

		expect(input.value).toBe('');

		// verificamos que la función haya sido llamada
		expect(onNewCategory).toHaveBeenCalled();
		// si queremos verificar que se haya llamado la funcion cierta cant de veces
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		// verificamos si la función es llamada con la caja de texto (input)
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
	});

	test('no debe llamar el onNewCategory si el input esta vacío', () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);
		const form = screen.getByRole('form');

		fireEvent.submit(form);

		expect(onNewCategory).toHaveBeenCalledTimes(0);

		expect(onNewCategory).not.toHaveBeenCalled();
	});
});

// Obs: textbox es el nombre del input
