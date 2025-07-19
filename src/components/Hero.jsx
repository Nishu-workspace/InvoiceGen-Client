import React from "react";

const Hero = () => {
  return (
    // Main container with a dark background and significant vertical padding
    <div className="bg-gray-900 text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Make Your Billing{" "}
            <span className="text-indigo-400">Less Boring</span>
            <br />
            With Our Free Invoice Generator
          </h1>

          {/* Subheading/Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Simplify your billing process with our easy-to-use invoice
            generator. Create professional invoices in seconds, completely free,
            and <strong className="text-white">no signup required</strong>. Be
            among the first to experience a faster, smarter way to manage your
            billing! 🌟
          </p>

          {/* Call-to-Action Buttons Container */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA Button */}
            <button className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-indigo-600 border border-transparent rounded-md shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
              Create Invoice
              <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                FREE
              </span>
            </button>

            {/* Secondary Info Badge */}
            <div className="mt-2 sm:mt-0 px-5 py-2 text-sm font-medium text-gray-400 bg-gray-800 border border-gray-700 rounded-full">
              No Sign-Up Required
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
