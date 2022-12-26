import React from "react";
import Logo from "../images/logo-2.png";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDown,
} from "react-icons/ai";

function Cart() {
  return (
    <section className="flex flex-col my-[2rem] gap-4 md:gap-6">
      <div
        className="flex flex-col md:flex-row justify-between items-center mx-[2.5rem] 
      md:h-[100px] h-[200px] py-2
      border border-forestGreen px-[1rem] rounded"
      >
        <div className="flex items-center gap-[1rem]">
          <input
            type="checkbox"
            className="w-[18px] h-5 lg:w-[22px] lg:h-6 border-0 
          rounded-md focus:ring-0 accent-forestGreen"
          />
          <img src={Logo} className="w-[4rem] lg:w-[4.7rem]" alt="" />
          <p className="font-bold text-base lg:text-2xl w-[11.5rem] lg:w-[22rem]">
            730 Days Savings Bond
          </p>
        </div>
        <div className="flex gap-1 lg:gap-3 lg:-ml-[4rem] xl:-ml-[15rem]">
          <button
            className="border text-forestGreen text-xs font-semibold 
          border-forestGreen lg:text-base xl:text-xl
           rounded p-1"
          >
            Automatic
          </button>
          <button
            className="rounded p-1 font-semibold text-red-700
          text-xs lg:text-base xl:text-xl"
          >
            Delete
          </button>
        </div>
        <div className="flex flex-col h-[4rem] w-[12rem]">
          <p>Value(₦)</p>
          <div
            className="flex items-center justify-between h-[3rem] w-[12rem] border border-black
          rounded"
          >
            <p className="ml-2 font-semibold">300,000.00</p>
            <div className="flex items-center p-2">
              <p className="mr-2">
                <AiOutlinePlusCircle />
              </p>
              <p className="text-sm mr-2">01</p>
              <p className="mr-0">
                <AiOutlineMinusCircle />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center mx-[2.5rem] 
      md:h-[100px] h-[200px] py-2
      border border-forestGreen px-[1rem] rounded"
      >
        <div className="flex items-center gap-[1rem]">
          <input
            type="checkbox"
            className="w-[18px] h-5 lg:w-[22px] lg:h-6 border-0 rounded-md 
          focus:ring-0 accent-forestGreen"
          />
          <img src={Logo} className="w-[4rem] lg:w-[4.7rem]" alt="" />
          <p className="font-bold text-base lg:text-2xl w-[11.5rem] lg:w-[22rem]">
            730 Days Savings Bond
          </p>
        </div>
        <div className="flex gap-1 lg:gap-3 lg:-ml-[4rem] xl:-ml-[15rem]">
          <button
            className="border text-forestGreen text-xs font-semibold 
          border-forestGreen lg:text-base xl:text-xl
           rounded p-1"
          >
            Automatic
          </button>
          <button
            className="rounded p-1 font-semibold text-red-700
          text-xs lg:text-base xl:text-xl"
          >
            Delete
          </button>
        </div>
        <div className="flex  flex-col h-[4rem] w-[12rem]">
          <p>Value(₦)</p>
          <div
            className="flex items-center justify-between h-[3rem] w-[12rem] border border-black
          rounded"
          >
            <p className="ml-2 font-semibold">300,000.00</p>
            <div className="flex items-center p-2">
              <p className="mr-2">
                <AiOutlinePlusCircle />
              </p>
              <p className="text-sm mr-2">01</p>
              <p className="mr-0">
                <AiOutlineMinusCircle />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between h-[250px]
      md:h-[130px] mx-[2.5rem] border border-forestGreen"
      >
        <div className="flex flex-col my-3 ml-[1rem] md:ml-[3.5rem]">
          <div className="flex items-center">
            <p>Fees + Taxes</p>
            <p className="ml-2">
              <AiOutlineDown />
            </p>
            <div className="ml-[5rem]">₦2.09</div>
          </div>
          <div className="flex flex-col mt-8">
            <p>This is a 730 days Saving Bond,</p>
            <p>you have a fixed income</p>
          </div>
        </div>
        <div className="flex flex-col items-end mr-[1rem] my-3">
          <p>Total Buy</p>
          <p className="font-bold">₦600,000.00</p>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <button
          className="bg-forestGreen rounded mt-[1rem]
        w-[10rem] h-[3rem] md:mr-[2.5rem] text-white font-bold"
        >
          Check Out
        </button>
      </div>
    </section>
  );
}

export default Cart;
