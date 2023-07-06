import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Dosa.css";
import MenuItems from "./MenuItems";
import '../utils/css/Gloablcss.css'

const Dosa = () => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between p-2 creamcolor">
        <div className="flex space-x-2  text-2xl ">
          <h1 className="circle circle-text w-6 h-6 mb-2 sm:w-8 sm:h-8 sm:mb-4">
            x
          </h1>
          <h1 className="text-orange-500 font-bold sm:text-xl">DOSA</h1>
          <h1 className="text-green-600 font-bold sm:text-xl">HOUSE.</h1>
        </div>
        <div className="flex space-x-4 text-md text-black mt-[-20px]">
          <h1 className="">Download Our App</h1>
          <h1 className="">Our Locations</h1>
          <h1 className="">Timings</h1>
          <h1 className="">Contact us</h1>
        </div>
      </div>
  
    <div className="flex justify-around ml-[-40px]  ">
      <form className="form">
        <div className="flex space-x-4 input-group">
          <div className="relative">
            <AiOutlineSearch className="absolute  mt-4 left-0 ml-2" color="gray" />
            <input type="text" className="input " />
            <label className="placeholder">Search Item</label>
          </div>
        </div>
      </form>
    </div>
    <MenuItems/>
    </div>
  );
};

export default Dosa;
