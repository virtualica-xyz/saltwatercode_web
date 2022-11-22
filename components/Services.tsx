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
        <div className="container mx-auto text-white font-press-start flex  h-full  place-content-center flex-col content-center text-left gap-2">
          <h2 className="container mx-auto font-press-start flex text-center h-full  place-content-center flex-col content-center text-left gap-2 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Our services :
          </h2>
        </div>
      </div>

      <div className="container px-4 sm:px-0 mx-auto text-white font-press-start flex  place-content-center gap-8 sm:gap-20 flex-wrap">
        <div className="w-full transition ease-in-out duration-300 hover:scale-100 sm:hover:scale-110 max-w-sm p-4 bg-black text-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-baseline place-content-center text-center text-gray-50 dark:text-white">
            <span className="text-lg mt-2 sm:mt-0 sm:text-3xl text-center  font-extrabold tracking-tight">
              Digital Assets
            </span>
          </div>
          <ul role="list" className="space-y-5 mt-4 sm:my-7 ">
            <li className="flex flex-col gap-1">
              <span className=" text-sm mb-2 sm:text-base font-normal text-gray-500 dark:text-gray-400">
                Planning your project in web3?
              </span>
              <span className="text-sm sm:text-base font-normal leading-tight text-gray-200 dark:text-gray-400">
                Ready to use, fully customizable, gas efficient erc721 & erc1155
                smart contracts (NFT&apos;s) plus client side web application
                (frontend), for you business
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full transition ease-in-out duration-300 hover:scale-100 sm:hover:scale-110 max-w-sm p-4 bg-black text-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-baseline text-gray-50 dark:text-white place-content-center">
            <span className="text-lg mt-2 sm:mt-0 sm:text-3xl text-center  font-extrabold tracking-tight">
              Traceability
            </span>
          </div>
          <ul role="list" className="space-y-5 mt-4 sm:my-7 ">
            <li className="flex flex-col gap-1">
              <span className=" text-sm mb-2 sm:text-base font-normal text-gray-500 dark:text-gray-400">
                Are you a manufacturer or wholesaler?
              </span>
              <span className="text-sm sm:text-base font-normal leading-tight text-gray-200 dark:text-gray-400">
                Custom solutions allowing you to track product supply chain in
                seconds, consumer behaviours & transactions. You can take a
                bottle of wine and see where it was manufactured and trace back
                all the ingredients to the vineyards
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
