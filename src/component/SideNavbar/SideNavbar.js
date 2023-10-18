import React from "react";
import { TbCircleKey, TbSettings2 } from "react-icons/tb";
import { BiCube, BiSolidOffer, BiHelpCircle } from "react-icons/bi";
import { LuUserSquare2 } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import {
  MdOutlinePriceChange,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import person from "../../img/person.jpg";

const SideNavbar = () => {
  const nav = [
    {
      id: 2,
      title: "Product",
      icon: <BiCube />,
    },
    {
      id: 3,
      title: "User",
      icon: <LuUserSquare2 />,
    },
    {
      id: 3,
      title: "Income",
      icon: <MdOutlinePriceChange />,
    },
    {
      id: 5,
      title: "Promote",
      icon: <BiSolidOffer />,
    },
    {
      id: 6,
      title: "Help",
      icon: <BiHelpCircle />,
    },
  ];

  return (
    <div className="bg-[#040440] fixed top-0 left-0 lg:w-[25%] h-full text-gray-200">
      <div className="flex p-4 text-xl gap-2 items-center">
        <TbSettings2 />
        <h1>Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 place-items-center my-2 p-3">
        <div className="flex items-center gap-3 p-1 pl-3 bg-[#2d2d69] w-full rounded-lg">
          <TbCircleKey />
          Dashboard
          <div></div>
        </div>
        {nav.map((item) => (
          <div
            className="flex items-center justify-between gap-3 p-1 pl-3  text-gray-400 w-full rounded-lg"
            key={item.id}
          >
            <div className="flex justify-center items-center gap-2 ">
              <h1 className="text-lg"> {item.icon}</h1>
              {item.title}
            </div>
            <div>
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        ))}
      </div>

      {/* profile */}

      <div className="flex   fixed bottom-8 justify-between  w-[24%] items-center  gap-4  bg-[#2d2d69] rounded-lg p-2 ml-1   ">
        <div className="flex justify-center items-center gap-3">
          <img
            src={person}
            alt="profile"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <div>
            <h1 className="">Evano</h1>
            <h1 className="font-light text-sm text-gray-400">Project Manager</h1>
          </div>
        </div>
        <FaAngleDown />
      </div>
    </div>
  );
};

export default SideNavbar;
