import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white mt-10">
      <div className="w-7xl px-6 py-6 flex flex-row justify-between items-center">
        <img src={logo} alt="Logo" className="h-12" />

        <div className="flex gap-6 my-3">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/shop" className="hover:text-green-400">Shop</Link>
          <Link to="/cart" className="hover:text-green-400">Cart</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;