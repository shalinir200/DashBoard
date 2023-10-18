import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Graph from "./Graph";

const OverView = () => {
  return (
    <div>
      <div className="w-full flex justify-center   p-5 gap-3 ">
        <div className="w-[70%] rounded-lg  bg-white p-2">
          <div className="flex justify-between    text-sm ">
            <h2>
              <h1>OverView</h1>
              <h1 className="text-gray-400 font-normal">Monthly</h1>
            </h2>
            <div className="flex items-center gap-1 text-gray-700 font-normal">
              Quaterly <FaAngleDown />
            </div>
          </div>
          <Graph/>
        </div>
        <div className="bg-white p-5 w-[35%] rounded-lg h-full ">
            <div>
                <h1 className="font-bold">Customers</h1>
                <h1 className="text-gray-500 ">Customers that buy products</h1>
            </div>
          <div className="flex justify-center items-center">
          <div className=" relative w-[200px] h-[200px] border-[16px] rounded-full my-7 "> 
                <div className="relative bottom-2 right-3  w-[200px] h-[200px]   border-l-transparent border-t-transparent  border-[23px] border-blue-500  flex flex-col gap-1 justify-center items-center  rounded-full font-bold">
                <span className="font-semibold">65%</span>
                <h1 className="text-center font-normal"> Total New Customers</h1>
                </div>
                <div className="relative bottom-[222px] right-[13px]  w-[200px] h-[200px]  rotate-[-70deg] border-t-transparent border-l-transparent  border-b-transparent  border-[35px] border-rose-500  rounded-full">                
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
