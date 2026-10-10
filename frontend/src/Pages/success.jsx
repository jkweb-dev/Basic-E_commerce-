import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {/* Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 text-center max-w-md w-full">

        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl animate-bounce" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Order Placed Successfully!
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-500">
          🎉 Thank you for your purchase. Your order has been received and is being processed.
        </p>

        {/* Order info box (fake professional touch) */}
        <div className="mt-6 bg-gray-50 border rounded-lg p-4 text-sm text-gray-600">
          <p>📦 Your order is confirmed</p>
          <p>🚚 You will receive delivery updates soon</p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

