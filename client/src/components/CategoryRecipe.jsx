import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CategoryRecipe = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://nefisyemekler-clone-project.onrender.com/api/recipe")
      .then((response) => {
        const filteredRecipes = response.data.filter(
          (recipe) => recipe.category.toLowerCase() === category
        );
        setRecipes(filteredRecipes);
      })
      .catch((error) => {
        console.error("There was an error fetching the recipes:", error);
      });
  }, [category]);

  return (
    <section className="text-gray-600 body-font">
      <h3 className="text-center mt-16 text-3xl font-serif text-blue-950">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {recipes.map((recipe) => (
            <div key={recipe._id} className="lg:w-1/4 sm:w-1/2 p-4">
              <Link to={`/list-recipe/${recipe._id}`}>
                <div className="relative group">
                  <img
                    alt={recipe.name}
                    className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    src={recipe.picture}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-2xl font-medium text-white bg-opacity-50 px-2 py-1">
                      {recipe.name}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryRecipe;