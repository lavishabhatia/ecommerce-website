import React from "react";
// import { FaMicrosoft } from "react-icons/fa";
function Categories() {
  return (
    <div className=" hidden lg:flex items-center justify-between w-full bg-white">
      <div className="flex items-center  ms-10 w-1/2">
      <div className="bg-[#F6F9FC] flex p-2 mb-3">
        {/* <FaMicrosoft className="w-5 h-5" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" id="glyph" height="" viewBox="0 0 64 64" width="512" className="injected-svg grayscale box-border w-11 h-6 bg-[#F6F9FC]" data-src="/assets/images/icons/categories.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m29 11v14a4 4 0 0 1 -4 4h-14a4 4 0 0 1 -4-4v-14a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4zm24-4h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm-28 28h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm21 0a11 11 0 1 0 11 11 11 11 0 0 0 -11-11z" fill="#E94560"></path></svg>

        <div className="">
          <select name="language" id="language" className="bg-[#F6F9FC] text-gray-600 font-medium">
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Bikes">Bikes</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="gifts">gifts</option>
            <option value="Music">Music</option>
            <option value="Health and Beauty">Health and Beauty</option>
            <option value="Pets">Pets</option>
            <option value="Baby Toys">Baby Toys</option>
            <option value="Groceries">Groceries</option>
            <option value="Automotive">Automotive</option>
          </select>
        </div>
        </div>
      </div>
      <div className="flex flex-row justify-end items-end w-1/2 gap-2 bg-white">
        <div className="">
          <select
            name="language"
            id="language"
            className="bg-white flex items-center text-black-400"
          >
            <option value="Categories">Categories</option>
            <option value="Electronics">Fashion</option>
            <option value="Bikes">Electronics</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="gifts">gifts</option>
            <option value="Music">Music</option>
            <option value="Health and Beauty">Health and Beauty</option>
            <option value="Pets">Pets</option>
            <option value="Baby Toys">Baby Toys</option>
            <option value="Groceries">Groceries</option>
            <option value="Automotive">Automotive</option>

            {/* <option value="java" selected>fashion</option> */}
          </select>
        </div>
        <div>
          <select name="language" id="language" className="bg-white">
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Bikes">Bikes</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="gifts">gifts</option>
            <option value="Music">Music</option>
            <option value="Health and Beauty">Health and Beauty</option>
            <option value="Pets">Pets</option>
            <option value="Baby Toys">Baby Toys</option>
            <option value="Groceries">Groceries</option>
            <option value="Automotive">Automotive</option>

            {/* <option value="java" selected></option> */}
          </select>
        </div>
        <div>
          <select name="language" id="language" className="bg-white">
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Bikes">Bikes</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="gifts">gifts</option>
            <option value="Music">Music</option>
            <option value="Health and Beauty">Health and Beauty</option>
          </select>
        </div>
        <div>
          <select name="language" id="language" className="bg-white">
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Bikes">Bikes</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="gifts">gifts</option>
            <option value="Music">Music</option>
            <option value="Health and Beauty">Health and Beauty</option>
          </select>
        </div>
        <div>
          <select name="language" id="language" className="bg-white">
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Bikes">Bikes</option>
            <option value="Home and Garden">Home and Garden</option>
            <option value="gifts">gifts</option>
            <option value="Music">Music</option>
            <option value="Health and Beauty">Health and Beauty</option>
          </select>
        </div>
        {/* <div>
                <select name="language" id="language">
                <option value="Fashion">Fashion</option>
                <option value="Electronics">Electronics</option>
                <option value="Bikes" >Bikes</option>
                <option value="Home and Garden">Home and Garden</option>
                <option value="gifts">gifts</option>
                <option value="Music" >Music</option>
                <option value="Health and Beauty">Health and Beauty</option></select>
                </div> */}
      </div>
    </div>
  );
}
export default Categories;
