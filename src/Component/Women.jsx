import React from "react";
import { Electronics_data } from "./Categories_Card_data";
function Women() {
  return (
    <div className="flex flex-col p-3 bg-[#F6F6F6] lg:flex lg:flex-row">
      <div className="w-full p-3 lg:w-1/4 justify-start flex flex-col shadow-sm lg:p-2 lg:ms-12 bg-white lg:px-3">
        <h1 className="top-3 left-4 text-lg lg:my-3">
          <b>Women</b>
        </h1>
        
        <div className="flex flex-col gap-2 lg:gap-3">
        <h3 className="font-Open Sans, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif top-5  ">
          Wireless Speaker
        </h3>
        <h3>Tablet</h3>
        <h3>Smartphone</h3>
        <h3>Laptop</h3>
        <h3>iMac</h3>
        <h3>Game Controller</h3>
        <h3>Drone</h3>
        <h3>Apple</h3>
        <h3>Browse All</h3>
      </div>
      </div>
      <div className="gird gird-cols-1 lg:grid lg:grid-cols-5 lg:gap-7  bg-[#F6F6F6] lg:flex-row  justify-center  lg:px-7">
        {Electronics_data.map((e) => {
          return (
            <div className="flex flex-col mt-2 p-1 bg-white">
              <div className="relative  ">
                <img className="h-40 w-full object-contain" src={e.imgscr} />
              </div>
              <div className="bg-white p-7">
                <p className=" text-center  bottom-20 text-black text-lg  overflow-hidden overflow-x-hidden overflow-y-hidden   font-medium rounded ease-in w-full">
                  {e.cname}
                </p>
                <p className="text-center bottom-10 text-black text-lg font-medium rounded ease-in w-full py-3">
                  <b>{e.cost}</b>
                </p>
                <button className="border-2 p-1 border-black rounder-sm bottom-0 text-black text-lg font-medium rounded ease-in w-full mt-2">
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Women;
