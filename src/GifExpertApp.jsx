import { useState } from "react";

// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // categories.push('Valorant'); // En React no es recomendado utilizar push
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Valorant']);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* Listado de Gifs */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif Item */}
    </>
  );
};
