import React from "react";
import layer1 from "../../../assets/images/layer1.png";
import layer2 from "../../../assets/images/layer2.png";
import layer3 from "../../../assets/images/layer3.png";
import layer4 from "../../../assets/images/layer4.png";
import layer5 from "../../../assets/images/layer5.png";
import layer6 from "../../../assets/images/layer6.png";
const BrandCard = () => {
  return (
    <>
      <div className="h-[1499.53px] w-full bg-white-light font-inter">
        <div className="mx-[75px] h-[1399.53px]  ">
          <div className=" mt-[96px]">
            <p className="font-bold text-[64px] text-black-heads ml-[220px]">
              Everything your brand needs to
            </p>
            <p className="px-[295.34px] font-bold text-black-heads text-[51px]">
              make your brand unforgettable
            </p>
          </div>
          <div className="mt-[64px]">
            <div className="grid grid-cols-3 gap-[30px]">
              <div
                className="w-[410px] h-[506.53px]
               bg-cream-card rounded-md"
              >
                <img src={layer1} alt="l1" className="mx-[40px] mt-[40px]" />
                <div className="mx-[40px] mt-[48px] mb-[40px]">
                  <p className="max-w-[307.98px] h-[72px] px-[51.11px] font-bold text-center text-[28px] text-black-heads">
                    Plug-and-play with your stack
                  </p>
                  <p className="pt-[8px] text-gray-sub text-[16px] font-medium max-w-[312.06px] h-[90px] px-[49.06px] text-center">
                    Native integrations provide seamless segmentation,
                    automation & tracking. No clunky spreadsheets.
                  </p>
                </div>
              </div>
              <div
                className="w-[410px] h-[506.53px]
               bg-sky-bg rounded-md"
              >
                <img src={layer2} alt="l2" className="mx-[51px] mt-[84.57px]" />
                <div className="w-[330px] h-[140px] mx-[40px] mt-[48px]">
                  <p className="font-bold text-[28px]  pl-[49.68px] text-black-darker max-w-[241.45px] ">
                    Run campaigns on autopilot
                  </p>
                  <p className="mt-[8px] font-medium text-[16px] text-center text-gray-sub max-w-[409.73px] px-[49.68px] h-[60px]">
                    Ink profits while you sleep: Just set it and forget it.
                  </p>
                </div>
              </div>
              <div
                className="w-[410px] h-[506.53px]
               bg-purple-bglight rounded-md"
              >
                <img
                  src={layer3}
                  alt="l3"
                  className="mx-[46.5px] mt-[51.27px]"
                />
                <div className="w-[330px] h-[134px] mx-[40px] mt-[48px]">
                  <p className="font-bold text-[26px]  pl-[30.61px] text-black-darker max-w-[321px] ">
                    Real-time ROI dashboard
                  </p>
                  <p className="mt-[8px] font-medium text-[16px] text-center text-gray-sub max-w-[409.73px] px-[49.68px] h-[60px]">
                    Track performance of every postcard by customer or discount
                    code. Your CFO will love it.
                  </p>
                </div>
              </div>
              <div
                className="w-[410px] h-[506.53px]
               bg-sky-light rounded-md"
              >
                <img src={layer4} alt="l4" className="mx-[50.5px] mt-[57px]" />
                <div className="w-[330px] h-[140px] mx-[40px] mt-[48px]">
                  <p className="font-bold text-[26px]  pl-[34.33px] text-black-darker max-w-[384.53px] ">
                    Deliver WOW with *real* handwritten cards
                  </p>
                  <p className="mt-[8px] font-medium text-[16px] text-center text-gray-sub max-w-[409.73px] px-[49.68px] h-[60px]">
                    Our proprietary robots use real pens and ink for an
                    unforgettable VIP touch.
                  </p>
                </div>
              </div>
              <div
                className="w-[410px] h-[506.53px]
               bg-pink-lightbg rounded-md"
              >
                <img
                  src={layer5}
                  alt="l5"
                  className="mx-[79.75px] mt-[79.25px]"
                />
                <div className="w-[330px] h-[134px] mx-[40px] mt-[48px]">
                  <p className="font-bold text-[25px]  pl-[60.36px] text-black-darker max-w-[265px] ">
                    Predictable pricing
                  </p>
                  <p className="mt-[8px] font-medium text-[16px] text-center text-gray-sub max-w-[409.73px] px-[49.68px] h-[60px]">
                    Unlike CPCs, postage rates don’t change based on competition
                    or who you’re targeting.
                  </p>
                </div>
              </div>
              <div
                className="w-[410px] h-[506.53px]
               bg-gray-lightbg rounded-md"
              >
                <img src={layer6} alt="l6" className="mx-[55px] mt-[40px]" />
                <div className="w-[330px] h-[170px] mx-[40px] mt-[48px]">
                  <p className="font-bold text-[28px]  pl-[60.36px] text-black-darker max-w-[329.47px] ">
                    Complimentary concierge service
                  </p>
                  <p className="mt-[8px] font-medium text-[16px] text-center text-gray-sub max-w-[324.23px] px-[21.68px] h-[60px]">
                    DTC is in our DNA. Our pros will build your strategy and
                    custom designs using battle-tested best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCard;
