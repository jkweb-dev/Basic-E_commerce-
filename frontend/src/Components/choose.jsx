export const Choose = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-24 py-10 sm:py-12">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold font-sans text-center mb-6 sm:mb-10">
        Why Choose Us?
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center">

        {/* Item 1 */}
        <div className="md:border-r-2 md:border-gray-300 pr-4">
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
            10K+
          </h1>
          <p className="text-sm sm:text-base text-black">
            Happy Customers
          </p>
        </div>

        {/* Item 2 */}
        <div className="md:border-r-2 md:border-gray-300 pr-4">
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
            500+
          </h1>
          <p className="text-sm sm:text-base text-black">
            Products
          </p>
        </div>

        {/* Item 3 */}
        <div className="md:border-r-2 md:border-gray-300 pr-4">
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
            Fast Delivery
          </h1>
          <p className="text-sm sm:text-base text-black">
            Across the Country
          </p>
        </div>

        {/* Item 4 */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
            Trusted
          </h1>
          <p className="text-sm sm:text-base text-black">
            Secure Shopping
          </p>
        </div>

      </div>

    </div>
  );
};