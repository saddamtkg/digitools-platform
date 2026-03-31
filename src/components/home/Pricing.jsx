import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const Pricing = () => {
  return (
    <>
      <div className="section lg:py-30 md:py-20 py-10 bg-[#f9fafc]">
        <div className="my-container">
          <div className="mb-10">
            <h2 className="mb-4 lg:text-5xl md:text-4xl text-3xl font-extrabold c-text-color text-center">
              Simple, Transparent Pricing
            </h2>
            <p className="lg:text-[16px] text-sm text-center max-w-full w-full lg:w-135 m-auto">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-7.5">
            <div className="md:w-95 w-full h-112 border-2 border-[#f2f2f2] p-6 rounded-2xl flex flex-col">
              <div>
                <h3 className="text-2xl font-bold c-text-color mb-2">
                  Starter
                </h3>
                <p className="text-[16px] text-[#627382]">
                  Perfect for getting started
                </p>
              </div>
              <div className="mt-6 mb-6">
                <span className="lg:text-4xl text-xl font-bold c-text-color">
                  $0
                </span>
                <span className="lg:text-xl text-sm text-[#627382]">
                  /Month
                </span>
              </div>
              <div className="flex-1">
                <ul className="lg:text-[16px] text-sm space-y-2 font-medium text-[#627382]">
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>Access to 10 free tools</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>Basic templates</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>Community support</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>1 project per month</span>
                  </li>
                </ul>
              </div>
              <div>
                <button className="w-full lg:text-[16px] text-sm font-bold items-center py-2 px-4 c-bg text-white rounded-full c-btn-hover duration-300">
                  Get Started Free
                </button>
              </div>
            </div>
            <div className="relative shadow-2xl md:w-95 w-full h-112 c-bg  p-6 rounded-2xl flex flex-col">
              <span className="bg-[#fef3c6] py-1.5 px-3 text-[#bb4d00] text-[14px] w-fit rounded-full font-medium absolute -top-4 left-1/2 -translate-x-1/2">
                Most Popular
              </span>
              <div>
                <h3 className="text-2xl font-bold text-base-100 mb-2">Pro</h3>
                <p className="text-[16px] text-base-100">
                  Best for professionals
                </p>
              </div>
              <div className="mt-6 mb-6">
                <span className="lg:text-4xl text-xl font-bold text-base-100">
                  $29
                </span>
                <span className="lg:text-xl text-sm text-base-100">/Month</span>
              </div>
              <div className="flex-1">
                <ul className="lg:text-[16px] text-sm space-y-2 font-medium text-base-100">
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-base-100" />
                    <span>Access to all premium tools</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-base-100" />
                    <span>Unlimited templates</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-base-100" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-base-100" />
                    <span>Unlimited projects</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-base-100" />
                    <span>Cloud sync</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-base-100" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </div>
              <div>
                <button className="w-full lg:text-[16px] text-sm font-bold items-center py-2 px-4 bg-base-100 text-[#4f39f6] rounded-full c-btn-hover duration-300">
                  Start Pro Trial
                </button>
              </div>
            </div>
            <div className="md:w-95 w-full h-112 border-2 border-[#f2f2f2] p-6 rounded-2xl flex flex-col">
              <div>
                <h3 className="text-2xl font-bold c-text-color mb-2">
                  Enterprise
                </h3>
                <p className="text-[16px] text-[#627382]">
                  For teams and businesses
                </p>
              </div>
              <div className="mt-6 mb-6">
                <span className="lg:text-4xl text-xl font-bold c-text-color">
                  $99
                </span>
                <span className="lg:text-xl text-sm text-[#627382]">
                  /Month
                </span>
              </div>
              <div className="flex-1">
                <ul className="lg:text-[16px] text-sm space-y-2 font-medium text-[#627382]">
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>SLA guarantee</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <IoCheckmarkSharp className="text-[#30b868]" />
                    <span>Custom branding</span>
                  </li>
                </ul>
              </div>
              <div>
                <button className="w-full lg:text-[16px] text-sm font-bold items-center py-2 px-4 c-bg text-white rounded-full c-btn-hover duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
