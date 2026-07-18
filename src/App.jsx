import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" bg-zinc-100">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;