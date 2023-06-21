import React from "react";

function Selected_Product() {
  return (
    <div className="flex flex-col ps-5 lg:flex lg:py-5">
      <div className="w-full lg:w-1/2   lg:ps-9">
        <div className="font-semibold text-lg">Selected Products</div>
        <div>All our new arrivals in a exclusive brand selection</div>
      </div>
      <div className="grid grid-rows-2 gap-3 lg:w-1/2 lg:grid lg:grid-cols-4 lg:gap-4 text-black text-base mr-11 ">
        <div className="border-2 border-black rounded">New Arrivals</div>
        <div className="border-2 border-black rounded">Best Seller </div>
        <div className="border-2 border-black rounded">Most Popular</div>
        <div className="border-2 border-black rounded">View All</div>
      </div>
    </div>
  );
}
export default Selected_Product;
