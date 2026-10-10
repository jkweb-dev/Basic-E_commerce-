import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  return (
    <nav className="w-full bg-white shadow px-4 sm:px-6 md:px-8">

      {/* TOP BAR */}
      <div className="h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex-1">
          <h1 className="font-bold text-blue-900 text-2xl sm:text-3xl">
            E-Shop
          </h1>
        </div>

        {/* Desktop Search */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex flex-[2] items-center"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 md:h-12 px-3 md:px-4 rounded-l-lg border border-gray-300 outline-none"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="bg-blue-900 h-10 md:h-12 w-10 md:w-12 text-white flex justify-center items-center rounded-r-lg"
          >
            <FaSearch />
          </button>
        </form>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-around items-center">
          <NavLink to="/about" className="font-serif">
            About
          </NavLink>
          <NavLink to="/contact" className="font-serif">
            Contact
          </NavLink>

          <div className="relative">
            <NavLink to="/cart" className="text-3xl">
              <FaCartArrowDown />
            </NavLink>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden pb-4 space-y-4">

          {/* Mobile Search */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 px-3 border border-gray-300 rounded-l-lg"
              placeholder="Search..."
            />
            <button className="bg-blue-900 h-10 w-10 text-white flex items-center justify-center rounded-r-lg">
              <FaSearch />
            </button>
          </form>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <NavLink onClick={() => setMenuOpen(false)} to="/about">
              About
            </NavLink>

            <NavLink onClick={() => setMenuOpen(false)} to="/contact">
              Contact
            </NavLink>

            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/cart"
              className="flex items-center gap-2"
            >
              <FaCartArrowDown className="text-xl" />
              Cart ({items.length})
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};