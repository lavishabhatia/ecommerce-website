import React from "react";
import { Categories_data } from "./Categories_Card_data";

function Deal_cloth() {
  return (
    <div>
      <div>
        <h1 className=" p-3 lg:p-2 lg:ps-9 lg:ms-7 bg-[#F6F6F6] text-lg font-normal text-[22px]">
          <b>Deals Of The Day</b>
        </h1>
      </div>
      <div className="grid grid-cols-1 p-3 lg:grid lg:grid-cols-5 lg:gap-2  bg-[#F6F6F6] flex-row lg:px-16 lg:py-6 justify-center">
        {Categories_data.map((e) => {
          return (
            <div className="flex flex-col mt-2 p-1 bg-white">
              <div className="relative  ">
                <img className="h-40 w-full object-contain" src={e.imgscr} />
              </div>
              <div className="bg-white p-1">
                <p className=" text-center  bottom-20 text-black text-lg  overflow-hidden overflow-x-hidden overflow-y-hidden   font-medium rounded ease-in w-full">
                  {e.cname}
                </p>
                <p className="text-center bottom-10 text-black text-lg font-medium rounded ease-in w-full">
                  <b>{e.cost}</b>
                </p>
                <button className="border-2 border-black rounder-sm  text-black text-lg font-medium rounded flex justify-center w-full">
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
export default Deal_cloth;
