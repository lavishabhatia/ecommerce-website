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
            <div className="flex flex-col mt-2 p-1 bg-white lg:hover:border-[1px] lg:transition-all lg:duration-300 lg:hover:border-black lg:hover:rounded-md group relative overflow-x-hidden">
            <div className="flex">
            <div className="flex justify-center w-full  relative  ">
                <img className="h-40 w-full object-contain" src={e.imgscr} />
              </div>
              <div className="hidden lg:flex lg:flex-col">
                <div className=" abosolute flex justify-end translate-x-7 group-hover:-translate-x-1 transition-transform py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="injected-svg"
                    data-src="/assets/images/icons/eye.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                      fill="black"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
                <div className=" abosolute flex justify-end translate-x-6 group-hover:-translate-x-1 transition-transform grayscale">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="injected-svg"
                    data-src="/assets/images/icons/heart.svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.4502 3.98319L11.436 5.02972C11.0592 5.41843 10.5411 5.63785 9.99974 5.63785C9.45844 5.63785 8.94024 5.41843 8.56353 5.02972L7.54932 3.98319C6.9321 3.3463 6.10857 3.00053 5.26361 3.00053C4.41865 3.00053 3.59512 3.3463 2.97789 3.98319C2.3586 4.62222 2 5.50193 2 6.43187C2 7.36181 2.3586 8.24151 2.97789 8.88054L9.99974 16.1262L17.0216 8.88054C17.3278 8.56472 17.5742 8.18603 17.7432 7.76518C17.9123 7.34425 18 6.891 18 6.43187C18 5.97273 17.9123 5.51949 17.7432 5.09855C17.5742 4.67771 17.3281 4.29935 17.0219 3.98353C16.716 3.66769 16.3555 3.41993 15.964 3.25255C15.5727 3.08524 15.1556 3 14.7359 3C14.3162 3 13.8991 3.08524 13.5077 3.25255C13.1163 3.41992 12.7561 3.66735 12.4502 3.98319ZM9.99974 19L1.54168 10.2724C0.554557 9.25383 0 7.87235 0 6.43187C0 4.99139 0.554557 3.6099 1.54168 2.59133C2.52879 1.57276 3.86761 1.00053 5.26361 1.00053C6.4801 1.00053 7.65317 1.43506 8.58793 2.22081C8.72586 2.33676 8.85861 2.46035 8.98554 2.59133L9.99974 3.63785L11.0139 2.59133C11.1405 2.46067 11.2732 2.33701 11.4115 2.22074C11.8071 1.88806 12.2483 1.61591 12.7215 1.41358C13.3601 1.14054 14.0446 1 14.7359 1C15.4272 1 16.1117 1.14054 16.7503 1.41358C17.3889 1.68663 17.969 2.08693 18.4577 2.59143C18.9466 3.09569 19.3346 3.69431 19.5992 4.35328C19.8638 5.01225 20 5.71857 20 6.43187C20 7.14517 19.8638 7.85148 19.5992 8.51045C19.3346 9.16942 18.9467 9.76814 18.4578 10.2724L9.99974 19Z"
                      fill="#A3B3DB"
                    ></path>
                  </svg>
                </div>
              </div>
                        </div>
              {/* <div className="relative  ">
                <img className="h-40 w-full object-contain" src={e.imgscr} />
              </div> */}
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
