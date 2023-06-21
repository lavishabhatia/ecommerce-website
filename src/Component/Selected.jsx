import React from "react";
import { Selected_data } from "./Categories_Card_data";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
function Selected() {
  return (
    <div className="flex flex-col p-3 bg-[#F6F6F6] md:flex md:flex-row lg:flex lg:flex-row">
      <div className=" w-full md:hidden lg:w-1/4 lg:justify-start lg:flex lg:flex-col shadow-sm lg:p-2 lg:ms-12 bg-white lg:px-3">
        <h1 className="top-3 left-4 text-lg lg:my-3">
          <b>Men's Fashion</b>
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
      <div className="grid grid-cols-1  gap-3  py-3 md:grid md:grid-cols-5 md:gap-2 lg:grid lg:grid-cols-5 lg:gap-7  bg-[#F6F6F6] lg:flex-row  justify-center  lg:mx-6 ">
        {Selected_data.map((e) => {
          return (
            <div className="flex flex-col mt-2 p-1 bg-white lg:transition-all lg:duration-300 lg:hover:border-[1px] lg:hover:border-black lg:hover:rounded-md group relative overflow-x-hidden">
            <div className="flex">
            <div className="flex w-full justify-center relative  ">
                <img className="h-40 w-full object-contain" src={e.imgscr} />
              </div>
              <div className="hidden lg:flex lg:flex-col lg:gap-2 ">
                <div className=" abosolute flex justify-end translate-x-7 group-hover:-translate-x-1 transition-transform py-4 ">
                <AiOutlineEye />
                </div>
                <div className=" abosolute flex justify-end translate-x-6 group-hover:-translate-x-1 transition-transform grayscale">
                <AiOutlineHeart  />
                </div>
              </div>
           
              </div>
              <div className="bg-white p-7">
                <p className=" text-center  bottom-20 text-black text-lg  overflow-hidden overflow-x-hidden overflow-y-hidden   font-medium rounded ease-in w-full">
                  {e.cname}
                </p>
                <p className="text-center bottom-10  text-black text-lg font-medium rounded ease-in w-full py-3">
                  <b>{e.cost}</b>
                </p>
                <div className="flex flex-row justify-center p-3 ">
                  <svg
                    width="24"
                    height="24"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="url(#star-0.979828314219761)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.979828314219761">
                        <stop offset="1" stop-color="#FFCD4E"></stop>
                        <stop
                          offset="1"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="url(#star-0.979828314219761)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.979828314219761">
                        <stop offset="1" stop-color="#FFCD4E"></stop>
                        <stop
                          offset="1"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="url(#star-0.979828314219761)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.979828314219761">
                        <stop offset="1" stop-color="#FFCD4E"></stop>
                        <stop
                          offset="1"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="url(#star-0.979828314219761)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.979828314219761">
                        <stop offset="1" stop-color="#FFCD4E"></stop>
                        <stop
                          offset="1"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="url(#star-0.15956097530211366)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.15956097530211366">
                        <stop offset="0" stop-color="#FFCD4E"></stop>
                        <stop
                          offset="0"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <button className="border-2 p-1 border-black rounder-sm bottom-0 text-black text-lg font-medium rounded  w-full mt-2   lg:transition-all lg:duration-300 lg:text-sm  lg:bg-white  lg:text-black lg:hover:text-white lg:hover:bg-black">
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
export default Selected;
