export const Hero = () => {
  return (
    <div className="flex justify-center px-2 sm:px-4 md:px-6 lg:px-0">
      <img
        className="
          w-full sm:w-[98%] md:w-[96%] lg:w-[96%]
          h-48 sm:h-64 md:h-80 lg:h-96
          object-cover mt-3 sm:mt-4 md:mt-4 lg:mt-4
          rounded-md sm:rounded-lg
        "
        src="./images/hero.jpg"
        alt="Hero Banner"
      />
    </div>
  );
};