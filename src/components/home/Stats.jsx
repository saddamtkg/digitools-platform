import React from 'react';
import CountUpModule from 'react-countup';

const CountUp = CountUpModule.default ?? CountUpModule;

const Stats = () => {
  return (
    <>
      <div id="testimonial" className="section lg:py-15 py-10 c-bg">
        <div>
          <div className="my-container">
            <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between gap-2.5 lg:w-5xl w-full m-auto">
              <div className="flex gap-2 flex-col items-center text-2xl text-base-100 font-medium">
                <CountUp
                  className="text-6xl font-bold text-base-100"
                  end={50}
                  suffix="K+"
                  duration={5}
                />
                <span className="opacity-80">Active Users</span>
              </div>
              <div className="divider md:divider-horizontal lg:divider-horizontal"></div>
              <div className="flex gap-2 flex-col items-center text-2xl text-base-100 font-medium">
                <CountUp
                  className="text-6xl font-bold text-base-100"
                  end={200}
                  suffix="K+"
                  duration={2}
                />
                <span className="opacity-80">Premium Tools</span>
              </div>
              <div className="divider md:divider-horizontal lg:divider-horizontal"></div>
              <div className="flex gap-2 flex-col items-center text-2xl text-base-100 font-medium">
                <CountUp
                  className="text-6xl font-bold text-base-100"
                  end={4.9}
                  decimals={1}
                  duration={5}
                />
                <span className="opacity-80">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
