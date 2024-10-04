// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import RecipeId from "./components/RecipeId";
import Category from "./components/Category";
import SearchElement from "./components/SearchElement";
import Navbar from "./components/Navbar";
import { RecipeProvider } from "./context/RecipeContext"; 
import AddRecipeForm from "./components/AddRecipeForm"; 

const App = () => {
  return (
    <RecipeProvider>
      <Router>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idMeal" element={<RecipeId />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/search/:searchTerm" element={<SearchElement />} />
          <Route  path="/add-recipe" element={<AddRecipeForm />} /> 
        </Routes>
      </Router>
    </RecipeProvider>
  );
};

export default App;
