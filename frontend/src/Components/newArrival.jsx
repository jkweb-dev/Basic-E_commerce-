import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

export const NewArrival = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="w-full flex justify-center mt-4 px-2 sm:px-4 md:px-6">

      <div className="w-full bg-white rounded-lg p-3 sm:p-5 md:p-8 lg:p-10">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
          New Arrivals
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-4 gap-4 sm:gap-5 md:gap-6 border-t-2 border-gray-200">

          {data.map((pro) => (
            <div
              key={pro._id || pro.name}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white"
            >

              {/* Image */}
              <img
                onClick={() => navigate(`/products/${pro.name}`)}
                src={pro.image}
                alt={pro.category}
                className="
                  h-44 sm:h-52 md:h-60 lg:h-64
                  w-full object-cover cursor-pointer
                "
              />

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-5">

                <h1 className="text-lg sm:text-xl font-bold text-blue-900">
                  {pro.name}
                </h1>

                <h1 className="text-base sm:text-lg font-bold mt-1 mb-3 text-red-900">
                  ${pro.price}
                </h1>

                <button
                  onClick={() => dispatch(addToCart(pro))}
                  className="
                    w-full bg-blue-900 text-white
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