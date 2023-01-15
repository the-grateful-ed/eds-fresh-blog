import React from "react";
import Button from "./atoms/Button";
import { BsDiscord, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="rounded-t-lg bg-blue-500">
      <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:py-8 md:px-8 lg:py-12">
        <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-6 lg:flex-row">
          <div className="flex flex-col justify-between md:justify-around xl:w-1/3">
            <div className="sm:text-center lg:py-12 lg:text-left xl:py-24">
              <h1 className="mx-auto mb-4 max-w-lg  text-justify text-4xl font-extrabold leading-none tracking-tight text-white md:max-w-none ">
                Watch me build the future of the internet,
                <span className="text-6xl text-blue-200"> I am ed, </span> check
                out what I am up to
                <span className="text-2xl">
                  and take a peek into the genus mind of a web 3 / blockchain /
                  computer developer!
                </span>
              </h1>
              <p className="text-justify text-lg font-normal text-gray-200 lg:text-xl">
                So, this is my personal place on the internet where I can show
                off the latest and greatest things I am doing. I will be a fun
                ride, I will gaurentee that right now. Stick around, check me
                out and enjoy!!
              </p>
              <div className="flex w-full flex-col gap-2.5 pt-2 sm:flex-row sm:justify-center lg:justify-start">
                <Button
                  color="primary"
                  className="w-full border-2 border-gray-200"
                >
                  Whats New
                </Button>
                <Button color="primary">Contact!</Button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 sm:mt-16 lg:justify-start">
              <span className="text-2xl font-semibold uppercase tracking-widest text-gray-50 sm:text-base">
                Social
              </span>
              <span className="h-px w-12 bg-gray-50"></span>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="hover:white hover:white text-2xl text-gray-50 transition duration-100"
                >
                  <BsDiscord />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className=" hover:white hover:white text-2xl text-gray-50 transition duration-100"
                >
                  <BsTwitter />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="hover:white hover:white text-2xl text-gray-50 transition duration-100"
                >
                  <BsLinkedin />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="hover:white hover:white text-2xl text-gray-50 transition duration-100"
                >
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="h-48 overflow-hidden rounded-lg bg-gray-50  shadow-lg lg:h-auto xl:w-3/5">
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
