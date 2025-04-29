import React from "react";
import obvi from "../../../assets/images/obvicard.png";
import logo1 from "../../../assets/images/logo1.png";
import logo2 from "../../../assets/images/logo2.png";
import logo3 from "../../../assets/images/logo3.png";
import logo4 from "../../../assets/images/logo4.png";
const ObviCard = () => {
  return (
    <>
      <div className="w-full h-[905.98px] bg-purple-bglight">
        <div className="mx-[75px] ">
          <div className="flex ">
            <div>
              <img src={obvi} alt="ov" className="mt-[101.25px]" />
            </div>
            <div className="ml-[64px]">
              <p className="font-bold text-[63px] text-black-heads mt-[89px] max-w-[565.26px]">
                How Obvi Drives Profits with Hands-Off Postcard Campaigns
              </p>
              <p className="mt-[36px] font-medium text-[20px] text-gray-sub max-w-[555.81px]">
                The 🚀 supplements brand wanted to offset high ad costs and
                reach dormant customers. They scored 1000%+ ROIs.
              </p>
              <div className="flex mt-[48px]">
                <div className="w-[172.33px] h-[55px]">
                  <p className="font-bold text-[34px] text-black-heads">
                    1468%
                  </p>
                  <p className="font-medium text-[14px] pl-[5px] text-gray-sub pt-[2px]">
                    ROI
                  </p>
                </div>
                <div className="w-[172.33px] h-[55px] ml-[48px]">
                  <p className="font-bold  text-[35px] text-black-heads">
                    8.59%
                  </p>
                  <p className="font-medium text-[14px] text-gray-sub pt-[2px]">
                    Conversion Rate
                  </p>
                </div>
                <div className="w-[172.33px] h-[55px] ml-[48px]">
                  <p className="font-bold  text-[34px] text-black-heads">
                    $73,457
                  </p>
                  <p className="font-medium text-[14px] text-gray-sub pt-[2px]">
                    Sales Generated
                  </p>
                </div>
              </div>
              <div className="mt-[48px]">
                <button
                  className="w-[232.56px] h-[64px]
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
          <div className="w-[1290px] h-[53.98px] mt-[48px]">
            <div className="flex">
              <div className="ml-[684.72px]">
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
