import React from "react";
import logo from "./Image/logo.svg";

function Search() {
  return (
    <div className=" p-2 my-2  w-full lg:flex lg:my-3 lg:flex-row lg:items-center justify-between bg-white">
      <div className="hidden lg:flex lg:justify-center  ms-10  bg-white ">
        <img src={logo} alt=""></img>
      </div>

      <div className="w-full rounded-l-3xl lg:flex justify-center items-center  border-2   border-gray-200 text-gray-600 text-sm rounded-3xl lg:w-2/3 lg:ms-5">
        <form className="flex  w-full  ">
          <label htmlfor="simple-search" className="sr-only ">
            Search
          </label>
          <div className="relative w-full flex  ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlnsXlink="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              // className="  rounded-l-3xl pr-96  block  pl-10 p-2.5  dark:bg-gray-50 dark:border-gray-50 dark:placeholder-gray-200 dark:text-white bg-white active:outline-red-600 "
              className="p-3 ms-7 rounded-full md:ms-7 lg:p-2.5 lg:pr-96  lg:block lg:ms-1 lg:pl-10 lg:dark:bg-gray-50 lg:dark:border-gray-50 lg:placeholder-gray-200 lg:drak:text-white  active:outline-red-600 lg:w-full bg-white lg:border-r lg:rounded-r-none border-gray-200"
              placeholder="Search and hit enter.."
              // required
            ></input>
         
            <div className="hidden lg:flex justify-end lg:mr-4 ">
              <select
                name="language"
                id="language"
                className="rounded-r-3xl bg-white flex text-base text-gray-600"
              >
                <option value="Fashion">All Categories</option>
                <option value="Electronics">Car</option>
                <option value="Bikes">Cloth</option>
                <option value="Home and Garden">Electronic </option>
                <option value="gifts">Laptop</option>
                <option value="Music">Desktop</option>
                <option value="Health and Beauty">Camera</option>
                <option value="Pets">Toys</option>
                {/* <option value="java" selected></option> */}
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex w-1/6 lg:justify-center gap-8 ">
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className="injected-svg"
          data-src="/assets/images/icons/user.svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9441 9.62492C15.9441 10.2953 15.6778 10.9383 15.2037 11.4123C14.7297 11.8864 14.0868 12.1527 13.4163 12.1527C12.7459 12.1527 12.103 11.8864 11.6289 11.4123C11.1549 10.9383 10.8886 10.2953 10.8886 9.62492C10.8886 8.95451 11.1549 8.31156 11.6289 7.83751C12.103 7.36346 12.7459 7.09714 13.4163 7.09714C14.0868 7.09714 14.7297 7.36346 15.2037 7.83751C15.6778 8.31156 15.9441 8.95451 15.9441 9.62492ZM13.4163 13.4166C14.422 13.4166 15.3864 13.0171 16.0975 12.306C16.8085 11.595 17.208 10.6305 17.208 9.62492C17.208 8.61931 16.8085 7.65488 16.0975 6.94381C15.3864 6.23273 14.422 5.83325 13.4163 5.83325C12.4107 5.83325 11.4463 6.23273 10.7352 6.94381C10.0242 7.65488 9.62467 8.61931 9.62467 9.62492C9.62467 10.6305 10.0242 11.595 10.7352 12.306C11.4463 13.0171 12.4107 13.4166 13.4163 13.4166ZM20.9997 19.736C20.9997 20.9999 19.7358 20.9999 19.7358 20.9999H7.0969C7.0969 20.9999 5.83301 20.9999 5.83301 19.736C5.83301 18.4721 7.0969 14.6805 13.4163 14.6805C19.7358 14.6805 20.9997 18.4721 20.9997 19.736ZM19.7358 19.731C19.7345 19.4201 19.5411 18.4848 18.6842 17.6279C17.8602 16.8038 16.3094 15.9444 13.4163 15.9444C10.522 15.9444 8.97251 16.8038 8.14845 17.6279C7.29154 18.4848 7.09942 19.4201 7.0969 19.731H19.7358Z"
            fill="#4B566B"
          ></path>
        </svg>
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="injected-svg "
          data-src="/assets/images/icons/bag.svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M12 0.75C10.8066 0.75 9.66196 1.22411 8.81805 2.06802C7.97414 2.91193 7.50003 4.05653 7.50003 5.25V6H6.87753C6.24612 5.99934 5.63878 6.24222 5.18194 6.6781C4.72511 7.11398 4.45399 7.70925 4.42503 8.34L3.83253 20.6775C3.81734 21.0093 3.86949 21.3407 3.98582 21.6517C4.10216 21.9628 4.28028 22.2471 4.50944 22.4875C4.7386 22.7278 5.01407 22.9193 5.31923 23.0504C5.62439 23.1814 5.95292 23.2493 6.28503 23.25H17.715C18.0471 23.2493 18.3757 23.1814 18.6808 23.0504C18.986 22.9193 19.2615 22.7278 19.4906 22.4875C19.7198 22.2471 19.8979 21.9628 20.0142 21.6517C20.1306 21.3407 20.1827 21.0093 20.1675 20.6775L19.575 8.34C19.5461 7.70925 19.2749 7.11398 18.8181 6.6781C18.3613 6.24222 17.7539 5.99934 17.1225 6H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75V0.75ZM9.00003 5.25C9.00003 4.45435 9.3161 3.69129 9.87871 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25C12.7957 2.25 13.5587 2.56607 14.1213 3.12868C14.684 3.69129 15 4.45435 15 5.25V6H9.00003V5.25ZM18.075 8.4075L18.6675 20.7525C18.6722 20.8815 18.6515 21.0102 18.6064 21.1311C18.5614 21.2521 18.493 21.363 18.405 21.4575C18.3153 21.5497 18.208 21.623 18.0895 21.6733C17.971 21.7235 17.8437 21.7496 17.715 21.75H6.28503C6.15635 21.7496 6.02904 21.7235 5.91056 21.6733C5.79208 21.623 5.68481 21.5497 5.59503 21.4575C5.50711 21.363 5.43867 21.2521 5.39363 21.1311C5.34859 21.0102 5.32783 20.8815 5.33253 20.7525L5.92503 8.4075C5.93661 8.16276 6.04204 7.9319 6.21943 7.76289C6.39682 7.59388 6.63252 7.49973 6.87753 7.5H17.1225C17.3675 7.49973 17.6032 7.59388 17.7806 7.76289C17.958 7.9319 18.0635 8.16276 18.075 8.4075V8.4075Z"
            fill="#395589"
          ></path>
          <path
            d="M8.52002 10.8925C8.93423 10.8925 9.27002 10.5567 9.27002 10.1425C9.27002 9.72824 8.93423 9.39246 8.52002 9.39246C8.10581 9.39246 7.77002 9.72824 7.77002 10.1425C7.77002 10.5567 8.10581 10.8925 8.52002 10.8925Z"
            fill="#395589"
          ></path>
          <path
            d="M15.4801 10.8925C15.8943 10.8925 16.2301 10.5567 16.2301 10.1425C16.2301 9.72824 15.8943 9.39246 15.4801 9.39246C15.0659 9.39246 14.7301 9.72824 14.7301 10.1425C14.7301 10.5567 15.0659 10.8925 15.4801 10.8925Z"
            fill="#395589"
          ></path>
        </svg>
      </div>
    </div>
  );
}
export default Search;
