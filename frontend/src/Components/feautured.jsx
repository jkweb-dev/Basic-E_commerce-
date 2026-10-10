import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

export const Featured = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="w-full flex justify-center mt-4 px-2 sm:px-4 md:px-6">
      <div className="w-full sm:w-[98%] bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-md">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
          Featured Products
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 p-2 sm:p-4 border-t-2 border-gray-200">

          {data.map((p) => (
            <div
              key={p._id || p.name}
              className="border rounded-lg overflow-hidden flex flex-col bg-white"
            >

              {/* Image */}
              <img
                onClick={() => navigate(`/products/${p.name}`)}
                src={p.image}
                alt={p.name}
                className="
                  h-40 sm:h-44 md:h-48 lg:h-48
                  w-full object-cover cursor-pointer
                "
              />

              {/* Content */}
              <div className="p-3 sm:p-4 flex flex-col flex-1">

                <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">
                  {p.name}
                </h2>

                <p className="text-base sm:text-lg font-bold text-red-900 mb-3 sm:mb-4">
                  ${p.price}
                </p>

                <button
                  onClick={() => dispatch(addToCart(p))}
                  className="
                    mt-auto bg-blue-900 text-white
                    py-2 sm:py-3 rounded-lg
                    hover:bg-blue-800
                    active:scale-95 transition duration-150
                    text-sm sm:text-base
                  "
                >
                  Add to cart
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};