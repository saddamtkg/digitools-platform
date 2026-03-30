import React from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';

const ProductCard = () => {
  return (
    <>
      <div className="relative w-95 p-6 border-2 border-[#f2f2f2] rounded-2xl space-y-4">
        <span className="absolute top-2.5 right-6 py-1.5 px-3 text-[14px] text-[#bb4d00]  font-medium bg-[#fef3c6] rounded-full">
          Best Seller
        </span>
        <div className="p-3.5 w-15.5 h-15.5 border border-[#f2f2f2] rounded-full">
          <img
            className="w-8 h-8"
            src="/src/assets/products/writing_2327400 1.png"
            alt=""
          />
        </div>
        <h2 className="text-2xl font-bold c-text-color">AI Writing Pro</h2>
        <p className="text-[16px] text-[#627382]">
          Generate high-quality content, blogs, and marketing copy in seconds
          with advanced AI.
        </p>
        <div>
          <span className="text-2xl font-bold c-text-color">$29</span>
          <span className="text-[16px] text-[#627382]">/MO</span>
        </div>
        <div>
          <ul className="text-[16px] space-y-2 text-[#627382]">
            <li className="flex gap-2 items-center">
              <IoCheckmarkSharp />
              <span>Unlimited AI generations</span>
            </li>
            <li className="flex gap-2 items-center">
              <IoCheckmarkSharp />
              <span>50+ writing templates</span>
            </li>
            <li className="flex gap-2 items-center">
              <IoCheckmarkSharp />
              <span>Grammar checker</span>
            </li>
          </ul>
        </div>
        <div>
          <button className="w-full items-center py-2 px-4 c-bg text-white rounded-full c-btn-hover duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
