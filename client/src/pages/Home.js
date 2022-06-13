import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';


const Home = () => {
  // const [currentCategory, setCategory] = useState("");
    //above code unneeded since state is globally managed now
  //Home pg manages state current and setCategory, which is passed to ProductList comp as a prop
  //products from selected category in ProductList is retrieved using Apollo, then passed as new via setCategory
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
