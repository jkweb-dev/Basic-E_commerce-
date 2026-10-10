import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FcBusinessContact } from "react-icons/fc";

export const Footer = () => {
  return (
    <footer className="w-full bg-blue-800 text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-8">

        {/* About Us */}
        <div>
          <h1 className="text-lg sm:text-xl font-bold">About Us</h1>
          <hr className="my-3 border-gray-300" />
          <p className="font-semibold hover:underline cursor-pointer">About</p>
          <p className="font-semibold hover:underline cursor-pointer">FAQs</p>
        </div>

        {/* Customer Service */}
        <div>
          <h1 className="text-lg sm:text-xl font-bold">Customer Service</h1>
          <hr className="my-3 border-gray-300" />
          <p className="font-semibold hover:underline cursor-pointer">Shipping</p>
          <p className="font-semibold hover:underline cursor-pointer">Returns</p>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-lg sm:text-xl font-bold">Quick Links</h1>
          <hr className="my-3 border-gray-300" />
          <p className="font-semibold hover:underline cursor-pointer">Home</p>
          <p className="font-semibold hover:underline cursor-pointer">Shop</p>
        </div>

        {/* Contact */}
        <div>
          <h1 className="text-lg sm:text-xl font-bold">Connect With Us</h1>
          <hr className="my-3 border-gray-300" />

          <div className="flex items-center gap-3 mb-2 cursor-pointer hover:opacity-80">
            <FaFacebook className="h-5 w-5" />
            <p className="font-semibold">Facebook</p>
          </div>

          <div className="flex items-center gap-3 mb-2 cursor-pointer hover:opacity-80">
            <FaSquareInstagram className="h-5 w-5" />
            <p className="font-semibold">Instagram</p>
          </div>

          <div className="flex items-center gap-3 mb-2 cursor-pointer hover:opacity-80">
            <FcBusinessContact className="h-5 w-5" />
            <p className="font-semibold">Contact Us</p>
          </div>

        </div>

      </div>
    </footer>
  );
};