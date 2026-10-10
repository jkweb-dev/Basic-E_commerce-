import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { useParams } from "react-router-dom";
import { FAQ } from "../Components/FAQ";
import axios from "axios";
import { Choose } from "../Components/choose";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `http://localhost:5000/products?name=${name}`
        );

        // handle both array/object safely
        setItem(Array.isArray(res.data) ? res.data[0] : res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [name]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        Product not found
      </div>
    );
  }

  return (
    <>
      {/* PRODUCT SECTION */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-gray-50 mt-10 sm:mt-16 lg:mt-32 px-4 sm:px-8 lg:px-16 py-8">

        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full max-w-md sm:max-w-lg object-cover rounded"
          />
        </div>

        {/* DETAILS */}
        <div className="w-full lg:w-1/2 p-2 sm:p-4 lg:p-8">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-4">
            {item.name}
          </h1>

          <h2 className="font-bold text-sm sm:text-base text-black mb-4">
            <span className="text-gray-500">Category: </span>
            {item.category}
          </h2>

          <hr className="border-t border-gray-200 mb-6" />

          <h1 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-6">
            ${item.price}
          </h1>

          <div className="mb-4">
            <h1 className="font-bold">Quantity: 1</h1>
          </div>

          <button
            onClick={() => dispatch(addToCart(item))}
            className="w-full bg-orange-600 text-white py-3 sm:py-4 rounded text-lg sm:text-xl active:scale-95 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* EXTRA SECTIONS */}
      <FAQ />
      <Choose />
    </>
  );
};