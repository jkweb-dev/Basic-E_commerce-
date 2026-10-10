export const Aboutus = () => {
  return (
    <div className="bg-gray-50 mt-4 flex flex-col items-center px-4 sm:px-6 md:px-8 py-8">

      {/* Content Wrapper */}
      <div className="w-full sm:w-[90%] md:w-3/4 lg:w-1/2">

        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold font-sans">
          About Us
        </h1>

        {/* Divider */}
        <div className="flex justify-center">
          <hr className="w-16 sm:w-20 md:w-24 border-t-4 border-blue-800 my-4" />
        </div>

        {/* Text */}
        <p className="text-center sm:text-left font-sans leading-relaxed text-gray-800 text-sm sm:text-base md:text-lg">
          Welcome to <b>E-Shop</b>, your one-stop online store for quality products at low prices.
          <br />
          We aim to make shopping easy, secure and enjoyable by offering a wide range of products
          delivered right to your doorstep.
        </p>

      </div>

      {/* Button */}
      <div className="mt-8">
        <button className="h-10 sm:h-12 w-40 sm:w-56 md:w-64 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 active:scale-95 transition">
          Shop Now
        </button>
      </div>

    </div>
  );
};