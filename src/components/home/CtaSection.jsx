import React from 'react';

const CtaSection = () => {
  return (
    <>
      <div id="faq" className="lg:py-30 md:py-20 py-10 c-bg">
        <div className="my-container">
          <div className="mb-10">
            <h2 className="mb-4 lg:text-5xl md:text-4xl text-3xl font-extrabold text-base-100 text-center">
              Premium Digital Tools
            </h2>
            <p className="lg:text-[16px] text-base-100 text-sm text-center max-w-full w-full lg:w-135 m-auto">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href=""
              className="inline-flex lg:text-[16px] md:text-[14px] text-[12px] font-bold bg-base-100 items-center py-2 px-4  text-[#4f39f6] rounded-full c-btn-hover duration-300"
            >
              Explore Products
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center lg:text-[16px] md:text-[14px] text-base-100 text-[12px] font-bold py-2 px-4 border border-white text-gradient-brand rounded-full c-btn-hover duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className='text-base-100 lg:text-[16px] md:text-[14px] text-[12px] text-center mt-4'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </>
  );
};

export default CtaSection;
