import { useState } from "react";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Hero from "../components/Hero";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Hero/>
      <Categories changeCategory={setSelectedCategory} />
      <Products changeCategory={selectedCategory} />
    </div>
  );
};

export default Home;
