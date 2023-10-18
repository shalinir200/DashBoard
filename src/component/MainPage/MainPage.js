import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
import Detail from "../Detail/Detail";
import OverView from "../OverView/OverView";
const MainPage = () => {
  return (
    <div className=" absolute left-[25%] bg-[#f5f6f8] w-[75%] h-full ">
      <div className="flex justify-between items-center p-4">
        <div className="text-lg font-medium">
            <h1>Hello Shahrukh 👋 ,</h1>
        </div>
        <div>
           <h1 className="border-none bg-white flex justify-center rounded-lg shadow-lg items-center p-2 gap-2"><AiOutlineSearch className="text-gray-700"/><input type="text" className="border-none outline-none" placeholder="Search"/></h1>
        </div>
      </div>
      <div>
         <Detail/>
      </div>
      <div>
        <OverView/>
      </div>
    </div>
  );
};

export default MainPage;
