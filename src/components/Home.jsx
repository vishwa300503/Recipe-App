

import React from 'react';
import RecipeList from './RecipeList';
import PopularSlider from './PopularSlider';
import TrendingSlider from './TredingSlider';

const Home = () => {
  return (
    <div className="main">
      <RecipeList /> {/* Display the list of recipes */}
      <PopularSlider />
      <TrendingSlider />
    </div>
  );
};

export default Home;
