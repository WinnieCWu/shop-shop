import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  const [currentCategory, setCategory] = useState("");
  //Home pg manages state current and setCategory, which is passed to ProductList comp as a prop
  //products from selected category in ProductList is retrieved using Apollo, then passed as new via setCategory
  return (
    <div className="container">
      <CategoryMenu setCategory={setCategory} />
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;
