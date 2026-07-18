import { FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-5 px-6 py-3">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Search */}
        <div className="md:w-1/2">
          <div className="flex">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-emerald-600"
            />

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 rounded-r-lg transition">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Cart */}
        <button className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-lg transition">
          <FaShoppingCart />
          <span>Cart (0)</span>
        </button>
      </div>

      {/* Bottom Menu */}
      <div className="bg-gray-800">
        <ul className="max-w-7xl mx-auto flex justify-center gap-10 py-4 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-emerald-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="hover:text-emerald-400 transition">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/cart" className="hover:text-emerald-400 transition">
              Cart
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-emerald-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
