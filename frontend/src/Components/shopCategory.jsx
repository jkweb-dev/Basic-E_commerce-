import { useNavigate } from "react-router-dom";

export const ShopCategory = ({ data }) => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex justify-center mt-4 px-2 sm:px-4 md:px-6">
      
      <div className="w-full sm:w-[98%] bg-white p-3 sm:p-4 md:p-6 rounded-lg">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
          Shop By Category
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4 gap-4 sm:gap-5 md:gap-6 border-t-2 border-gray-200">

          {data.map((pro) => (
            <div
              key={pro._id || pro.name}
              onClick={() => navigate(`/category/${pro.category}`)}
              className="
                border border-gray-300 rounded-lg
                cursor-pointer overflow-hidden
                hover:shadow-md transition
              "
            >

              <img
                src={pro.image}
                alt={pro.category}
                className="
                  h-44 sm:h-52 md:h-60 lg:h-64
                  w-full object-cover
                "
              />

              <h1 className="
                text-lg sm:text-xl md:text-2xl
                text-center font-bold
                mt-2 mb-3 text-blue-900
              ">
                {pro.category}
              </h1>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};