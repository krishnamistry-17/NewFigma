import React from "react";
import obvi from "../../../assets/images/obvicard.png";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import logo4 from "../../../assets/images/logo4.png";

const ObviCard = () => {
  return (
    <>
      <div className="w-full md:h-[905.98px] sm:h-[626.98px] xs:h-[750.98px] bg-purple-bglight">
        <div className="xl:mx-[75px] ">
          <div className="md:flex ">
            <div>
              <img
                src={obvi}
                alt="ov"
                className="xl:mt-[101.25px] lg:mt-[80px] md:mt-[70px] sm:mt-[60px] xs:mt-[50px]
              xl:w-[613px] xl:h-[601.05px]
              lg:w-[500px] lg:h-[400px]
              md:w-[781px] md:h-[350px]
              sm:w-[400px] sm:h-[314px]
              xs:w-[295px] xs:h-[287px] md:block hidden
              "
              />
            </div>

            <div className="xl:ml-[64px] lg:ml-[20px] md:ml-[0px]">
              <p
                className="font-bold 
              xl:text-[63px] lg:text-[50px] md:text-[41px] sm:text-[35px] md:pl-[0px] pl-[20px]
               xs:text-[32px] text-black-heads mt-[89px] xl:max-w-[565.26px] sm:pt-[0px] xs:pt-[30px]"
              >
                How Obvi Drives Profits with Hands-Off Postcard Campaigns
              </p>
              <p
                className="mt-[36px] font-medium md:pl-[0px] pl-[20px]
              lg:text-[20px] md:text-[18px] sm:text-[17px]
               text-gray-sub xl:max-w-[555.81px]"
              >
                The 🚀 supplements brand wanted to offset high ad costs and
                reach dormant customers. They scored 1000%+ ROIs.
              </p>
              <div className="sm:flex sm:mt-[48px] xs:mt-[21px] md:ml-[0px] ml-[20px]">
                <div className="xl:w-[172.33px] h-[55px]">
                  <p className="font-bold sm:text-[34px] xs:text-[18px] text-black-heads">
                    1468%
                  </p>
                  <p className="font-medium text-[14px] pl-[5px] text-gray-sub pt-[2px]">
                    ROI
                  </p>
                </div>
                <div className="xl:w-[172.33px] h-[55px] sm:ml-[48px] sm:mt-[0px] xs:mt-[8px]">
                  <p className="font-bold  sm:text-[35px] xs:text-[18px] text-black-heads">
                    8.59%
                  </p>
                  <p className="font-medium text-[14px] text-gray-sub pt-[2px]">
                    Conversion Rate
                  </p>
                </div>
                <div className="xl:w-[172.33px] h-[55px] sm:ml-[48px] sm:mt-[0px] xs:mt-[8px]">
                  <p className="font-bold  sm:text-[34px] xs:text-[18px] text-black-heads">
                    $73,457
                  </p>
                  <p className="font-medium text-[14px] text-gray-sub pt-[2px]">
                    Sales Generated
                  </p>
                </div>
              </div>
              <div className="sm:mt-[48px] xs:mt-[20px]  md:ml-[0px] ml-[20px]">
                <button
                  className="sm:w-[232.56px] xs:w-[200px] h-[64px]
                 bg-white-light rounded-lg text-[14px]
                  font-bold text-black-heads
                  border border-black-darkest border-r-[7px] border-b-[4px]
                  "
                >
                  READ CASE STUDY
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-[1290px] h-[53.98px] mt-[48px]">
            <div className="flex">
              <div className="xl:ml-[684.72px] lg:ml-[263px] md:ml-[288px]">
                <img src={logo1} alt="l1" />
              </div>
              <div>
                <img src={logo2} alt="l2" />
              </div>
              <div>
                <img src={logo3} alt="l3" />
              </div>
              <div>
                <img src={logo4} alt="l4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ObviCard;
