import { useState } from 'react';

// Functional component

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	const onAddCategory = () => {
		setCategories(['DeathNote', ...categories]);

		// Otra forma es utilizando un callback
		//setCategories((cat) => [...categories, 'DeathNote']);
	};

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>

			{/* Input */}

			{/* Listado de Gif */}
			<button onClick={onAddCategory}>Agregar</button>
			<ol>
				{categories.map((category) => {
					return <li key={category}> {category} </li>;
				})}
			</ol>
			{/* Gif item */}
		</>
	);
};

// Evitamos usar el .push en onAddCategory, porque .push muta un objeto o array, React trata de no mutar el estado. por ende debemos crear un nuevo estado, un nuevo array. Para eso utilizamos el operador spread [...categories, 'DeathNote']

// [...categories, 'DeathNote'] Agrega debajo
// ['DeathNote', ...categories] Agrega arriba
