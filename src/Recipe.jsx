import React, { useEffect, useState } from "react";
import Header from "./Header";

const Recipe = () => {
  const [categories, setCategories] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .catch((err) => console.log(err));
  }, []);

  console.log(categories);

  return (
    <div>
      <Header />
      <div className="d-flex flex-wrap justify-content-between">
        {categories.map((categorie, index) => (
          <button key={index} className="btn btn-primary">
            {categorie.strCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
