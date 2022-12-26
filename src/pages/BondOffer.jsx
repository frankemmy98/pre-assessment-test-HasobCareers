import React, { useRef, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { RiHeartLine } from "react-icons/ri";
import data from "../data/data";
import Logo from "../images/logo-2.png";
import { useGlobalContext } from "../context";

function BondOffer() {
  const { isLoggedin } = useGlobalContext();
  const [bondOffers, setBondOffers] = useState(data);
  const divRef = useRef(null);

  // scrolling to the left
  const handlePrevBtn = () => {
    divRef.current.scrollLeft -= 120;
  };

  // scrolling to the right
  const handleNextBtn = () => {
    divRef.current.scrollLeft += 180;
  };

  return (
    <section>
      {isLoggedin ? (
        // return this page when you click on signup button
        // from the Signup page
        <div
          className="flex justify-start items-center max-w-[90vw]
    flex-nowrap ml-[1.2rem] sm:ml-[2rem] scrolling-touch sm:max-w-[87.3vw]
    md:max-w-[91.5vw] lg:max-w-[92vw] lg:gap-0 xl:ml-[2rem] xl:max-w-[95vw]
    overflow-x-auto scrollbar-hide h-[450px] sm:gap-10 md:gap-4
    "
    // accessing the div element
          ref={divRef}
        >
          {bondOffers.map((bondOffer) => {
            const {
              id,
              title,
              due_date,
              minimum,
              percentage_Per_Year,
              interest_payment,
              opening,
              closing_date,
              settlement,
            } = bondOffer;

            return (
              <div key={id} className="ml-[1.1rem] sm:ml-[2.8rem] lg:ml-[2rem] 
              md:ml-[1.4rem] xl:ml-[1.1rem] rounded-lg">
                <div
                  className="py-3 px-[1rem] border-forestGreen border rounded-lg
              w-[19rem]"
                >
                  <div className="flex items-center justify-between">
                    <img src={Logo} alt="" className="w-[2.5rem]" />
                    <header
                      className="bg-babyBlue rounded-full 
                  py-1 px-2 text-xs ml-[4rem]"
                    >
                      FGN Savings Bond
                    </header>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-xl mt-4">{title}</p>
                    <p className="text-xs">Due {due_date}</p>
                  </div>
                  <div className="flex justify-between mt-2 mb-5">
                    <p className="text-xs">Minimum</p>
                    <p className="text-xs font-semibold">
                      ₦{minimum.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">% Per Year</p>
                    <p className="text-xs font-semibold">
                      {percentage_Per_Year}%
                    </p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">Interst Payment</p>
                    <p className="text-xs font-semibold">{interest_payment}</p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">Opening</p>
                    <p className="text-xs font-semibold">{opening}</p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">Closing Date</p>
                    <p className="text-xs font-semibold">{closing_date}</p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">Settlement</p>
                    <p className="text-xs font-semibold">{settlement}</p>
                  </div>
                  <div className="flex justify-end mt-[2.5rem]">
                    <button
                      className="flex items-center mr-3
                  justify-center py-3 px-10 bg-forestGreen
                  text-white rounded hover:bg-charcoalBlack"
                    >
                      Add to cart
                    </button>
                    <p
                      className="flex items-center
                   justify-center text-4xl"
                    >
                      <RiHeartLine />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            className="absolute -left-3 sm:-left-4 md:-left-5
            place-items-center top-[15rem] xl:top-[17rem] xl:-left-4"
            onClick={handlePrevBtn}
          >
            <FiChevronLeft className="text-5xl sm:text-7xl" />
          </button>

          <button
            className="absolute -right-3 sm:-right-4 place-items-center
            top-[15rem] md:-right-4 lg:right-0 xl:-right-4 xl:top-[17rem]"
            onClick={handleNextBtn}
          >
            <FiChevronRight className="text-5xl sm:text-7xl" />
          </button>
        </div>
      ) : (
        // return this page when you are logged out
        <div
          className="flex justify-start items-center whitespace-nowrap xl:max-w-[90vw]
    flex-nowrap max-w-[100vw] sm:max-w-[87.5vw] md:max-w-[93.5vw] md:ml-[1.5rem] lg:ml-[5rem] 
    sm:ml-[2rem] ml-[0.2rem] scrolling-touch lg:gap-[5rem] lg:max-w-[85vw] mt-7 xl:mt-0
    overflow-x-auto scrollbar-hide h-[450px] gap-[2rem] sm:gap-[3rem] md:gap-1
    "
    // accessing the div element
          ref={divRef}
        >
          {bondOffers.map((bondOffer) => {
            const {
              id,
              title,
              due_date,
              minimum,
              percentage_Per_Year,
              interest_payment,
              opening,
              closing_date,
              settlement,
            } = bondOffer;

            return (
              <div key={id} className="ml-[1.65rem] rounded-lg">
                <div
                  className="py-3 px-[1rem] border-forestGreen border rounded-lg
              w-[20rem]"
                >
                  <div className="flex items-center justify-between">
                    <img src={Logo} alt="" className="w-[2.5rem]" />
                    <header
                      className="bg-babyBlue rounded-full 
                  py-1 px-2 text-xs ml-[4rem]"
                    >
                      FGN Savings Bond
                    </header>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-xl mt-4">{title}</p>
                    <p className="text-xs">Due {due_date}</p>
                  </div>
                  <div className="flex justify-between mt-2 mb-5">
                    <p className="text-xs">Minimum</p>
                    <p className="text-xs font-semibold">
                      ₦{minimum.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">% Per Year</p>
                    <p className="text-xs font-semibold">
                      {percentage_Per_Year}%
                    </p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">Interst Payment</p>
                    <p className="text-xs font-semibold">{interest_payment}</p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">Opening</p>
                    <p className="text-xs font-semibold">{opening}</p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">Closing Date</p>
                    <p className="text-xs font-semibold">{closing_date}</p>
                  </div>
                  <div className="flex justify-between mb-5">
                    <p className="text-xs">Settlement</p>
                    <p className="text-xs font-semibold">{settlement}</p>
                  </div>
                  <div className="flex justify-end mt-[2.5rem]">
                    <button
                      className="flex items-center mr-3
                  justify-center py-3 px-10 bg-forestGreen
                  text-white rounded hover:bg-charcoalBlack"
                    >
                      Add to cart
                    </button>
                    <p
                      className="flex items-center
                   justify-center text-4xl"
                    >
                      <RiHeartLine />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            className="absolute -left-2 sm:-left-4 md:-left-5
            place-items-center top-[15rem] xl:top-[17rem] lg:left-0"
            onClick={handlePrevBtn}
          >
            <FiChevronLeft className="text-5xl sm:text-7xl" />
          </button>

          <button
            className="absolute -right-2 sm:-right-4 place-items-center
            top-[15rem] md:-right-5 lg:right-2 xl:top-[17rem]"
            onClick={handleNextBtn}
          >
            <FiChevronRight className="text-5xl sm:text-7xl" />
          </button>
        </div>
      )}
    </section>
  );
}

export default BondOffer;
