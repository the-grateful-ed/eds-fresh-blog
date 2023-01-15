import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 p-4 shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          href="/"
          className="mb-4 flex items-center sm:mb-0"
        >
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white transition delay-150 duration-300 ease-in-out hover:font-bold hover:text-gray-100 md:text-3xl lg:text-4xl">
            edndacomputer
          </h1>
        </Link>
        <ul className="mb-6 flex flex-wrap items-center space-x-4 text-sm lowercase  text-white hover:text-gray-100 sm:mb-0">
          <li>
            <Link
              href="#"
              className="mr-4 md:mr-6 "
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="mr-4 md:mr-6"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="mr-4 md:mr-6"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="mr-4 md:mr-6 "
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-100 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-50 sm:text-center">
        © 2022{" "}
        <a
          href="https://flowbite.com/"
          className="hover:text-purple-500"
        >
          edndacomputer™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
