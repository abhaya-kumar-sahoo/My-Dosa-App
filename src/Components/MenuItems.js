import React from "react";
import sectionData from "./SectionData";
import { AiOutlineRight } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

const MenuItems = () => {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/FoodItems");
  };

  return (
    <div className="scroll-container">
      {sectionData.map((item, index) => (
        <div key={index} onClick={navigateToPage}>
          <div className="flex justify-center mt-[-16px]"
          >
            <div className="flex items-center space-x-2 w-[396px] p-4 boxhover downbg">
              <img src={item.image} className="h-18 w-20 mt-2" alt="" />
              <div className="">
                <h1 className="text-black text-left text-sm font-semibold">
                  {item.title}
                </h1>
                <div className="flex items-center">
                  <h1 className="text-gray-400 text-left text-xs">
                    {item.description}
                  </h1>
                  <span className="icon-container">
                    <AiOutlineRight size={20} className="icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default MenuItems;
