import React, { useState } from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import "./Navbar.css";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="my-container flex items-center justify-between h-15 py-2">
        <div className="lg:block hidden">
          <a href="">
            <img
              className="m-w-full w-45"
              src="/src/assets/digitools.png"
              alt=""
            />
          </a>
        </div>
        <div className="lg:hidden w-full flex items-center justify-between">
          <a href="">
            <img
              className="m-w-full w-38"
              src="/src/assets/digitools.png"
              alt=""
            />
          </a>
          <div className="">
            <div
              tabIndex={0}
              role="button"
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost lg:hidden"
            >
              {!isOpen ? (
                <FiMenu className="text-2xl" />
              ) : (
                <IoMdClose className="text-2xl" />
              )}
            </div>
            <div
              className={`p-4 top-0 z-50 fixed left-0 h-screen w-70 max-[400px]:w-fit bg-base-100 shadow-lg transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
              <a href="">
                <img
                  className="m-w-full w-38 mb-4"
                  src="/src/assets/digitools.png"
                  alt=""
                />
              </a>
              <ul
                tabIndex="-1"
                className="mobile-menu space-y-2 text-[16px] font-semibold"
              >
                <li>
                  <a href="#product">Products</a>
                </li>
                <li>
                  <a href="#feature">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonials</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="desktop-menu flex gap-4 px-1 text-[16px] font-semibold">
            <li>
              <a href="#product">Products</a>
            </li>
            <li>
              <a href="#feature">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonial">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="items-center gap-4 hidden lg:flex">
          <span className="relative">
            {cartCount > 0 && (
              <span className="absolute -top-4 -right-3 bg-red-500 text-white px-1 py-0.5 text-[12px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            <FiShoppingCart className="text-[20px]" />
          </span>
          <a href="" className="text-[16px] font-semibold">
            Login
          </a>
          <a
            href=""
            className="inline-flex items-center py-2 px-4 c-bg text-white rounded-full c-btn-hover duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
