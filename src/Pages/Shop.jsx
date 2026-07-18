import { useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Shop = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <h2 className="text-5xl text-center font-semibold my-8 uppercase tracking-wide">Shop</h2>
      <Categories changeCategory={setCategory} name="" />
      <Products changeCategory={category} />
    </div>
  );
};

export default Shop;