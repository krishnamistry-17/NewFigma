import React from "react";
import risk from "../../../assets/images/risk.png";
import whitestar from "../../../assets/images/whitestar.png";
const RiskCard = () => {
  return (
    <>
      <div className="w-full md:h-[600px] sm:h-[555px] xs:h-[700px] bg-orange-dark">
        <div className="xl:mx-[40px]">
          <div className="sm:flex hidden">
            <div className="ml-[35px]">
              <p
                className="font-bold 
              xl:text-[81px] lg:text-[61px] md:text-[55px] sm:text-[30px] xs:text-[25px]
               text-white-light sm:pt-[95px] xs:pt-[48px] xl:max-w-[509.08px]"
              >
                Try PostPilot Risk-Free
              </p>
              <p
                className="font-medium sm:block hidden
              lg:text-[20px] md:text-[18px] sm:text-[17px] xs:text-[15px] text-white-light pt-[17px]"
              >
                No contracts. No commitments. Guaranteed results.*
              </p>

              <div className="mt-[48px] sm:block hidden">
                <div className="flex">
                  <div>
                    <button
                      className="
                      md:w-[190.75px] h-[64px]
                      sm:w-[150px] xs:w-[113px]
                 bg-white-light rounded-lg text-[14px]
                  font-bold text-black-heads
                  border border-black-darkest border-r-[7px] border-b-[4px]
                  "
                    >
                      GET STARTED
                    </button>
                  </div>
                  <div>
                    <div className="flex md:ml-[40px] sm:ml-[20px] xs:ml-[15px]">
                      <img
                        src={whitestar}
                        alt="s"
                        className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px] "
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                    </div>
                    <p
                      className="font-medium md:pl-[40px] sm:pl-[20px] xs:pl-[15px]
                     md:text-[16px] sm:text-[14px] xs:text-[12px] text-white-light pt-[4px]"
                    >
                      5.0 Shopify Rating
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[19px] sm:hidden">
                <div className="">
                  <div>
                    <div className="flex md:ml-[40px] sm:ml-[20px] xs:ml-[px]">
                      <img
                        src={whitestar}
                        alt="s"
                        className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px] "
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                    </div>
                    <p
                      className="font-medium  
                     xs:text-[12px] text-white-light pt-[4px]"
                    >
                      5.0 Shopify Rating
                    </p>
                  </div>
                  <div>
                    <button
                      className="
                      md:w-[190.75px] h-[64px]
                      sm:w-[150px] xs:w-[113px]
                 bg-white-light rounded-lg text-[14px]
                  font-bold text-black-heads
                  border border-black-darkest border-r-[7px] border-b-[4px]
                  "
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-[31px]">
                <p className="text-white-light font-medium lg:text-[14px] md:text-[13px] sm:text-[12px] xs:text-[12px]">
                  * for qualified brands with over $1m annual Shopify revenue.
                </p>
              </div>
            </div>
            <div>
              <img
                src={risk}
                alt="r"
                className="xl:ml-[32px] xl:mt-[0px] lg:mt-[0px] md:mt-[0px] sm:mt-[55px] 
                md:w-[596.31px] md:h-[600px]
                sm:w-[344px] sm:h-[288px]
                "
              />
            </div>
          </div>
          <div className="sm:hidden ">
            <div>
              <img
                src={risk}
                alt="r"
                className="xl:ml-[32px] xl:mt-[0px] lg:mt-[0px] md:mt-[0px] sm:mt-[55px] 
                md:w-[596.31px] md:h-[600px]
                sm:w-[344px] sm:h-[288px]
                "
              />
            </div>
            <div className="ml-[35px]">
              <p
                className="font-bold 
              xl:text-[81px] lg:text-[61px] md:text-[55px] sm:text-[30px] xs:text-[25px]
               text-white-light sm:pt-[95px] xs:pt-[14px] xl:max-w-[509.08px]"
              >
                Try PostPilot Risk-Free
              </p>
              <p
                className="font-medium 
              lg:text-[20px] md:text-[18px] sm:text-[17px] xs:text-[17px] text-white-light pt-[17px]"
              >
                No contracts. No commitments. Guaranteed results.*
              </p>

              <div className="mt-[19px] sm:hidden">
                <div className="">
                  <div>
                    <div className="flex md:ml-[40px] sm:ml-[20px] xs:ml-[px]">
                      <img
                        src={whitestar}
                        alt="s"
                        className="md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px] "
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px] md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                      <img
                        src={whitestar}
                        alt="s"
                        className="ml-[4px]  md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] xs:w-[18px] xs:h-[18px]"
                      />
                    </div>
                    <p
                      className="font-medium  
                     xs:text-[12px] text-white-light pt-[10px]"
                    >
                      5.0 Shopify Rating
                    </p>
                  </div>
                  <div className="">
                    <button
                      className="mt-[15px]
                      md:w-[190.75px] h-[64px]
                      sm:w-[150px] xs:w-[150px]
                 bg-white-light rounded-lg text-[14px]
                  font-bold text-black-heads
                  border border-black-darkest border-r-[7px] border-b-[4px]
                  "
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-[20px]">
                <p className="text-white-light font-medium lg:text-[14px] md:text-[13px] sm:text-[13px] xs:text-[12px]">
                  * for qualified brands with over $1m annual Shopify revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskCard;
