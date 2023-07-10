import React from "react";
import sectionData from "./SectionData";

const MenuItems = () => {
  return (
    <div  className="scroll-container">
      {sectionData.map((item, index) => (
        <div key={index}>
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 w-[390px] p-4 boxhover downbg">
              <img src={item.image} className="h-18 w-20 mt-2 " alt="" />
              <div className="">
                <h1 className="text-black text-left text-sm font-semibold">
                  {item.title}
                </h1>
                <h1 className="text-gray-400 text-left text-xs">{item.description}</h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
