import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RiBankCard2Fill , RiBankCard2Line } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import axios from "axios";
import { clearCart } from "../Redux/cartSlice";
import { useState } from "react";
export const Payment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const item = useSelector((state) => state.cart.shippingInfo);
  const iten = useSelector((state) => state.cart.items);

  const subTotal = iten.reduce((acc, item) => Number(acc + item.price), 0);
  const discount = Number(subTotal * 0.1);
  const Total = Number(subTotal - discount);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        iten,
        item,
        paymentMethod,
        Total,
      };

      const res = await axios.post("http://localhost:5000/orders", orderData);

      if (res.data.success) {
        dispatch(clearCart());
        navigate("/success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 md:px-10 lg:px-20 py-6">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Payment Section
      </h1>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* LEFT - Payment Methods */}
        <div className="w-full lg:w-[65%] bg-white p-4 md:p-6 lg:p-8 rounded">
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Payment Method
          </h1>

          {/* COD */}
          <label className="flex justify-between items-center bg-gray-50 p-4 mb-4 rounded cursor-pointer">
            <div className="flex gap-4 items-center">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="font-semibold text-sm md:text-base">
                Cash on Delivery
              </span>
            </div>
            <RiBankCard2Line size={26} className="text-green-800" />
          </label>

          {/* Easypaisa */}
          <label className="flex justify-between items-center bg-gray-50 p-4 mb-4 rounded cursor-pointer">
            <div className="flex gap-4 items-center">
              <input
                type="radio"
                name="payment"
                value="Easypaisa"
                checked={paymentMethod === "Easypaisa"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="font-semibold text-sm md:text-base">
                EasyPaisa
              </span>
            </div>
            <RiBankCard2Fill size={26} className="text-blue-800" />
          </label>

          {/* Card */}
          <label className="flex justify-between items-center bg-gray-50 p-4 rounded cursor-pointer">
            <div className="flex gap-4 items-center">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="font-semibold text-sm md:text-base">
                Credit Card
              </span>
            </div>
            <FaRegCreditCard size={26} className="text-purple-800" />
          </label>
        </div>

        {/* RIGHT - Order Summary */}
        <div className="w-full lg:w-[35%]">
          <div className="bg-white p-4 md:p-6 lg:p-8 rounded">
            <h1 className="font-bold mb-4 text-lg md:text-xl">
              Order Summary
            </h1>

            <div className="space-y-3 text-sm md:text-base">
              <div className="bg-gray-50 flex p-3 justify-between rounded">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>

              <div className="bg-gray-50 flex p-3 justify-between rounded">
                <span>Discount</span>
                <span>-${discount}</span>
              </div>

              <div className="bg-gray-50 flex p-3 justify-between rounded">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="bg-gray-50 flex p-3 justify-between font-bold rounded">
                <span>Total</span>
                <span>${Total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center mt-6 md:mt-8">
        <button
          onClick={handlePlaceOrder}
          className="w-full md:w-[70%] lg:w-[50%] h-12 bg-blue-800 text-white font-bold rounded active:scale-95 transition duration-150"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};