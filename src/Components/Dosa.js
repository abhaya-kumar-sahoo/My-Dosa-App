import React,{useState} from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import "./Dosa.css";
import MenuItems from "./MenuItems";
import "../utils/css/Gloablcss.css";

const Dosa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OpenSlider = () => {
    setIsOpen(true);
  };
  const CloseSlider = () => {
    setIsOpen(false);
  };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-between p-2 creamcolor">
        <div className="flex space-x-2 text-3xl xl:text-4xl">
          <h1 className="circle circle-text  mb-4 xl:w-8 xl:h-8 xl:mb-6 mobile-hidden">
            x
          </h1>
          <div className="flex web-hidden">
        <AiOutlineMenu color="red" size="0.7em" className="mt-2 ml-[-9px]" onClick={OpenSlider}/>
      </div>
          <h1 className="text-orange-500 font-bold xl:text-xl max-sm:text-[18px]">DOSA</h1>
          <h1 className="text-green-600 font-bold xl:text-xl max-sm:text-[18px]">HOUSE.</h1>
        </div>
        <div className="hidden xl:flex space-x-4 text-lg text-black mt-[-20px]">
          <h1 className="">Download Our App</h1>
          <h1 className="">Our Locations</h1>
          <h1 className="">Timings</h1>
          <h1 className="">Contact us</h1>
        </div>
      </div>
      <div className="flex justify-around ml-[-17vh]">
        <form className="form max-sm:ml-14">
          <div className="flex space-x-4 input-group">
            <div className="relative">
              <AiOutlineSearch
                className="absolute max-sm:ml-16 ml-2 mt-4 left-0"
                color="gray"
              />
              <input
                type="text"
                style={{ paddingLeft: 25 }}
                className="input searchdown"
              />
              <label className="placeholder max-sm:ml-16">Search Item</label>
            </div>
          </div>
        </form>
      </div>
      <MenuItems />
    </div>
  );
};

export default Dosa;
