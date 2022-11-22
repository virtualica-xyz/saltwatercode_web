import React, { useState } from "react";
// @ts-ignore
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import Link from "next/link";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(true);
  return (
    <nav className="bg-black px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0  border-gray-200 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <AnchorLink offset={() => 140} href="#Home">
          <span className="self-center font-press-start text-white text-m font-semibold whitespace-nowrap dark:text-white">
            saltwatercode
          </span>
        </AnchorLink>
        <div className="flex h-max place-content-center place-items-center md:order-2 gap-0 sm:gap-4 ">
          <Link href="https://twitter.com/saltwatercode" target="_blank">
            <img
              src="./mdi_twitter.svg"
              className="h-6 opacity-75 hover:opacity-100 mr-2 sm:mr-0"
              alt="Flowbite Logo"
            />
          </Link>

          <Link
            href="https://www.linkedin.com/company/87407792"
            target="_blank"
          >
            <img
              src="/linkedin.svg"
              className="h-6 opacity-75 hover:opacity-100 mr-2 sm:mr-0"
              alt="Flowbite Logo"
            />
          </Link>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            menuToggle && "hidden"
          }  w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            <li onClick={() => setMenuToggle(true)}>
              <AnchorLink offset={() => 140} href="#Home">
                <p className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:text-white md:hover:bg-transparent  md:p-0 ">
                  Home
                </p>
              </AnchorLink>
            </li>
            <li onClick={() => setMenuToggle(true)}>
              <AnchorLink offset={() => 140} href="#Services">
                <p className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:text-white md:hover:bg-transparent  md:p-0 ">
                  Services
                </p>
              </AnchorLink>
            </li>
            <li onClick={() => setMenuToggle(true)}>
              <AnchorLink offset={() => 140} href="#Contact">
                <p className="block py-2 pl-3 pr-4 text-black rounded md:hover:bg-transparent  md:p-0 ">
                  Contact
                </p>
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
