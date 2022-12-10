import React from "react";

const Services = () => {
  return (
    <div id="Services">
      <div
        id={"Home"}
        className={
          "px-4 sm:px-20 bg-hero bg-no-repeat bg-cover bg-center bg-fixed mb-8 sm:mb-24  mt-0 sm:mt-16 "
        }
      >
        <div className="container mx-auto text-white font-nunito flex  h-full  place-content-center flex-col content-center text-left gap-2">
          <h2 className="container mx-auto font-nunito flex text-center h-full  place-content-center flex-col content-center text-left gap-2 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our services
          </h2>
        </div>
      </div>

      <div className="container px-4 sm:px-0 mx-auto text-white font-nunito flex  place-content-center gap-8 sm:gap-20 flex-wrap">
        <div className="w-full transition ease-in-out duration-300 hover:scale-100 sm:hover:scale-110 max-w-sm p-4 bg-black text-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-baseline place-content-center text-center text-gray-50 dark:text-white">
            <span className="text-lg mt-2 sm:mt-0 sm:text-3xl text-center  font-extrabold tracking-tight">
              Education & Strategy
            </span>
          </div>
          <ul role="list" className="space-y-5 mt-4 sm:my-7 ">
            <li className="flex flex-col gap-1">
              <span className="text-sm sm:text-base font-normal leading-tight text-gray-200 dark:text-gray-400">
                We are here to help you create new forms of consumer engagement, experience and insights, understand the possibilities that blockchain presents and how to effectively leverage them.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full transition ease-in-out duration-300 hover:scale-100 sm:hover:scale-110 max-w-sm p-4 bg-black text-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-baseline text-gray-50 dark:text-white place-content-center">
            <span className="text-lg mt-2 sm:mt-0 sm:text-3xl text-center  font-extrabold tracking-tight">
              Software Development
            </span>
          </div>
          <ul role="list" className="space-y-5 mt-4 sm:my-7 ">
            <li className="flex flex-col gap-1">
              <span className="text-sm sm:text-base font-normal leading-tight text-gray-200 dark:text-gray-400">
                Our team is dedicated to providing the best solutions and services to our clients and helping them succeed in the blockchain space.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
