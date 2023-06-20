import React from "react";
import { Week_sales_data } from "./Categories_Card_data";
function Week_sales(){
    return(
        <div className=" bg-[#F6F6F6]">
        <div className="flex flex-col gap-4 p-4 lg:flex lg:flex-row lg:gap-8  bg-[#F6F6F6] justify-center lg">
        {Week_sales_data.map((e) => {
          return (
            <div className=" relative flex-row lg:my-2 lg:ms-2 lg:mr-9">
              <img
                className=" box-border   object-contain w-full"
                src={e.imgscr}
              />
              <div className="absolute w-full h-full top-0 left-0">
                <div className="flex flex-col py-4 px-5">
                  <p className={`text-[${e.text}]`}>{e.cname}</p>
                  <br />
                  <p className={`text-[${e.text}]`}>
                    {e.best_sale}
                    <br />
                  </p>
                  <p className={`text-[${e.text}]`}>
                    {e.add_info}
                    <br />
                  </p>

                  <button className={`bottom-0 absolute lg:bottom-5 text-[${e.text}] text-lg  overflow-hidden overflow-x-hidden overflow-y-hidden   font-medium rounded ease-in `}>
                    Show Now
                  </button>
                </div>
              </div>
              <div className=" hidden text-[#000000] text-[#ffffff]  "></div>
            </div>
          );
        })}
      </div>
        </div>
    );
}
export default Week_sales;