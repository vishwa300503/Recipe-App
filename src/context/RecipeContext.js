
import React, { createContext, useState } from "react";

// Create the Recipe Context
export const RecipeContext = createContext();


export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // Manage recipes globally
  const [isFormOpen, setIsFormOpen] = useState(false); // Manage form visibility


  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

 
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.idMeal !== id));
  };


  const editRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.idMeal === updatedRecipe.idMeal ? updatedRecipe : recipe
      )
    );
  };

  // Toggle form visibility
  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        addRecipe,
        deleteRecipe,
        editRecipe,
        isFormOpen,
        toggleForm,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
