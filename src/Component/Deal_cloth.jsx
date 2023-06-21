import React from "react";
import { Categories_data } from "./Categories_Card_data";
import { AiOutlineEye, AiOutlineHeart }   from "react-icons/ai";
function Deal_cloth() {
  return (
    <div>
      <div>
        <h1 className=" p-3 md:ms-7 md:text-[24px] lg:p-2 lg:ps-9 lg:ms-7 bg-[#F6F6F6] text-lg font-normal text-[22px]">
          <b>Deals Of The Day</b>
        </h1>
      </div>
      <div className="grid grid-cols-1 p-3 md:grid md:grid-cols-3 md:gap-2 lg:grid lg:grid-cols-5 lg:gap-2  bg-[#F6F6F6] flex-row lg:px-16 lg:py-6 justify-center">
        {Categories_data.map((e) => {
          return (
            <div className="flex flex-col mt-2 p-1 bg-white lg:hover:border-[1px] lg:transition-all lg:duration-300 lg:hover:border-black lg:hover:rounded-md group relative overflow-x-hidden">
            <div className="flex">
            <div className="flex justify-center w-full  relative  ">
                <img className="h-40 w-full object-contain" src={e.imgscr} />
              </div>
              <div className="hidden lg:flex lg:flex-col">
                <div className=" abosolute flex justify-end lg:translate-x-7 lg:group-hover:-translate-x-1 transition-transform py-4 lg:h-4 lg:w-5 lg:gap-3">
       <AiOutlineEye />
                </div>
                <div className=" abosolute flex justify-end translate-x-6 group-hover:-translate-x-1 transition-transform grayscale">
                  
                  <AiOutlineHeart  />
                  
                </div>
              </div>
                        </div>

              <div className="bg-white p-7 lg:p-1 ">
                <p className=" text-center  bottom-20 text-black text-lg  overflow-hidden overflow-x-hidden overflow-y-hidden   font-medium rounded ease-in w-full">
                  {e.cname}
                </p>
                <p className="text-center bottom-10 text-black text-lg font-medium rounded ease-in w-full">
                  <b>{e.cost}</b>
                </p>
                <div className="flex flex-row justify-center p-3 ">
                  <svg
                    width="24"
                    height="24"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#star-0.979828314219761)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.979828314219761">
                        <stopColor offset="1" stop-color="#FFCD4E"></stopColor>
                        <stopOpacity
                          offset="1"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stopOpacity>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#star-0.979828314219761)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.979828314219761">
                        <stopColor offset="1" stop-color="#FFCD4E"></stopColor>
                        <stopOpacity
                          offset="1"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stopOpacity>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#star-0.979828314219761)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.979828314219761">
                        <stopColor offset="1" stop-color="#FFCD4E"></stopColor>
                        <stopOpacity
                          offset="1"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stopOpacity>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#star-0.979828314219761)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.979828314219761">
                        <stopColor offset="1" stop-color="#FFCD4E"></stopColor>
                        <stopOpacity
                          offset="1"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stopOpacity>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="url(#star-0.15956097530211366)"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#FFCD4E"
                    class="feather feather-star"
                  >
                    <defs>
                      <linearGradient id="star-0.15956097530211366">
                        <stopColor offset="0" stop-color="#FFCD4E"></stopColor>
                        <stopOpacity
                          offset="0"
                          stop-color="#FFFFFF"
                          stop-opacity="1"
                        ></stopOpacity>
                      </linearGradient>
                    </defs>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <button className="border-2 border-black rounded-br-sm  text-black text-lg font-medium rounded flex justify-center p-2 lg:text-sm w-full lg:transition-all lg:duration-300  lg:bg-white  lg:text-black lg:hover:text-white lg:hover:bg-black">
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
