import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import axios from "axios";

export const Category = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cn } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `http://localhost:5000/categories?category=${cn}`
        );

        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [cn]);

  return (
    <>
      {/* HEADER */}
      <div className="bg-blue-100 py-10 sm:py-12 px-4 sm:px-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-700 text-center">
          {cn}
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-sans text-center mt-4 sm:mt-6">
          Find the best products for you!
        </p>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          Loading...
        </div>
      ) : products.length === 0 ? (
        <div className="flex justify-center items-center py-20 text-gray-500">
          No products found
        </div>
      ) : (
        /* GRID */
        <div className="bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-12 py-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">

            {products.map((p) => (
              <div
                key={p._id || p.name}
                className="bg-white p-3 sm:p-4 rounded border border-gray-200"
              >
                {/* IMAGE */}
                <img
                  onClick={() => navigate(`/products/${p.name}`)}
                  src={p.image}
                  alt={p.name}
                  className="w-full h-40 sm:h-48 object-cover mb-2 cursor-pointer rounded"
                />

                {/* NAME */}
                <h1 className="font-bold text-sm sm:text-base md:text-lg text-blue-900 text-center mb-2">
                  {p.name}
                </h1>

                {/* PRICE */}
                <h1 className="text-red-600 font-bold text-center mb-2">
                  ${p.price}
                </h1>

                {/* BUTTON */}
                <button
                  onClick={() => dispatch(addToCart(p))}
                  className="w-full bg-blue-800 text-white py-2 rounded active:scale-95 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};