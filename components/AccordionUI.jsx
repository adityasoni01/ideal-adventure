import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex group cursor-pointer w-44 h-16 text-1xl  bg-custom-yellow  "
      >
        <div className="flex group cursor-pointer">
          <div className="text-black font-semibold ">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          {Index !== Id ? (
            <HiArrowCircleDown className="w-6 h-6 group-hover:text-orange-500 text-black" />
          ) : (
            <HiX className="w-6 h-6 group-hover:text-white text-black" />
          )}
        </div>
      </div>

      {Index === Id && (
        <div className="bg-custom-yellow mr-96  text-black w-full h-auto  rounded-md p-4 border-l-2 mb-2 ">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionUI;