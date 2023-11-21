import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

// Functional component

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

	const onAddCategory = (newCategory) => {
		// Evitamos que se guarden categorias iguales
		if (categories.includes(newCategory)) return;
		//console.log(newCategory);
		setCategories([newCategory, ...categories]);

		// Otra forma es utilizando un callback
		//setCategories((cat) => [newCategory, ...categories]);
	};

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory onNewCategory={(value) => onAddCategory(value)} />

			{/* Listado de Gif */}
			<ol>
				{categories.map((category) => {
					return <li key={category}> {category} </li>;
				})}
			</ol>
			{/* Gif item */}
		</>
	);
};

// Evitamos usar el .push en onAddCategory, porque .push muta un objeto o array, React trata de no mutar el estado. por ende debemos crear un nuevo estado, un nuevo array. Para eso utilizamos el operador spread [newCategory, ...categories]

// [...categories, newCategory] Agrega debajo
// [newCategory, ...categories] Agrega arriba
