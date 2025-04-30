import React from "react";
import risk from "../../../assets/images/risk.png";
import whitestar from "../../../assets/images/whitestar.png";
const RiskCard = () => {
  return (
    <>
      <div className="w-full h-[600px] bg-orange-dark">
        <div className="xl:mx-[40px]">
          <div className="flex">
            <div className="ml-[35px]">
              <p
                className="font-bold 
              xl:text-[81px] lg:text-[71px] md:text-[61px] sm:text-[51px] text-white-light pt-[95px] xl:max-w-[509.08px]"
              >
                Try PostPilot Risk-Free
              </p>
              <p className="font-medium text-[20px] text-white-light pt-[17px]">
                No contracts. No commitments. Guaranteed results.*
              </p>
              <div className="mt-[48px]">
                <div className="flex">
                  <div>
                    <button
                      className="w-[190.75px] h-[64px]
                 bg-white-light rounded-lg text-[14px]
                  font-bold text-black-heads
                  border border-black-darkest border-r-[7px] border-b-[4px]
                  "
                    >
                      GET STARTED
                    </button>
                  </div>
                  <div>
                    <div className="flex ml-[40px]">
                      <img
                        src={whitestar}
                        alt="s"
                        className=" w-[24px] h-[24px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px] w-[24px] h-[24px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  w-[24px] h-[24px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  w-[24px] h-[24px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  w-[24px] h-[24px]"
                      />
                    </div>
                    <p className="font-medium  pl-[40px] text-[16px] text-white-light pt-[4px]">
                      5.0 Shopify Rating
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[31px]">
                <p className="text-white-light font-medium text-[14px]">
                  * for qualified brands with over $1m annual Shopify revenue.
                </p>
              </div>
            </div>
            <div>
              <img src={risk} alt="r" className="xl:ml-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskCard;
