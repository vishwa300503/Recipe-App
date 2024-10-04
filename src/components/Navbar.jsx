import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecipeContext } from '../context/RecipeContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const { toggleForm } = useContext(RecipeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  return (
    <>
      <div className="nav">
        <div className="left">
          <Link to="/" className="link">
            <h2>Recipe App</h2>
          </Link>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setInput(e.target.value)} type="text" />
          </form>
        </div>
        <div className="right">
          <Link to={`/add-recipe`} onClick={toggleForm} style={{ cursor: "pointer" }}>
           <button style={{height:"30px",borderRadius:"10px"}}>Add Recipe</button> 
          </Link>
          <Link to={`/category/indian`} className="link">
            <div>Indian</div>
          </Link>
          <Link to={`/category/american`} className="link">
            <div>American</div>
          </Link>
          <Link to={`/category/british`} className="link">
            <div>British</div>
          </Link>
        
        </div>
      </div>
    </>
  );
};

export default Navbar;
