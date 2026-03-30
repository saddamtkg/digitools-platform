import React from 'react';
import { IoPlayOutline } from 'react-icons/io5';

const Banner = () => {
  return (
    <>
      <div className="section lg:py-21.25 md:py-16 py-10">
        <div className="my-container flex items-center lg:flex-row flex-col lg:gap-15 gap-10">
          <div className="b-column-1">
            <div className="mb-4 flex items-center gap-1.25 bg-[#e1e7ff] w-fit rounded-full py-2 px-4">
              <span>
                <img className="w-4 h-4" src="/src/assets/group-5.png" alt="" />
              </span>
              <span className="text-gradient-brand lg:text-[16px] md:text-[14px] text-[12px] font-medium">
                New: AI-Powered Tools Available
              </span>
            </div>
            <h1 className="lg:text-7xl md:text-6xl text-4xl font-extrabold mb-4">
              Supercharge Your <br />
              <span className="text-gradient-brand">Digital Workflow</span>
            </h1>
            <p className="lg:text-[18px] md:text-[16px] text-[14px] max-w-full lg:w-140 w-full mb-4">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today. Explore
              Products
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href=""
                className="inline-flex lg:text-[16px] md:text-[14px] text-[12px] font-bold items-center py-2 px-4 c-bg text-white rounded-full c-btn-hover duration-300"
              >
                Explore Products
              </a>
              <a
                href=""
                className="inline-flex items-center lg:text-[16px] md:text-[14px] text-[12px] font-bold py-2 px-4 border border-[#4f39f6] text-gradient-brand rounded-full c-btn-hover duration-300"
              >
                <IoPlayOutline className="text-[#4f39f6] text-xl" />
                Watch Demo
              </a>
            </div>
          </div>
          <div className="b-column-2">
            <img
              className="w-full h-auto"
              src="/src/assets/banner.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
