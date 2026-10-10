import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineGppGood } from "react-icons/md";
import { useSelector } from "react-redux";

export const CartHead = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="w-full bg-gradient-to-r from-blue-400 to-purple-800 mb-8 sm:mb-12 px-4 sm:px-6 md:px-10 lg:px-16 py-6 sm:py-8">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        {/* LEFT SIDE */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">

          {/* CART ICON */}
          <div className="relative">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              <FaCartArrowDown />
            </span>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {items.length}
            </span>
          </div>

          {/* TEXT */}
          <div>
            <h1 className="mb-1 sm:mb-2 font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Your Shopping Cart
            </h1>

            <p className="text-white text-sm sm:text-base">
              Review your items and proceed to checkout
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-4">

          <span className="text-2xl sm:text-3xl md:text-4xl text-black">
            <MdOutlineGppGood />
          </span>

          <div className="text-white">
            <h1 className="font-bold text-sm sm:text-base">
              Secure Checkout
            </h1>
            <p className="text-xs sm:text-sm">
              256-bit SSL Encryption
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};