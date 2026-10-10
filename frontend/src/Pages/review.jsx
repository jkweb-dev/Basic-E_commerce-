import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Review = () => {
  const navigate = useNavigate();

  const shipping = useSelector((state) => state.cart.shippingInfo);
  const items = useSelector((state) => state.cart.items);

  const subTotal = items.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  const discount = subTotal * 0.1;
  const total = subTotal - discount;

  return (
    <>
      {/* HEADER */}
      <h1 className="w-full text-center bg-gray-200 text-2xl sm:text-3xl md:text-4xl font-bold py-8 sm:py-12">
        Review Your Order
      </h1>

      <div className="bg-gray-200 flex justify-center px-4 py-6">

        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-[70%]">

            {/* SHIPPING */}
            <div className="bg-white p-4 sm:p-6 rounded">
              <h1 className="font-bold mb-4 text-blue-600">
                Shipping Information
              </h1>

              <p className="mb-2">
                Name: <b>{shipping.name}</b>
              </p>

              <p className="mb-2">
                Phone: <b>{shipping.phonenumber}</b>
              </p>

              <p className="mb-4">
                Address:{" "}
                <b>
                  {shipping.address}, {shipping.city}
                </b>
              </p>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-gray-100 py-2 font-bold text-blue-900 rounded"
              >
                Edit Address
              </button>
            </div>

            {/* CART ITEMS */}
            <div className="bg-white mt-4 rounded">
              <h1 className="px-4 sm:px-6 text-lg sm:text-2xl bg-gray-300 py-2">
                Your Cart Items
              </h1>

              <div className="max-h-64 overflow-y-auto p-4 space-y-4">

                {items.map((p) => (
                  <div
                    key={p._id || p.name}
                    className="flex flex-col sm:flex-row gap-4 border-b pb-4"
                  >
                    {/* IMAGE */}
                    <img
                      className="h-20 w-20 object-cover"
                      src={p.image}
                      alt={p.name}
                    />

                    {/* INFO */}
                    <div className="flex-1">
                      <h1 className="font-bold text-base sm:text-lg">
                        {p.name}
                      </h1>
                      <p className="text-gray-500">{p.category}</p>
                    </div>

                    {/* PRICE */}
                    <div className="sm:text-right">
                      <h1 className="font-bold text-blue-900">
                        ${p.price}
                      </h1>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* BACK BUTTON */}
            <button
              onClick={() => navigate("/checkout")}
              className="w-full sm:w-auto bg-red-400 text-white font-bold mt-6 px-6 py-3 rounded"
            >
              Back to Checkout
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-[30%]">

            <div className="bg-white p-4 sm:p-6 rounded shadow">

              <h1 className="font-bold mb-4">Order Summary</h1>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Discount</span>
                <span className="text-green-700">
                  -${discount.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between font-bold border-t pt-2 mt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

            </div>

            {/* PAYMENT BUTTON */}
            <button
              onClick={() => navigate("/payment")}
              className="w-full bg-blue-900 text-white font-bold mt-6 py-3 rounded"
            >
              Proceed to Payment
            </button>

          </div>

        </div>
      </div>
    </>
  );
};