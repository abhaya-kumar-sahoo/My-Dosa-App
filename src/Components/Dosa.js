import React, { useState } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import "./Dosa.css";
import "../utils/css/Gloablcss.css";
import { IoIosCall, IoMdCall } from "react-icons/io";
import { ModalComponent } from "./Modal";
import MenuItem from "./MenuItems";
import { MdLocationOn, MdLocationPin } from "react-icons/md";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import img from "../../src/oval.png";

const Dosa = () => {
  const [isOpen] = useState(false);
  const [DownloadOpen, setIsDownloadOpen] = useState(false);
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <div className="fixed w-screen">
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
              onClick={open}
            />
            <>
              <Modal
                opened={opened}
                centered
                onClose={close}
                className="my-custom-modal"
              >
                <div className="flex justify-center items-center relative h-[70vh]">
                  <div className="flex justify-center items-center w-40 h-[398px] z-0  browncolor rounded-full ">
                    <div className="  h-80 w-20 grid justify-around align-middle items-center ">
                      <div>
                        <MdLocationPin
                          size="2.5em"
                          className="flex ml-4"
                          color="red"
                        />
                        <h1 className="text-black font-bold text-lg">
                          Location
                        </h1>
                      </div>
                      <div>
                        <IoIosCall
                          size="2.5em"
                          className="flex ml-4"
                          color="green"
                        />
                        <h1 className="text-black font-bold ml-3 text-lg">
                          Call
                        </h1>
                      </div>
                      <div>
                        <img
                          src="menuuu.png"
                          alt="pic"
                          className="h-10 w-12 ml-2 "
                        />
                        <h1 className="text-black font-bold ml-3 text-lg">
                          Menu
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            </>
          </div>
          <h1 className="text-orange-500 font-bold xl:text-xl max-sm:text-[18px]">
            DOSA
          </h1>
          <h1 className="text-green-600 font-bold xl:text-xl max-sm:text-[18px]">
            HOUSE.
          </h1>
        </div>
        <div className="flex space-x-2 justify-end text-sm hidden sm:block">
          <div class=" dropdown inline-block relative">
            <button class=" creamcolor text-gray-700 font-semibold text-sm py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">Download Our App</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            <ul class="dropdown-menu absolute  creamcolor w-40 hidden text-black mt-4 ">
              <li className=" rounded-t flex items-center justify-center whitespace-no-wrap p-2">
                <img src="play.png" alt="" className="h-6 w-6" />
                <h1 class="text-[12px] ml-2">Play Store</h1>
              </li>
              <li className="rounded-t flex  items-center justify-center whitespace-no-wrap p-2">
                <img src="apple.png" alt="" className="h-6 w-6" />

                <h1 class="text-[12px] ml-2">App Store</h1>
              </li>
            </ul>
          </div>
          <div class=" dropdown inline-block relative">
            <button class=" creamcolor text-gray-700 font-semibold text-sm py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">Our location</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="dropdown-menu absolute hidden text-black  mt-4">
              <li class="">
                <h1 class="flex rounded-t creamcolor  h-10 w-40 p-1  items-center justify-center text-[12px]  whitespace-no-wrap">
                  <MdLocationOn size="1.5em" color="green" />
                  Sector 22
                </h1>
                <h1 class="flex rounded-t creamcolor  h-10 w-40 p-1  items-center justify-center text-[12px]  whitespace-no-wrap">
                  <MdLocationOn size="1.5em" color="green" />
                  Sector 22
                </h1>
              </li>
            </ul>
          </div>
          <div class=" dropdown inline-block relative">
            <button class=" creamcolor text-gray-700 font-semibold text-sm py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">Timings</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="dropdown-menu w-52 px-2 absolute creamcolor hidden text-black mt-4">
              <li class="flex align-middle items-center justify-start p-1">
                <AiOutlineClockCircle color="green" size="1em" className="" />
                <h1 className="text-[12px] ml-2 font-medium ">
                  Mon-Fri (8:00am to 9:00pm)
                </h1>
              </li>
              <li class="flex align-middle items-center justify-start p-1">
                <AiOutlineClockCircle color="green" size="1em" className="" />
                <h1 className="text-[12px] ml-2 font-medium ">
                  Sat & Sun Closed
                </h1>
              </li>
            </ul>
          </div>

          <div class=" dropdown inline-block relative">
            <button class=" creamcolor text-gray-700 font-semibold text-sm py-2 px-4 rounded inline-flex items-center">
              <span class="mr-1">Contact Us</span>
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul class="dropdown-menu absolute right-0 w-52 creamcolor hidden text-black mt-4">
              <li class="flex align-middle items-center justify-start p-1">
                <IoMdCall color="green" size="1.5em" className="" />
                <h1 className="text-[12px] ml-2 font-medium">7888925456</h1>
              </li>
              <li class="flex align-middle items-center justify-start p-1">
                <AiOutlineMail color="skyblue" size="1.2em" className="" />
                <h1 className="text-[12px] ml-2 font-medium">
                  example@gmail.com
                </h1>
              </li>
            </ul>
          </div>
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
                      <img
                        src="play.png"
                        alt="pic"
                        className="w-fit h-fit"
                      ></img>
                    </div>
                    <div className="flex justify-center items-center bg-slate-100 shadow-orange-500 rounded-xl shadow-md w-12 h-12 max-w-[360px] p-1.5 sm:max-w-none sm:w-16 sm:h-16">
                      <img
                        src="apple.png"
                        alt="pic"
                        className="w-fit h-fit"
                      ></img>
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

      <MenuItem />
    </div>
  );
};

export default Dosa;
