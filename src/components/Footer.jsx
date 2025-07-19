import React from "react";

// SVG Icons for Social Media
const TwitterIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    />
  </svg>
);

const DribbbleIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61c.313.46.525.98.625 1.524-.105.01-.21.015-.315.015-2.65 0-4.855-1.155-6.225-2.955.96-.25 1.98-.39 3.03-.39 1.02 0 2.01.135 2.88.39zm-1.02 1.89c.12.51.165 1.035.165 1.575 0 1.635-.495 3.165-1.35 4.485H18.6c.315-.96.48-1.98.48-3.03 0-1.215-.225-2.385-.645-3.465l-1.335.435zm-7.65 11.235c-.99-.285-1.92-.69-2.775-1.2L6.3 16.8c.63.96 1.425 1.815 2.355 2.535.015.015.03.03.045.045zM4.93 13.515c-.045-.495-.075-.99-.075-1.515s.03-1.02.075-1.515h3.21c-.195.495-.33 1.005-.405 1.515.075.51.21 1.02.405 1.515H4.93zm7.065 7.065c-1.035 0-2.04-.15-3.015-.42l1.335-4.38c.51.195 1.035.33 1.59.39.555.06 1.11.09 1.68.09.57 0 1.125-.03 1.68-.09.555-.06 1.08-.195 1.59-.39l1.335 4.38c-.975.27-1.98.42-3.015.42zM8.23 4.98c-1.02.255-1.98.645-2.835 1.155L7.17 9.87c.96-1.14 2.22-2.04 3.69-2.625-.51-.255-1.02-.465-1.545-.63-.525-.165-1.065-.285-1.62-.345-.045 0-.09 0-.135-.045z"
      clipRule="evenodd"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4 lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight">Billable.Pro</h2>
            <p className="mt-4 text-gray-400 max-w-xs">
              The simplest way to create and manage professional invoices. Fast,
              free, and designed for modern freelancers and businesses.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-4 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                Solutions
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#invoice"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    Invoice Generator
                  </a>
                </li>
                <li>
                  <a
                    href="#tools"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    Free Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#contact"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#privacy"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-base text-gray-400 hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-base text-gray-400">
            &copy; 2025 Billable.Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <TwitterIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">GitHub</span>
              <GitHubIcon />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Dribbble</span>
              <DribbbleIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
