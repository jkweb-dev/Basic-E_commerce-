import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

export const CheckoutForm = () => {
  const shippingInfo0 = useSelector((state) => state.cart.shippingInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formd, setFormd] = useState({
    name: shippingInfo0?.name || "",
    phonenumber: shippingInfo0?.phonenumber || "",
    address: shippingInfo0?.address || "",
    postal: shippingInfo0?.postal || "",
    city: shippingInfo0?.city || "",
  });

  const handleChange = (e) => {
    setFormd({ ...formd, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formd.name ||
      !formd.phonenumber ||
      !formd.address ||
      !formd.postal ||
      !formd.city
    ) {
      alert("All Fields Are Required");
      return;
    }

    dispatch(saveShippingInfo(formd));
    navigate("/review");
  };

  return (
    <div className="w-full bg-gray-100 flex justify-center items-center py-10 px-4">

      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-6 sm:p-8 rounded-lg shadow">

        {/* TITLE */}
        <h1 className="font-bold text-blue-900 text-2xl sm:text-3xl mb-6 text-center">
          Shipping Information
        </h1>

        {/* NAME */}
        <div className="mb-4">
          <label htmlFor="name" className="font-bold">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formd.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* PHONE */}
        <div className="mb-4">
          <label htmlFor="phone-number" className="font-bold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone-number"
            name="phonenumber"
            value={formd.phonenumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* ADDRESS */}
        <div className="mb-4">
          <label htmlFor="address" className="font-bold">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formd.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* POSTAL */}
        <div className="mb-4">
          <label htmlFor="postal" className="font-bold">
            Postal Code
          </label>
          <input
            type="number"
            id="postal"
            name="postal"
            value={formd.postal}
            onChange={handleChange}
            placeholder="Enter your postal code"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* CITY */}
        <div className="mb-6">
          <label htmlFor="city" className="font-bold">
            City
          </label>
          <select
            id="city"
            name="city"
            value={formd.city}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select Your City</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Peshawar">Peshawar</option>
            <option value="Lahore">Lahore</option>
            <option value="Quetta">Quetta</option>
            <option value="Haripur">Haripur</option>
            <option value="Abbottabad">Abbottabad</option>
            <option value="Mardan">Mardan</option>
            <option value="Mansehra">Mansehra</option>
            <option value="Sialkot">Sialkot</option>
          </select>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">

          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="w-full sm:w-auto bg-red-500 text-white py-3 px-6 rounded font-bold"
          >
            Back to Cart
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-700 text-white py-3 px-6 rounded font-bold"
          >
            Continue
          </button>

        </div>

      </form>
    </div>
  );
};