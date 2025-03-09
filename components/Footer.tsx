import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#11141a] border-t border-gray-800 py-12">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img className="h-16" src="/TitanLogoo.PNG" alt="" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Find us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://whop.com/titansalgo-pro/"
                    className="hover:underline"
                    target="blank"
                  >
                    Whop
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/6WrP7CXnHd"
                    className="hover:underline"
                    target="blank"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://assets.whop.com/uploads/2025-01-03/user_7943309_9f8281d6-4984-4863-b816-63ec20165adc.pdf" target="blank" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://assets.whop.com/uploads/2025-01-03/user_7943309_36d2cdde-a34f-4985-8a61-50b5f60d6488.pdf" target="blank" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
