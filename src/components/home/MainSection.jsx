import React, { useState } from "react";
import CartSection from "./CartSection";
import "./Home.css";
import ProductGrid from "./ProductGrid";

const MainSection = ({
  products,
  addToCart,
  removeFromCart,
  totalPrice,
  cartCount,
  proceedToCheckout,
  cartItems,
}) => {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <>
      <div id="product" className="section bg-base-100 lg:py-30 md:py-20 py-10">
        <div className="my-container">
          <div className="mb-4">
            <h2 className="mb-4 lg:text-5xl md:text-4xl text-3xl font-extrabold c-text-color text-center">
              Premium Digital Tools
            </h2>
            <p className="lg:text-[16px] text-sm text-center max-w-full w-full lg:w-135 m-auto">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
          </div>
          <div className="mb-10 relative bg-base-100 border border-[#f6f6f6] p-1 rounded-full w-fit flex justify-center items-center m-auto">
            <span
              className={`absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full c-bg shadow-[0_3px_8px_rgba(96,7,236,0.3)] transition-transform duration-300 ease-out ${
                activeTab ? "translate-x-0" : "translate-x-full"
              }`}
            ></span>
            <div className="relative z-10 flex items-center">
              <button
                onClick={() => setActiveTab(true)}
                className={`px-6 py-3 text-[16px] font-bold rounded-full transition-colors duration-300 ${
                  activeTab ? "text-white" : "text-slate-700"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab(false)}
                className={`px-6 py-3 text-[16px] font-bold rounded-full transition-colors duration-300 ${
                  !activeTab ? "text-white" : "text-slate-700"
                }`}
              >
                Cart ({cartCount})
              </button>
            </div>
          </div>

          <div
            key={activeTab ? "products" : "cart"}
            className="tab-switch-anim"
          >
            {activeTab ? (
              <ProductGrid products={products} addToCart={addToCart} />
            ) : (
              <CartSection cartItems={cartItems} removeFromCart={removeFromCart} totalPrice={totalPrice} proceedToCheckout={proceedToCheckout}/>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
