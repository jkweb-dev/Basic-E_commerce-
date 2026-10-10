import { MdEmail } from "react-icons/md";
import {  FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

export const MainContact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const Response = await axios.post(
        "http://localhost:5000/messages",
        form
      );
      alert(Response.data);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to Send Message");
    }
  };

  return (
    <div className="bg-gray-200 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-48 py-6 sm:py-10">

      {/* Container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

        {/* FORM SECTION */}
        <div className="p-6 sm:p-8 bg-white w-full lg:w-1/2 rounded shadow">

          <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-3">

            <div>
              <label className="font-bold text-sm sm:text-base">Full Name</label>
              <input
                className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="font-bold text-sm sm:text-base">Email Address</label>
              <input
                className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="font-bold text-sm sm:text-base">Phone Number</label>
              <input
                className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                type="number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="font-bold text-sm sm:text-base">Subject</label>
              <input
                className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="font-bold text-sm sm:text-base">Message</label>
              <textarea
                className="w-full h-28 sm:h-32 border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-800 py-3 sm:py-4 font-semibold rounded"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* INFO SECTION */}
        <div className="p-6 sm:p-8 bg-white w-full lg:w-1/2 shadow rounded">

          <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
            Get in Touch
          </h1>

          <div className="space-y-5">

            <div className="flex items-center gap-3">
              <MdEmail size={24} />
              <p className="text-sm sm:text-base">e-shop@yourstore.com</p>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail size={24} className="text-green-700" />
              <p className="text-sm sm:text-base">+92 123 456 7890</p>
            </div>

            <div className="flex items-center gap-3">
              <FaLocationDot size={24} className="text-red-700" />
              <p className="text-sm sm:text-base">Haripur, Pakistan</p>
            </div>

            <div className="flex items-center gap-3">
              <IoTimeOutline size={24} />
              <p className="text-sm sm:text-base">Mon-Sat: 9am-8pm</p>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook size={24} />
              <p className="text-sm sm:text-base">Facebook</p>
            </div>

            <div className="flex items-center gap-3">
              <AiFillTikTok size={24} />
              <p className="text-sm sm:text-base">TikTok</p>
            </div>

            <div className="flex items-center gap-3">
              <FaSquareInstagram size={24} />
              <p className="text-sm sm:text-base">Instagram</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};