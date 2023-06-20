import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "./Image/logo.svg";
import usa from "./Image/usa.png";
import us from "./Image/us.png";
function Head() {
  return (
    <>
      <div className="w-full bg-[#0F3460] flex col space-x-0">
        <div className="hidden lg:flex w-1/2 p-2 justify-start font-Open Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif">
          <div className=" flex ">
            <div className="flex items-center">
              <FaPhoneAlt
                style={{
                  display: "flex",
                  // marginTop: "4px",
                  marginLeft: "80px",
                  color: "white",
                  paddingRight: "4px",
                }}
              />
              <p className="px-3 text-white text-sm">+88012 3456 7894</p>
            </div>
          </div>
          <div className=" flex flex-row">
            <BsEnvelope
              style={{
                display: "flex",
                marginTop: "4px",
                marginLeft: "10px",
                color: "white",
              }}
            />
            <p className="px-3 text-white text-sm">support@ui-lib.com</p>
          </div>
        </div>
        <div className=" flex  lg:hidden  w-1/2  ms-10 justify-normal bg-[#0F3460]">
          <img className="w-16 ms-4" src={logo} alt=""></img>
        </div>
        <div className="w-1/2 flex col p-2 mx-8 justify-end">
          <div className="hidden lg:flex text-white px-2 text-sm">
            Theme FAQ"s
          </div>
          <div className="hidden lg:flex text-white px-8 text-sm">
            Need Help?
          </div>

          <img className="font-normal rounded-2xl lg:px-1 lg:font-light" src={usa} alt=""></img>

          <select
            name="language"
            id="language"
            className="bg-[#0F3460] text-white "
          >
            <option value="EN">EN</option>
            <option value="python">USA</option>
            <option value="c++" disabled>
              HN
            </option>
            {/* <option value="java" selected></option> */}
          </select>

          <img className="font-normal rounded-2xl lg:px-1 lg:font-light" src={us} alt=""></img>

          <select
            name="language"
            id="language"
            className="bg-[#0F3460] text-white"
          >
            <option value="EN">EN</option>
            <option value="python">USA</option>
            <option value="c++" disabled>
              HN
            </option>
            {/* <option value="java" selected></option> */}
          </select>
        </div>
      </div>
    </>
  );
}
export default Head;
