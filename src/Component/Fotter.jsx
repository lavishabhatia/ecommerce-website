import React from "react";
import logo from "./Image/logo.svg";
function Fotter() {
  return (
    <div className="flex flex-col p-8 bg-[#0F3460] md:flex md:flex-row md:gap-10 lg:flex lg:flex-row lg:justify-center lg:py-14 lg:mt-3 lg:gap-14">
      <div >
        <div>
          <img className="mt-11 lg:mt-4" src={logo} />
        </div>
        <div className="text-[#d6cfcc] text-base lg:pt-6 font-medium ">
          <p className="flex justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Auctor libero id et, in gravida. Sit diam duis mauris nulla <br />
            cursus. Erat et lectus vel ut sollicitudin elit at amet
          </p>
        </div>
      </div>
      <div className="flex flex-col md:mt-6 md:gap-1 lg:mt-0">
      <span className="mt-5 text-white text-lg font-semibold">About Us</span>
        <span className="text-[#d6cfcc] lg:pt-5">Privacy Policy</span>
        <span className="text-[#d6cfcc] lg:pt-">Careers</span>
        <span className="text-[#d6cfcc] lg:py-3">Our Stores</span>
        <span className="text-[#d6cfcc]">Our Cares</span>
        <span className="text-[#d6cfcc] lg:py-3">Teams & Conditions</span>
    
      </div>
      <div className="pb-9 flex flex-col">
        {" "}
        <div className="mt-5 md:mt-10 text-white text-lg font-semibold">
          Customer Care
        </div>
        <span className="text-[#d6cfcc] lg:pt-5 ">Help Center</span>
        <span className="text-[#d6cfcc] lg:py-3">How to Buy</span>
        <span className="text-[#d6cfcc]">Track Your Order</span>
        <span className="text-[#d6cfcc] lg:py-3">
          Corporate & Bulk Purchasing{" "}
        </span>
        <div className="text-[#d6cfcc]">Returns & Refunds</div>
      </div>
      <div className="flex flex-col">
        {" "}
        <div className="text-white text-lg font-semibold md:mt-10 lg:mt-4">Contact Us</div>
        <div className="text-[#d6cfcc] md: pt-2 lg:pt-5">
          70 Washington Square South, New York,
          <br />
          NY 10012, United States
        </div>
        <span className="text-[#d6cfcc] py-2">Email: uilib.help@gmail.com</span>
        <span className="text-[#d6cfcc]">Phone: +1 1123 456 780</span>
        <span className="text-[#d6cfcc] py-1">Teams & Conditions</span>
        <span className="text-[#d6cfcc] flex gap-6 pt-4  ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              class="injected-svg"
              data-src="/assets/images/icons/facebook.svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M1.72081 14H4.59374V8.09799H7.18233L7.46667 5.16509H4.59374V3.68421C4.59374 3.27726 4.9153 2.94737 5.31197 2.94737H7.46667V0H5.31197C3.32863 0 1.72081 1.64948 1.72081 3.68421V5.16509H0.284341L0 8.09799H1.72081V14Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="14"
              viewBox="0 0 10 14"
              fill="none"
              class="injected-svg"
              data-src="/assets/images/icons/twitter.svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.55556 0C2.41466 0 3.11111 0.696446 3.11111 1.55556V3.88889H7.77778C8.63689 3.88889 9.33333 4.58533 9.33333 5.44444C9.33333 6.30355 8.63689 7 7.77778 7H3.11111V8.55556C3.11111 9.84422 4.15578 10.8889 5.44444 10.8889H7.77778C8.63689 10.8889 9.33333 11.5853 9.33333 12.4444C9.33333 13.3036 8.63689 14 7.77778 14H5.44444C2.43756 14 0 11.5624 0 8.55556V1.55556C0 0.696446 0.696446 0 1.55556 0Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="11"
              viewBox="0 0 15 11"
              fill="none"
              class="injected-svg"
              data-src="/assets/images/icons/youtube.svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.25 1.5H12.75C13.1642 1.5 13.5 1.83579 13.5 2.25V8.25C13.5 8.66421 13.1642 9 12.75 9H2.25C1.83579 9 1.5 8.66421 1.5 8.25V2.25C1.5 1.83579 1.83579 1.5 2.25 1.5ZM0 2.25C0 1.00736 1.00736 0 2.25 0H12.75C13.9926 0 15 1.00736 15 2.25V8.25C15 9.49264 13.9926 10.5 12.75 10.5H2.25C1.00736 10.5 0 9.49264 0 8.25V2.25ZM6 3L9 5.25L6 7.5V3Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              class="injected-svg"
              data-src="/assets/images/icons/google.svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M2.8 7C2.8 9.3196 4.6804 11.2 7 11.2C8.82871 11.2 10.3844 10.0313 10.961 8.4H7V5.6H13.8633V8.4H13.86C13.2114 11.5951 10.3865 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C9.41148 0 11.5382 1.2194 12.7971 3.07522L10.5028 4.6817C9.75071 3.54768 8.46267 2.8 7 2.8C4.6804 2.8 2.8 4.6804 2.8 7Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              class="injected-svg"
              data-src="/assets/images/icons/instagram.svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 3.81818C5.24273 3.81818 3.81818 5.24273 3.81818 7C3.81818 8.75727 5.24273 10.1818 7 10.1818C8.75727 10.1818 10.1818 8.75727 10.1818 7C10.1818 5.24273 8.75727 3.81818 7 3.81818ZM5.09091 7C5.09091 8.05436 5.94564 8.90909 7 8.90909C8.05436 8.90909 8.90909 8.05436 8.90909 7C8.90909 5.94564 8.05436 5.09091 7 5.09091C5.94564 5.09091 5.09091 5.94564 5.09091 7Z"
                fill="white"
              ></path>
              <path
                d="M10.8182 2.54545C10.4667 2.54545 10.1818 2.83036 10.1818 3.18182C10.1818 3.53327 10.4667 3.81818 10.8182 3.81818C11.1696 3.81818 11.4545 3.53327 11.4545 3.18182C11.4545 2.83036 11.1696 2.54545 10.8182 2.54545Z"
                fill="white"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.54545 0C1.13964 0 0 1.13964 0 2.54545V11.4545C0 12.8604 1.13964 14 2.54545 14H11.4545C12.8604 14 14 12.8604 14 11.4545V2.54545C14 1.13964 12.8604 0 11.4545 0H2.54545ZM11.4545 1.27273H2.54545C1.84255 1.27273 1.27273 1.84255 1.27273 2.54545V11.4545C1.27273 12.1575 1.84255 12.7273 2.54545 12.7273H11.4545C12.1575 12.7273 12.7273 12.1575 12.7273 11.4545V2.54545C12.7273 1.84255 12.1575 1.27273 11.4545 1.27273Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </span>
      </div>
    </div>
  );
}
export default Fotter;
