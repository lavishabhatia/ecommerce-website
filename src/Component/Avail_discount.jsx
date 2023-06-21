import React from "react";
import { Discount } from "./Categories_Card_data";
function Avail_discount() {
  return (
    <div className=" bg-[#F6F6F6] lg:p-9">
      <div className="flex flex-col m-2 md:grid md:grid-cols-3 md:gap-2 lg:flex lg:flex-row bg-[#F6F6F6] justify-center lg:m-4">
        {Discount.map((e) => {
          return (
            <div className=" relative flex-row my-2 ms-2 md:my-0 md:ms-0 lg:my-2 lg:ms-2">
              <img
                className=" box-border   object-contain w-full"
                src={e.imgscr}
              />
              <div className="absolute w-full h-full top-0 left-0">
                <div className="flex flex-col py-4 px-5 md:py-0 md:px-0 lg:py-4 lg:px-5">
                  <p className={`text-[${e.text}]`}>{e.cname}</p>
                  <br />
                  <p className={`text-[${e.text}] md:hidden lg:text-[${e.text}] `}>
                    {e.best_sale}
                    <br />
                  </p>
                  <p className={`text-[${e.text}]`}>
                    {e.add_info}
                    <br />
                  </p>

                  <button className={`bottom-0 absolute md:bottom-0 lg:bottom-5 text-[${e.text}] text-lg  overflow-hidden overflow-x-hidden overflow-y-hidden   font-medium rounded ease-in `}>
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
export default Avail_discount;

