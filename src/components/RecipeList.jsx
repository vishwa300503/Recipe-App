

import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, deleteRecipe } = useContext(RecipeContext);

  return (
    <div style={{ width: '90%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gridGap: '1rem', marginTop: '2rem' }}>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} style={{ textAlign: 'center' }}>
          <Link to={`/${recipe.idMeal}`} className="link">
            <div className="img">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '13rem' }} />
            </div>
            <h3>{recipe.strMeal}</h3>
          </Link>
          <button onClick={() => deleteRecipe(recipe.idMeal)} style={{ cursor: 'pointer', marginTop: '1rem' }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
