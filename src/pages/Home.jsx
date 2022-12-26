import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import HeroImg from "../images/heroImg.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section>
        <div className="flex justify-between">
          <div className="py-3 px-7 bg-charcoalBlack"></div>
          <div className="py-3 px-7 bg-forestGreen"></div>
        </div>
        <div
          className="relative flex flex-col md:flex-row text-center
                px-8 mx-auto mt-6 md:mt-10"
        >
          <div className="flex md:items-start items-center flex-col lg:ml-6 xl:ml-10 md:w-1/2">
            <h1
              className="max-w-md text-4xl font-medium lg:text-5xl
                    md:text-left justify-center"
            >
              Subscribe to FGN Saving Bond
            </h1>
            <p
              className="max-w-md text-darkGrayishBlue md:text-left
                md:text-xl mt-5"
            >
              Loan and get Paid with interest
            </p>
            <div
              className="flex flex-col px-[5rem] md:px-0 md:flex-row  
                mt-8 md:mt-20"
            >
              <Link
                to="/"
                className="flex py-4 px-2 md:px-6 text-white bg-forestGreen 
                    rounded hover:bg-brightRedLight hover:scale-105 transition ease-out
                    justify-center"
              >
                Get Started
                <AiOutlineArrowRight className="ml-2 mt-1" />
              </Link>
              <Link
                to="/"
                className="flex py-2 px-2 md:px-4 text-black bg-transparent 
                    rounded hover:bg-brightRedLight hover:text-forestGreen mt-2 md:mt-0
                    items-center justify-center text-lg hover:bg-white"
              >
                <FiPlayCircle className="mr-3 text-4xl" />
                See Video
              </Link>
            </div>
          </div>

          <div
            className="absolute lg:-right-2 top-[17rem] md:top-0 md:ml-[20rem] md:bottom-0  
            md:h-[20.5rem] md:w-[29.5rem] lg:w-[35rem] md:-right-0
            xl:w-[47rem] xl:right-10 xl:-top-[4.0rem]"
          >
            <img
              src={HeroImg}
              className="h-auto max-w-[100%] w-[55rem]"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
