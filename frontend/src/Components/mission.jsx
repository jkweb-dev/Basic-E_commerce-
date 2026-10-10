export const HeroSection = () => {
  return (
    <div className="w-full bg-white mt-4 px-4 sm:px-6 md:px-10 lg:px-32 py-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16">

        {/* Mission */}
        <div className="flex flex-col md:border-r-2 md:border-gray-200 pr-4">
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
            Our Mission
          </h1>
          <p className="text-sm sm:text-base text-black leading-relaxed">
            To provide premium products with excellent service and fast delivery.
            Our mission is to provide high quality services.
          </p>
        </div>

        {/* Promise */}
        <div className="flex flex-col md:border-r-2 md:border-gray-200 pr-4">
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
            Our Promise
          </h1>
          <p className="text-sm sm:text-base text-black leading-relaxed">
            100% Quality, Secure Payments, and Customer Satisfaction.
            You will be happy when checkout — that's our promise.
          </p>
        </div>

        {/* Support */}
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
            24/7 Support
          </h1>
          <p className="text-sm sm:text-base text-black leading-relaxed">
            We are here to help anytime you need us. We are available 24/7,
            whenever you contact us, we will be here.
          </p>
        </div>

      </div>

    </div>
  );
};