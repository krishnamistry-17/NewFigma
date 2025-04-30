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
      <div
        className="xl:h-[1499.53px] lg:h-[1399px] md:h-[1120px]
      sm:h-[1535px] xs:h-[3222px]
     w-full bg-white-light font-inter"
      >
        <div className="xl:mx-[75px]   h-[1399.53px]  ">
          <div className="mt-[96px]">
            <p className="font-bold lg:text-[64px] md:text-[50px] sm:text-[45px] xs:text-[40px] text-black-heads xl:ml-[220px]">
              Everything your brand needs to
            </p>
            <p className="xl:px-[295.34px] font-bold text-black-heads lg:text-[51px] md:text-[45px] sm:text-[40px] xs:text-[35px]">
              make your brand unforgettable
            </p>
          </div>

          <div className="mt-[64px]">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xl:gap-[30px] lg:gap-[10px] md:gap-[10px] sm:gap-[10px] xs:gap-[20px]">
              <div
                className="
                xl:w-[410px] xl:h-[506.53px]
                lg:w-[323px] lg:h-[450px]
                md:w-[248px] md:h-[361px]
                sm:w-[239px] sm:h-[347px]
                xs:w-[323px] xs:h-[450px]
               bg-cream-card rounded-md"
              >
                <img
                  src={layer1}
                  alt="l1"
                  className="mx-[40px] 
                  lg:mt-[40px] md:mt-[20px] sm:mt-[10px] xs:mt-[20px]
                xl:w-[330px] xl:h-[208px]
                lg:w-[280px] lg:h-[200px]
                md:w-[187px] md:h-[137px]
                sm:w-[180px] sm:h-[130px]
                 xs:w-[280px] xs:h-[200px]
                "
                />
                <div className="text-center lg:mt-[48px] md:mt-[10px] sm:mt-[10px] xs:mt-[30px]">
                  <p className="font-bold  lg:text-[28px] md:text-[22px] sm:text-[20px] xs:text-[22px] text-black-heads">
                    {" "}
                    Plug-and-play with your stack
                  </p>
                  <p className="pt-[8px] text-gray-sub text-[16px] font-medium">
                    {" "}
                    Native integrations provide seamless segmentation,
                    automation & tracking. No clunky spreadsheets.
                  </p>
                </div>
              </div>
              <div
                className="
                 xl:w-[410px] xl:h-[506.53px]
                lg:w-[323px] lg:h-[450px]
                md:w-[248px] md:h-[361px]
                sm:w-[239px] sm:h-[347px]
                 xs:w-[323px] xs:h-[450px]
          
               bg-sky-bg rounded-md"
              >
                <img
                  src={layer2}
                  alt="l2"
                  className="xl:mx-[51px] lg:mx-[30px] md:mx-[20px] sm:mx-[15px] xs:mx-[30px] 
                  xl:mt-[84.57px] lg:mt-[64px] md:mt-[10px] sm:mt-[10px] xs:mt-[20px]
                xl:w-[308px] xl:h-[150px]
                lg:w-[280px] lg:h-[200px]
                md:w-[200px] md:h-[143px]
                sm:w-[212px] sm:h-[140px]
                xs:w-[280px] xs:h-[200px]
                "
                />
                <div className="text-center xl:mt-[48px] lg:mt-[23px] md:mt-[10px] sm:mt-[10px] xs:mt-[20px]">
                  <p className="font-bold lg:text-[28px] md:text-[22px] sm:text-[20px] xs:text-[22px] text-black-darker">
                    Run campaigns on autopilot
                  </p>
                  <p className="mt-[8px] font-medium text-[16px] text-gray-sub">
                    Ink profits while you sleep: Just set it and forget it.
                  </p>
                </div>
              </div>
              <div
                className="
                 xl:w-[410px] xl:h-[506.53px]
                lg:w-[323px] lg:h-[450px]
                md:w-[248px] md:h-[361px]
                sm:w-[239px] sm:h-[347px]
                xs:w-[323px] xs:h-[450px]
               bg-purple-bglight rounded-md"
              >
                <img
                  src={layer3}
                  alt="l3"
                  className="lg:mx-[46.5px] lg:mt-[51.27px]  sm:mt-[20px] xs:mt-[20px]
                  md:mx-[20px] sm:mx-[20px] md:mt-[10px] xs:mx-[22px]
                xl:w-[330px] xl:h-[208px]
                lg:w-[280px] lg:h-[200px]
                md:w-[200px] md:h-[138px]
                sm:w-[180px] sm:h-[130px]
                 xs:w-[280px] xs:h-[200px]
                "
                />
                <div className="text-center lg:mt-[48px] md:mt-[15px] sm:mt-[10px] xs:mt-[20px]">
                  <p className="font-bold lg:text-[26px] md:text-[22px] sm:text-[20px] xs:text-[22px] text-black-darker">
                    Real-time ROI dashboard
                  </p>
                  <p className="mt-[8px] font-medium text-[16px] text-gray-sub">
                    Track performance of every postcard by customer or discount
                    code. Your CFO will love it.
                  </p>
                </div>
              </div>

              <div
                className="
                xl:w-[410px] xl:h-[506.53px]
                lg:w-[323px] lg:h-[450px]
                md:w-[248px] md:h-[361px]
                sm:w-[239px] sm:h-[347px]
                xs:w-[323px] xs:h-[450px]
               bg-sky-light rounded-md"
              >
                <img
                  src={layer4}
                  alt="l4"
                  className="
                xl:mx-[50.5px] xl:mt-[57px] 
                lg:mx-[20px] lg:mt-[20px]
                md:mx-[8px] md:mt-[20px]
                sm:mx-[18px] sm:mt-[8px]
                xs:mx-[20px] xs:mt-[20px]
                xl:w-[309px] xl:h-[220px]
                lg:w-[276px] lg:h-[200px]
                md:w-[227px] md:h-[172px]
                sm:w-[200px] sm:h-[170px]
                xs:w-[276px] xs:h-[200px]
                "
                />
                <div className="text-center">
                  <p
                    className="font-bold lg:text-[26px] md:text-[22px] sm:text-[20px] xs:text-[22px] text-black-darker  
                  lg:mt-[48px] md:mt-[10px] xs:mt-[20px]"
                  >
                    Deliver WOW with *real* handwritten cards
                  </p>
                  <p className="mt-[8px] font-medium text-[16px]  text-gray-sub ">
                    Our proprietary robots use real pens and ink for an
                    unforgettable VIP touch.
                  </p>
                </div>
              </div>

              <div
                className="
                 xl:w-[410px] xl:h-[506.53px]
                lg:w-[323px] lg:h-[450px]
                md:w-[248px] md:h-[361px]
                sm:w-[239px] sm:h-[347px]
                xs:w-[323px] xs:h-[450px]
               bg-pink-lightbg rounded-md"
              >
                <img
                  src={layer5}
                  alt="l5"
                  className="
                  xl:mx-[79.75px] xl:mt-[79.25px]
                  lg:mx-[40px] lg:mt-[20px]
                  md:mx-[20px] mt-[20px]
                  sm:mx-[7px] xs:mx-[30px]
                  xl:w-[250px] xl:h-[181px]
                  lg:w-[250px] lg:h-[180px]
                  md:w-[210px] md:h-[170px]
                  sm:w-[200px] sm:h-[160px]
                  xs:w-[250px] xs:h-[180px]
                  "
                />
                <div className="text-center">
                  <p
                    className="font-bold lg:text-[26px] md:text-[22px] sm:text-[20px] xs:text-[22px] text-black-darker 
                  xl:mt-[48px] lg:mt-[67px] md:mt-[10px] xs:mt-[20px]"
                  >
                    {" "}
                    Predictable pricing
                  </p>
                  <p className="mt-[8px] font-medium text-[16px] text-gray-sub">
                    Unlike CPCs, postage rates don’t change based on competition
                    or who you’re targeting.
                  </p>
                </div>
              </div>
              <div
                className="
                 xl:w-[410px] xl:h-[506.53px]
                lg:w-[323px] lg:h-[450px]
                md:w-[248px] md:h-[361px]
                sm:w-[239px] sm:h-[347px]
                xs:w-[323px] xs:h-[450px]
               bg-gray-lightbg rounded-md"
              >
                <img
                  src={layer6}
                  alt="l6"
                  className="
                  xl:mx-[55px] xl:mt-[40px] 
                  lg:mx-[30px] mt-[20px]
                  md:mx-[20px] sm:mx-[20px] xs:mx-[30px]
                xl:w-[300px] xl:h-[224px]
                lg:w-[270px] lg:h-[200px]
                md:w-[218px] md:h-[161px]
                sm:w-[200px] sm:h-[150px]
                xs:w-[270px] xs:h-[200px]
                "
                />
                <div className="text-center">
                  <p
                    className="font-bold lg:text-[26px] md:text-[22px] sm:text-[20px] xs:text-[22px] text-black-darker 
                  lg:mt-[48px] md:mt-[10px] xs:mt-[20px]"
                  >
                    {" "}
                    Complimentary concierge service
                  </p>
                  <p className="ont-medium text-[16px] text-gray-sub">
                    {" "}
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
