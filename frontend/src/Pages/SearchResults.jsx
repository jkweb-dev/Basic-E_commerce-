import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const search = new URLSearchParams(location.search).get("q");

  const [searchi, setSearchi] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // SEARCH SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchi.trim()) {
      navigate(`/search?q=${searchi}`);
    }
  };

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `http://localhost:5000/search?q=${search || ""}`
        );

        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100">

      {/* SEARCH BAR */}
      <div className="bg-gray-200 py-6 px-4 sm:px-10 md:px-20 lg:px-40">
        <form onSubmit={handleSubmit} className="flex items-center w-full">

          <input
            value={searchi}
            onChange={(e) => setSearchi(e.target.value)}
            className="w-full h-12 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-400"
            placeholder="Search..."
          />

          <button
            type="submit"
            className="bg-blue-900 h-12 w-12 flex justify-center items-center text-white rounded-r-lg"
          >
            <FaSearch />
          </button>

        </form>
      </div>

      {/* RESULTS */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8">

        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          Search Results for: "{search}"
        </h1>

        <p className="mb-6 text-gray-700">
          {products.length} results found
        </p>

        {/* GRID */}
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((p) => (
              <div
                key={p._id || p.name}
                className="border border-gray-200 rounded bg-white overflow-hidden"
              >
                <img
                  onClick={() => navigate(`/products/${p.name}`)}
                  className="w-full h-40 sm:h-48 object-cover cursor-pointer"
                  src={p.image}
                  alt={p.name}
                />

                <div className="p-4">

                  <p className="font-bold text-lg sm:text-xl mb-1">
                    {p.name}
                  </p>

                  <p className="text-sm text-gray-600 mb-1">
                    Category: {p.category}
                  </p>

                  <p className="font-bold mb-3">${p.price}</p>

                  <button
                    onClick={() => dispatch(addToCart(p))}
                    className="w-full bg-blue-900 text-white h-10 sm:h-12 rounded active:scale-95 transition"
                  >
                    Add to cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
};