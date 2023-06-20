import React from "react";
// import Info_card from "./Info_card";
import { Categories_Card_data } from "./Categories_Card_data";
function Map_card() {
  return (
    <div className="grid grid-cols-2 gap-1 pr-3 lg:grid lg:grid-cols-6 lg:gap-1 bg-[#F6F6F6]    lg:px-14">
      {Categories_Card_data.map((e) => {
        return (
          <div className="mr-2 relative flex-row my-2 ms-3">
            <img className=" lg:w-full lg:h-full" src={e.imgscr}></img>

            <button className="bg-black absolute bottom-0 text-white text-lg lg:flex lg:justify-center lg:items-center  font-medium rounded  w-full">
              {e.cname}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Map_card;
