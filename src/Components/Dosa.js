import React, { useState } from "react";
import { AiOutlineClockCircle, AiOutlineMenu } from "react-icons/ai";
import "./Dosa.css";
import "../utils/css/Gloablcss.css";
import { IoMdCall } from "react-icons/io";
import { LuChevronRight } from "react-icons/lu";
import { LuChevronDown } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { Hr } from "./GlobalContent";
import { ModalComponent } from "./Modal";
import MenuItem from "./MenuItems";
const Dosa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [DownloadOpen, setIsDownloadOpen] = useState(false);

  const OpenSlider = () => {
    setIsOpen(true);
  };
  const CloseSlider = () => {
    setIsOpen(false);
  };
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="">
      <div
        className={`flex flex-row items-center justify-between p-2 w-full creamcolor ${
          isOpen ? "fixed" : ""
        }`}
      >
        <div className="flex space-x-2 text-3xl xl:text-4xl">
          <h1 className="circle circle-text  mb-4 xl:w-8 xl:h-8 xl:mb-6 mobile-hidden">
            x
          </h1>
          <div className="flex web-hidden">
            <AiOutlineMenu
              color="orange"
              size="0.6em"
              className="mt-[8px] ml-[-12px]"
              onClick={OpenSlider}
            />
          </div>
          <h1 className="text-orange-500 font-bold xl:text-xl max-sm:text-[18px]">
            DOSA
          </h1>
          <h1 className="text-green-600 font-bold xl:text-xl max-sm:text-[18px]">
            HOUSE.
          </h1>
        </div>
        <div className="hidden xl:flex space-x-4 text-sm text-black mr-3">
          <h1 className="">Download Our App</h1>
          <h1 className="">Our Locations</h1>
          <h1 className="">Timings</h1>
          <h1 className="">Contact us</h1>
        </div>
        <div className="flex web-hidden">
          <ModalComponent isOpen={DownloadOpen}>
            <div className="bg-transparent rounded-lg p-10 ">
              <div
                onClick={() => setIsDownloadOpen(false)}
                className="justify-between rounded-full"
              >
                <div className="grad  p-4 place-items-center justify-center align-middle text-center self-center rounded-lg">
                  <h1 className="font-semibold text-md text-white px-6 py-1">
                    Download Now
                  </h1>
                  <div className="flex p-4 justify-between ">
                    <div className="flex justify-center items-center bg-slate-100 shadow-orange-500 rounded-xl shadow-md max-w-[360px] w-12 h-12 sm:max-w-none p-1.5 sm:w-16 sm:h-16">
                      <img src="play.png" alt="pic" className="w-fit h-fit"></img>
                    </div>
                    <div className="flex justify-center items-center bg-slate-100 shadow-orange-500 rounded-xl shadow-md w-12 h-12 max-w-[360px] p-1.5 sm:max-w-none sm:w-16 sm:h-16">
                      <img src="apple.png" alt="pic" className="w-fit h-fit"></img>
                    </div>
                  </div>

                  <div className="place-items-center justify-center align-middle text-center self-center grid">
                    <button className="px-6 r-0 l-0 rounded-full text-white  bg-orange-400 mt-6 absolute">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ModalComponent>
          <button
            onClick={() => setIsDownloadOpen(true)}
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4) ,", text: "md" }}
            className="bg-orange-400 rounded-full text-xs px-1 py-1 text-white"
          >
            Download App
          </button>
          <a href="tel:+919348557381">
            <IoMdCall className="mb-1" color="green" size="1.4em" />
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="slide-panel-header p-2 bg-black">
          <h1
            onClick={CloseSlider}
            className="text-black font-semibold text-right text-lg mr-2 mt-2"
          >
            X
          </h1>
          <div className="flex justify-between items-center mt-4">
            <h1 className="font-semibold text-sm">Download our app</h1>
            {openDropdownIndex === 1 ? (
              <LuChevronDown
                color="black"
                size="1.1em"
                onClick={() => toggleDropdown(1)}
              ></LuChevronDown>
            ) : (
              <LuChevronRight
                size="1.1em"
                color="black"
                // src="down.png"
                alt=""
                onClick={() => toggleDropdown(1)}
              />
            )}
          </div>
          {openDropdownIndex === 1 && (
            <div className="flex space-x-6 mt-4">
              <img src="play.png" alt="pic" className="h-8 w-8"></img>
              <img src="apple.png" alt="pic" className="h-8 w-8"></img>
            </div>
          )}
          <Hr space={30} />
          <div className="flex justify-between items-center mt-2">
            <h1 className="font-semibold text-sm">Our locations</h1>
            {openDropdownIndex === 1 ? (
              <LuChevronDown
                color="black"
                size="1.1em"
                onClick={() => toggleDropdown(2)}
              ></LuChevronDown>
            ) : (
              <LuChevronRight
                size="1.1em"
                color="black"
                // src="down.png"
                alt=""
                onClick={() => toggleDropdown(2)}
              />
            )}
          </div>
          {openDropdownIndex === 2 && (
            <>
              <div className="flex space-x-2 text-xs mt-2">
                <img src="location.png" alt="pic" className="h-4 w-3"></img>
                <h1>Sector 22 Chandigarh</h1>
                <img
                  src="checkbox.png"
                  alt="pic"
                  className="h-3 w-3 mt-1"
                ></img>
              </div>
              <div className="flex space-x-2 text-xs mt-2">
                <img src="location.png" alt="" className="h-4 w-3"></img>
                <h1>Sector 16 Chandigarh</h1>
                <img
                  src="checkbox.png"
                  alt="pic"
                  className="h-3 w-3 mt-1"
                ></img>
              </div>
            </>
          )}
          <Hr space={30} />
          <div className="flex justify-between items-center mt-2">
            <h1 className="font-semibold text-sm">Our Timings</h1>
            {openDropdownIndex === 3 ? (
              <LuChevronDown
                color="black"
                size="1.1em"
                onClick={() => toggleDropdown(3)}
              ></LuChevronDown>
            ) : (
              <LuChevronRight
                size="1.1em"
                color="black"
                // src="down.png"
                alt=""
                onClick={() => toggleDropdown(3)}
              />
            )}
          </div>
          {openDropdownIndex === 3 && (
            <>
              <div className="flex space-x-2 text-xs mt-2">
                <AiOutlineClockCircle
                  src="location.png"
                  alt="pic"
                  color="orange"
                  className="h-5 w-4 "
                />
                <p className="text-xs">Mon to Sat (10:00 am to 8:00 pm)</p>
              </div>
              <div className="flex space-x-2 text-xs mt-2">
                <AiOutlineClockCircle
                  src="location.png"
                  alt=""
                  color="orange"
                  className="h-5 w-4"
                />
                <h1 className="text-xs">Sunday Closed</h1>
              </div>
            </>
          )}
          <Hr space={30} />
          <div className="flex justify-between items-center mt-2">
            <h1 className="font-semibold text-sm">Contact us</h1>
            {openDropdownIndex === 4 ? (
              <LuChevronDown
                color="black"
                size="1.1em"
                onClick={() => toggleDropdown(4)}
              ></LuChevronDown>
            ) : (
              <LuChevronRight
                size="1.1em"
                color="black"
                // src="down.png"
                alt=""
                onClick={() => toggleDropdown(4)}
              />
            )}
          </div>
          {openDropdownIndex === 4 && (
            <>
              <div className="flex space-x-1 text-xs mt-2">
                <IoMdCall color="green" size="1.3em" />
                <h1>+91 814602377</h1>
              </div>
              <div className="flex space-x-1 text-xs ">
                <MdOutlineMailOutline
                  size="1.2em"
                  className="mt-1"
                  color="#FFA337"
                />
                <h1 className="">example@gmail.com</h1>
              </div>
            </>
          )}
          <Hr space={30} />
        </div>
      )}
      <MenuItem />
    </div>
  );
};

export default Dosa;
