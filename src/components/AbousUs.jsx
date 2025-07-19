import React from "react";

// --- SVG Icons for the "Our Values" Section ---

const SimplicityIcon = () => (
  <svg
    className="h-12 w-12 text-indigo-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AccessibilityIcon = () => (
  <svg
    className="h-12 w-12 text-indigo-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm6 10H6v-1c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v1z"
    />
  </svg>
);

const SecurityIcon = () => (
  <svg
    className="h-12 w-12 text-indigo-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 11.955 11.955 0 018.618 3.04 12.02 12.02 0 00-3-8.984z"
    />
  </svg>
);

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* --- Page Header --- */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-indigo-400">Billable.Pro</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
            We're on a mission to make invoicing effortless, professional, and
            accessible for everyone.
          </p>
        </div>

        {/* --- Our Story Section --- */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Our Story
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Billable.Pro was born from a simple frustration: creating a clean,
            professional invoice shouldn't be a complicated or expensive task.
            As freelancers and small business owners ourselves, we were tired of
            clunky software and subscription fees just to send a bill. We
            believed there had to be a better way. So, we built it—a fast,
            intuitive, and completely free invoice generator designed for the
            modern professional.
          </p>
        </div>

        {/* --- Our Values Section --- */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            {/* Value 1: Simplicity */}
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-800">
                <SimplicityIcon />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                Radical Simplicity
              </h3>
              <p className="mt-2 text-base text-gray-400">
                No clutter, no confusing menus. Just a straightforward path from
                input to a beautiful, downloadable PDF.
              </p>
            </div>

            {/* Value 2: Accessibility */}
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-800">
                <AccessibilityIcon />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                Free for Everyone
              </h3>
              <p className="mt-2 text-base text-gray-400">
                Powerful tools shouldn't be locked behind a paywall. Our core
                invoice generator is, and always will be, free. No sign-up
                required.
              </p>
            </div>

            {/* Value 3: Security & Privacy */}
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gray-800">
                <SecurityIcon />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                Your Data is Yours
              </h3>
              <p className="mt-2 text-base text-gray-400">
                We believe in privacy. Your invoice data is processed in your
                browser and we don't store or share your financial information.
              </p>
            </div>
          </div>
        </div>

        {/* --- Call to Action Section --- */}
        <div className="mt-28 text-center bg-gray-800 p-8 sm:p-12 rounded-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Create Your First Invoice?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Join thousands of professionals who have streamlined their billing.
            It only takes a minute.
          </p>
          <div className="mt-8">
            <a
              href="#invoice-builder" // Link this to your invoice builder section/page
              className="inline-block px-10 py-4 text-lg font-bold text-white bg-indigo-600 border border-transparent rounded-md shadow-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              Create a Free Invoice
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
