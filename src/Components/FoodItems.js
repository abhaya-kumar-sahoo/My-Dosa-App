import React from "react";
import { IoMdCall } from "react-icons/io";
import { items_lists } from "../utils/css/dummydata/Carddata";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const FoodItems = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const navigateToPage = () => {
    navigate("/Dosa");
  };

  return (
    <div className="">
      <div className="flex flex-row items-center justify-between p-2 w-full creamcolor">
        <div className="flex space-x-2 text-3xl xl:text-4xl">
          <h1 className="circle circle-text  mb-4 xl:w-8 xl:h-8 xl:mb-6 mobile-hidden">
            x
          </h1>
          <div className="circcle xl-screen">
            <MdOutlineArrowBack
              color="white"
              size="0.8em"
              className="xl-screeen mobile-screen"
              onClick={navigateToPage}
            />
          </div>
          <h1 className="text-orange-500 mt-1 font-bold xl:text-xl max-sm:text-[18px]">
            DOSA
          </h1>
          <h1 className="text-green-600 mt-1 font-bold xl:text-xl max-sm:text-[18px]">
            HOUSE.
          </h1>
        </div>

        <div className="flex">
          <a href="tel:+919348557381">
            <IoMdCall
              className="mb-1 mr-4 max-sm:mr-4"
              color="green"
              size="1.6em"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" ">
          <div className="flex justify-between ">
            {items_lists.map((item) => (
              <div key={item.id}>
                <h1 className="flex font-bold text-style">{item.name}</h1>
              </div>
            ))}
            <button className="bg-orange-500 text-white rounded-full h-6 w-28 max-sm:mr-4  mt-4 text-xs xl:mr-4">
              Download Menu
            </button>
          </div>
          <div className="w-96 scroll-container-food">
            {items_lists[id - 1].map((item) => (
              <div
                key={item.id}
                className="flex bg-white justify-between my-4 px-6 py-4 border-b"
              >
                <div>
                  <h1 className="flex text-black text-sm "> {item.name}</h1>
                  <div className="flex text-black  text-[10px]">
                    <h1 className="text-gray-400 mt-1 max-sm:text-xs ">
                      Price:
                    </h1>
                    <h1 className="text-red-500 mt-1 max-sm:text-xs">
                      $ {item.price.tax + item.price.price}
                    </h1>
                    <div className="flex max-sm:text-xs">
                      <h1 className="text-gray-400 mt-1 ml-1 "> + T:</h1>
                      <h1 className="text-green-600 mt-1 ml-1">
                        ${item.price.tax}
                      </h1>
                    </div>
                  </div>
                </div>
                <button className="bg-red-200 h-7 w-16 mr-2 rounded-full text-red-500 text-xs ">
                  + ADD
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
