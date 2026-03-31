import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[#101727] lg:pt-30 md:pt-20 pt-10 lg:pb-5 md:pb-5 pb-10 text-base-100">
        <div className="my-container">
          <div className="flex lg:flex-row md:flex-row  md:flex-wrap flex-col gap-10 justify-between">
            <div>
              <img
                className="w-45 h-10 max-[400px]:m-auto"
                src="/src/assets/digitools (1).png"
                alt=""
              />
              <p className="lg:w-87.5 max-w-full mt-4 max-[400px]:text-center w-full text-base-100 text-[16px]">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>
            <div className="flex lg:flex-row md:flex-row max-[400px]:flex-col max-[400px]:justify-center gap-2">
              <div className="lg:w-40 md:w-full w-full">
                <h3 className="text-xl max-[400px]:text-center font-semibold mb-4.5">
                  Product
                </h3>
                <ul className="text-[16px] space-y-4 max-[400px]:text-center">
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Templates</a>
                  </li>
                  <li>
                    <a href="">Integrations</a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-40 md:w-full w-full">
                <h3 className="text-xl max-[400px]:text-center font-semibold mb-4.5">
                  Company
                </h3>
                <ul className="text-[16px] space-y-4 max-[400px]:text-center">
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">press</a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-40 md:w-full w-full">
                <h3 className="text-xl max-[400px]:text-center font-semibold mb-4.5">
                  Resources
                </h3>
                <ul className="text-[16px] space-y-4 max-[400px]:text-center">
                  <li>
                    <a href="">Documentation</a>
                  </li>
                  <li>
                    <a href="">Help Center</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl max-[400px]:text-center font-semibold mb-4.5">
                Social Links
              </h3>
              <div>
                <ul className="flex max-[400px]:justify-center gap-3">
                  <li>
                    <a
                      className="hover:bg-[#4f39f6] hover:scale-120 hover:text-white text-black duration-300 flex items-center justify-center rounded-full bg-base-100 w-10 h-10"
                      href=""
                    >
                      <FaInstagram className="" size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-[#4f39f6] hover:scale-120 hover:text-white text-black duration-300 flex items-center justify-center rounded-full bg-base-100 w-10 h-10"
                      href=""
                    >
                      <FaFacebookSquare className="" size={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-[#4f39f6] hover:scale-120 hover:text-white text-black duration-300 flex items-center justify-center rounded-full bg-base-100 w-10 h-10"
                      href=""
                    >
                      <FaXTwitter className="" size={20} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:mt-20 md:mt-10 mt-7.5 pt-7.5 max-[670px]:flex-col  text-[#fafafa8c] border-t border-[#e5e7eb52] max-w-full flex justify-between gap-4">
            <p className="max-[670px]:text-center">
              © 2026 Digitools. All rights reserved.
            </p>
            <ul className="flex max-[670px]:justify-center gap-4 items-center">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
