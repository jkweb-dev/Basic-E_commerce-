import { MdFireTruck } from "react-icons/md";

export const Cart2 = () => {
  return (
    <div className="w-full px-4 mb-6">

      <div className="border-4 border-white rounded-2xl bg-gradient-to-r from-blue-300/30 to-purple-400/30
        flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-24
        py-8 md:py-12 px-6">

        {/* ICON */}
        <div className="text-yellow-900">
          <MdFireTruck className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px]" />
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Enjoy Free Shipping
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            On all orders today
          </p>
        </div>

        {/* BADGE */}
        <div>
          <p className="border-4 border-white rounded-xl bg-gray-100 px-6 py-2 text-center font-bold">
            No Minimum
          </p>
        </div>

      </div>
    </div>
  );
};