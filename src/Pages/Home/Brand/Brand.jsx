import React from "react";
import image3 from "../../../assets/images/bgimage3.png";
import image4 from "../../../assets/images/bgimage4.png";
import image5 from "../../../assets/images/bgimage5.png";
import image6 from "../../../assets/images/bgimage6.png";
import second from "../../../assets/images/second.png";
import first from "../../../assets/images/first.png";
import third from "../../../assets/images/third.png";
import four from "../../../assets/images/four.png";
const Brand = () => {
  return (
    <>
      <div
        className="w-full 
      xl:h-[666.5px] md:h-[569.5px] sm:h-[660px] xs:h-[1052px] 
      border  bg-white-light font-inter"
      >
        <div
          className="
        xl:px-[394.5px] xl:pt-[106px] 
        lg:pt-[75px] md:pt-[50px] sm:pt-[40px] xs:pt-[35px]
        "
        >
          <p
            className="font-bold text-center 
          xl:text-[63px] lg:text-[53px] md:text-[45px] sm:text-[40px] xs:text-[27px] xl:max-w-[600px] xl:h-[157px]"
          >
            Trusted by thousands of top DTC brands.
          </p>
        </div>

        <div className="md:block hidden ">
          <div
            className="
        xl:mx-[35px] xl:gap-[0px] 
        lg:gap-[10px] lg:mx-[20px] 
        md:gap-[4px] md:mx-[10px]
        lg:mt-[58px] md:mt-[40px] grid grid-cols-4"
          >
            <div>
              <img src={image3} alt="i3" />
            </div>
            <div>
              <img src={image4} alt="i4" />
            </div>
            <div>
              <img src={image5} alt="i5" />
            </div>
            <div>
              <img src={image6} alt="i6" />
            </div>
          </div>
          <div className="xl:ml-[66px] lg:ml-[50px] md:ml-[30px] mt-[24px] grid grid-cols-4">
            <img
              src={first}
              alt="fi"
              className="
          xl:w-[184.53px] xl:h-[32px]
          lg:w-[150px] lg:h-[30px]
          md:w-[140px] md:h-[30px]
          "
            />
            <img
              src={second}
              alt="s"
              className="xl:w-[235.03px] xl:h-[32px] lg:w-[150px] lg:h-[30px] md:w-[140px] md:h-[30px]"
            />
            <img
              src={third}
              alt="th"
              className="ml-[30px] xl:w-[166px] xl:h-[32px] lg:w-[150px] lg:h-[30px] md:w-[140px] md:h-[30px]"
            />
            <img
              src={four}
              alt="fo"
              className="ml-[80px] xl:w-[60px] xl:h-[32px] lg:w-[50px] lg:h-[30px] md:w-[30px] md:h-[30px]"
            />
          </div>
        </div>
        <div className="md:hidden justify-center items-center flex">
          <div
            className="
        xl:mx-[35px] xl:gap-[0px] 
        lg:gap-[10px] lg:mx-[20px]
        md:gap-[4px] md:mx-[10px]
        sm:gap-[15px] sm:mx-[10px] xs:mx-[10px]
         xs:gap-[20px]
        lg:mt-[58px] md:mt-[40px] sm:mt-[45px] xs:mt-[30px] grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1"
          >
            <div>
              <img src={image3} alt="i3" className="w-[228px] h-[161px]" />
              <div className="md:hidden">
                <img
                  className=" sm:w-[130px] sm:h-[30px] xs:w-[110px] xs:h-[30px] mt-[10px] 
                  sm:ml-[50px] xs:ml-[50px]"
                  src={first}
                  alt="f"
                />
              </div>
            </div>
            <div>
              <img src={image4} alt="i4" className="w-[228px] h-[161px]" />
              <div className="md:hidden">
                <img
                  className=" sm:w-[130px] sm:h-[30px] xs:w-[120px] xs:h-[30px]
                  mt-[10px] 
                  sm:ml-[50px] xs:ml-[50px]"
                  src={second}
                  alt="f"
                />
              </div>
            </div>
            <div>
              <img src={image5} alt="i5" className="w-[228px] h-[161px]" />
              <div className="md:hidden">
                <img
                  className=" sm:w-[110px] sm:h-[30px] xs:w-[100px] xs:h-[30px]  mt-[10px] 
                  sm:ml-[50px] xs:ml-[60px]"
                  src={third}
                  alt="f"
                />
              </div>
            </div>
            <div>
              <img src={image6} alt="i6" className="w-[228px] h-[161px]" />
              <div className="md:hidden">
                <img
                  className=" sm:w-[60px] sm:h-[30px] xs:w-[70px] xs:h-[30px mt-[10px] ml-[80px]"
                  src={four}
                  alt="f"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
