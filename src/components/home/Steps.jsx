import React from 'react';
import { FiPackage, FiUser } from 'react-icons/fi';
import { LuRocket } from 'react-icons/lu';

const Steps = () => {
  return (
    <>
      <div id="feature" className="section lg:py-30 py-10 bg-[#f9fafc]">
        <div className="my-container">
          <div className="mb-4">
            <h2 className="mb-4 lg:text-5xl md:text-4xl text-3xl font-extrabold c-text-color text-center">
              Get Started in 3 Steps
            </h2>
            <p className="lg:text-[16px] text-sm text-center max-w-full w-full lg:w-135 m-auto">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center lg:gap-7.5 gap-5">
            <div className="bg-base-100 md:w-95 w-full lg:h-95 h-full rounded-2xl border p-5 border-[#f1f1f1]">
              <span className="ml-auto w-10 h-10 text-[14px] font-bold text-center flex justify-center items-center rounded-full c-bg text-base-100">
                01
              </span>
              <div className="mt-7.5">
                <FiUser className="text-[#6007ec] text-[84px] p-4 m-auto bg-[#F3E8FE] rounded-full mb-4" />
                <h3 className="text-2xl font-bold c-text-color text-center mb-4">
                  Create Account
                </h3>
                <p className="text-[16px] text-[#627382] text-center">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
            <div className="bg-base-100 md:w-95 w-full lg:h-95 h-full rounded-2xl border p-5 border-[#f1f1f1]">
              <span className="ml-auto w-10 h-10 text-[14px] font-bold text-center flex justify-center items-center rounded-full c-bg text-base-100">
                02
              </span>
              <div className="mt-7.5">
                <FiPackage className="text-[#6007ec] text-[84px] p-4 m-auto bg-[#F3E8FE] rounded-full mb-4" />
                <h3 className="text-2xl font-bold c-text-color text-center mb-4">
                  Choose Products
                </h3>
                <p className="text-[16px] text-[#627382] text-center">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>
            </div>
            <div className="bg-base-100 md:w-95 w-full md:h-95 h-full rounded-2xl border p-5 border-[#f1f1f1]">
              <span className="ml-auto w-10 h-10 text-[14px] font-bold text-center flex justify-center items-center rounded-full c-bg text-base-100">
                03
              </span>
              <div className="mt-7.5">
                <LuRocket className="text-[#6007ec] text-[80px] p-4 m-auto bg-[#F3E8FE] rounded-full mb-4" />
                <h3 className="text-2xl font-bold c-text-color text-center mb-4">
                  Start Creating
                </h3>
                <p className="text-[16px] text-[#627382] text-center">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
