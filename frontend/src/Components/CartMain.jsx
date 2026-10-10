import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdCelebration } from "react-icons/md";
import { removeFromCart } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

export const MainCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const subTotal = items.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  const discount = subTotal * 0.1;
  const total = subTotal - discount;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Your cart is empty 🛒</h1>
        <p className="text-gray-500 mb-4">Add some products to continue</p>
        <button
          onClick={() => navigate("/")}
          className="bg-purple-900 text-white px-6 py-3 rounded-lg"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-6">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-[65%]">

        {/* CART ITEMS */}
        <div className="p-4 sm:p-6 lg:p-8 bg-white border-4 border-yellow-400 rounded-lg">

          <h1 className="text-xl sm:text-2xl font-bold mb-6">
            Review Your Cart Items before you Pay
          </h1>

          <div className="max-h-[400px] overflow-y-auto pr-2">

            {items.map((p) => (
              <div
                key={p.name}
                className="flex flex-col sm:flex-row justify-between gap-4 py-4 border-t"
              >

                <img
                  src={p.image}
                  alt={p.name}
                  className="h-32 w-32 sm:h-40 sm:w-40 object-cover rounded"
                />

                <div className="flex flex-col gap-2 flex-1">
                  <h1 className="font-bold text-lg sm:text-xl">{p.name}</h1>
                  <p className="text-gray-500">{p.category}</p>
                  <p className="text-green-700 font-bold">
                    In Stock · Free Delivery
                  </p>
                  <p className="font-bold">Quantity: 1</p>
                </div>

                <div className="flex flex-row sm:flex-col justify-between items-center sm:items-end">
                  <p className="text-green-900 font-bold text-lg">
                    ${p.price}
                  </p>

                  <button
                    onClick={() => dispatch(removeFromCart(p.name))}
                    className="flex items-center gap-1 text-red-500"
                  >
                    <RiDeleteBinLine size={22} />
                    Remove
                  </button>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* OFFER */}
        <div className="w-full bg-blue-100 flex justify-between items-center p-4 sm:p-6 mt-4 rounded-lg">
          <div>
            <div className="flex items-center gap-2">
              <MdCelebration size={26} />
              <h1 className="text-lg sm:text-2xl font-bold text-blue-900">
                Special Offer Applied!
              </h1>
            </div>
            <p className="font-bold text-green-900">
              Save 10% on your order
            </p>
          </div>

          <div className="bg-green-200 px-4 py-2 rounded-xl font-bold text-green-900">
            -${discount.toFixed(2)}
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full p-4 sm:p-6 bg-white rounded-xl mt-4 shadow">
          <div>
            <h1 className="font-bold text-lg">Free Shipping</h1>
            <p>$0 fees on shipping</p>
          </div>

          <div>
            <h1 className="font-bold text-lg">Free Returns</h1>
            <p>Can return anything</p>
          </div>

          <div>
            <h1 className="font-bold text-lg">Secure Payment</h1>
            <p>100% secure pay</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[35%]">

        <div className="bg-white border-4 border-purple-900 rounded-lg p-4 sm:p-6">

          <h1 className="font-bold text-xl mb-4">Order Summary</h1>

          <div className="flex justify-between mb-2">
            <span>Subtotal ({items.length})</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Discount (10%)</span>
            <span className="text-green-700">
              -${discount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3 mb-3">
            <span>Shipping</span>
            <span className="text-green-700">FREE</span>
          </div>

          <div className="flex justify-between text-xl font-bold mb-4">
            <span>Total</span>
            <span className="text-purple-900">
              ${total.toFixed(2)}
            </span>
          </div>

          <div className="bg-green-100 text-center py-2 rounded mb-3">
            You Save ${discount.toFixed(2)}!
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-purple-900 text-white w-full py-3 rounded-xl font-bold"
          >
            Proceed to Checkout
          </button>

          <p className="text-center text-gray-500 text-sm mt-2">
            100% secure checkout guarantee
          </p>

        </div>

        <div className="bg-white border-4 border-purple-900 rounded-lg p-4 sm:p-6 mt-4">

          <h1 className="font-bold text-xl mt-4">Order Summary</h1>

          <div className="flex justify-between mb-2">
            <span>Subtotal ({items.length})</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Discount (10%)</span>
            <span className="text-green-700">
              -${discount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between border-b pb-3 mb-3">
            <span>Shipping</span>
            <span className="text-green-700">FREE</span>
          </div>

          <div className="flex justify-between text-xl font-bold mb-4">
            <span>Total</span>
            <span className="text-purple-900">
              ${total.toFixed(2)}
            </span>
          </div>

          <div className="bg-green-100 text-center py-2 rounded mb-3">
            You Save ${discount.toFixed(2)}!
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-purple-900 text-white w-full py-3 rounded-xl font-bold"
          >
            Proceed to Checkout
          </button>

          <p className="text-center text-gray-500 text-sm mt-2">
            100% secure checkout guarantee
          </p>

        </div>

      </div>
    </div>
  );
};