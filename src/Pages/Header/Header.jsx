import React, { useState } from "react";
import logo from "../../assets/svgs/Logo.svg";
import arrow from "../../assets/svgs/downarrow.svg";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Header = () => {
  // const { isSignIn, setIsSignIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleLogOut = () => {
  //   setIsSignIn(false);
  //   navigate("/signin");
  // };

  return (
    <>
      <div className="w-full h-[65px] bg-white-light">
        <div className="flex xl:ml-[75px] lg:ml-[30px] md:ml-[20px] sm:ml-[10px] xs:ml-[20px]">
          <img
            src={logo}
            alt="logo"
            className="my-[27.5px]
           sm:w-[162.31px] sm:h-[30px]
           xs:w-[115px] xs:h-[25px] sm:block hidden
           "
          ></img>
          <div
            className="flex  xl:ml-[336.45px] lg:ml-[150px] md:ml-[40px] 
           mt-[14.5px] font-inter"
          >
            <div className=" hidden md:flex">
              <p className="font-medium lg:text-[14px] text-[12px] py-[19px] text-black-head">
                Resources
              </p>
              <img
                src={arrow}
                alt="aro"
                className="w-[10px] h-[6px] my-[25px] ml-[10px]"
              />
              <p className="lg:pl-[19px] md:pl-[5px] text-black-heads font-medium lg:text-[14px] text-[12px] py-[19px]">
                Success stories
              </p>
              <div className="flex">
                <p className="lg:pl-[20.47px] md:pl-[16.47px] py-[19px] font-medium lg:text-[14px] text-[12px] text-black-head">
                  Company
                </p>
                <img
                  src={arrow}
                  alt="aro"
                  className="w-[10px] h-[6px] my-[25px] ml-[10px]"
                />
              </div>
              <p className="font-medium lg:text-[14px] text-[12px] text-black-heads pl-[19px] pr-[38px] py-[19px]">
                Pricing
              </p>
            </div>

            <div className="flex">
              {/* {isSignIn ? (
                <>
                  <div className="xl:ml-[19px] lg:ml-[30px] md:ml-[4px] sm:ml-[25px] xs:ml-[8px] my-[6px]">
                    <button
                      className="lg:w-[83.84px] md:w-[80px] sm:w-[81.84px] xs:w-[71.84px] h-[44px] bg-white-light  lg:px-[22px] md:px-[18px] lg:py-[6px] md:py-[10px]
              rounded-full border border-black-darkborder font-medium text-[15px]
               border-r-black-darkborder border-r-[7px] border-b-[5px] drop-shadow-2xl"
                    >
                      Login
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  <button onClick={handleLogOut}>Logout</button>
                </div>
              )} */}
              <div className="xl:ml-[19px] lg:ml-[30px] md:ml-[4px] sm:ml-[25px] xs:ml-[18px] my-[6px] sm:block hidden ">
                <button
                  className="lg:w-[83.84px] md:w-[80px] sm:w-[81.84px] xs:w-[71.84px] h-[44px] bg-white-light  lg:px-[22px] md:px-[18px] lg:py-[6px] md:py-[10px]
              rounded-full border border-black-darkborder font-medium text-[15px]
               border-r-black-darkborder border-r-[7px] border-b-[5px] drop-shadow-2xl"
                >
                  Login
                </button>
              </div>
              <div className="xl:ml-[16px] lg:ml-[16px] md:ml-[5px] sm:ml-[1px] xs:ml-[5px] my-[6px] sm:block hidden">
                <button
                  className="font-medium xl:text-[14px] md:text-[13px] text-[12px] text-white-light
                xl:w-[184.86px] lg:w-[140px] md:w-[130px] sm:w-[120.84px] xs:w-[86.84px] h-[44px] bg-orange-dark xl:px-[25px] lg:py-[14px] md:py-[10px]
                 rounded-full border-black-darkborder border-r-[7px] border-b-[5px] 
                "
                >
                  Create free account
                </button>
              </div>
              <div className="sm:hidden">
                <div className="flex">
                  <button
                    className=" xs:w-[71.84px] h-[44px] bg-white-light  
              rounded-full border border-black-darkborder font-medium text-[15px] ml-[-3px]
               border-r-black-darkborder border-r-[7px] border-b-[5px] drop-shadow-2xl"
                  >
                    Login
                  </button>
                  <img
                    src={logo}
                    alt="logo"
                    className=" my-[12px] ml-[15px]
           sm:w-[162.31px] sm:h-[30px]
           xs:w-[115px] xs:h-[25px] sm:hidden
           "
                  ></img>
                </div>
              </div>

              <div className="sm:ml-[15px] xs:ml-[30px] md:hidden">
                <button
                  onClick={toggleMenu}
                  className="md:p-[15px] xs:p-[8px] text-black text-[24px] transform: rotate(90deg)"
                  aria-label="Menu"
                >
                  &#x2022;&#x2022;&#x2022;
                </button>
              </div>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div
            className="md:hidden 
          absolute top-[68px] right-0 bg-white shadow-lg w-[180px] p-[20px] 
          rounded-md z-10 bg-white-light"
          >
            <a href="/resource">Resources</a>
            <a href="/success" className="block pt-[8px]">
              Success stories
            </a>
            <a href="/company" className="block pt-[8px]">
              Company
            </a>
            <a href="/pricing" className="block pt-[8px]">
              Pricing
            </a>
            <a href="/signup" className="block pt-[8px]">
              SignUp
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
