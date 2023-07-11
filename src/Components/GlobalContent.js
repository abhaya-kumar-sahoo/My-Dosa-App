import React from "react";

export const Hr = ({ space=20, width='100%' }) => {
  return (
    <div className="flex text-center justify-center items-center" style={{ height: space,  }}>
      <div style={{width:width}} className="w-full h-[0.3px] bg-slate-400 " />
    </div>
  );
};
