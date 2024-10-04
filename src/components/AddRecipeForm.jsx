import React, { useState } from 'react';

const AddRecipeForm = ({ addRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeImage, setRecipeImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the recipe data to the parent component
    addRecipe({ strMeal: recipeName, strMealThumb: recipeImage });
    setRecipeName('');
    setRecipeImage('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Add New Recipe</h2>
        <div>
          <label>Recipe Name</label>
          <input 
            type="text" 
            value={recipeName} 
            onChange={(e) => setRecipeName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Recipe Image URL</label>
          <input 
            type="text" 
            value={recipeImage} 
            onChange={(e) => setRecipeImage(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
