"use client";
import Image from "next/image";
import React, { useState } from "react";
import IconChevrondown from "../../public/images/icons/icon-chevron-down.svg";

const EnthuDropdown = ({
  data,
  selectedValue,
  onSelect,
  customClass,
  dropdownTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    onSelect(item);
    toggleDropdown();
  };

  return (
    <div className="flex flex-col enthu-dropdowns gap-y-[6px]">
      <span className="text-gray-600 text-sm block">{dropdownTitle}</span>
      <div
        className={`enthu-dropdown relative w-full ${
          customClass ? customClass : ""
        }`}
      >
        <div
          className="enthu-dropdown__selected-item flex justify-between items-center max-h-[38px] desktop-lg:max-h-[45px] border border-solid border-gray-300 bg-gray-100 relative px-[14px] py-3 rounded-lg w-full 
        transition-all duration-[0.34s] cursor-pointer hover:border-secondary"
          onClick={toggleDropdown}
        >
          <span className="enthu-dropdown__select-text text-sm font-medium text-black w-full text-ellipsis overflow-hidden whitespace-nowrap">
            {data.find((item) => item.value === selectedValue)?.label}
          </span>
          <span className="">
            <Image
              src={IconChevrondown}
              width={14}
              height={14}
              alt=""
              // style={{ width: "100%", height: "100%" }}
            />
          </span>
        </div>
        {isOpen && (
          <ul className="enthu-dropdown__dropdown-list absolute rounded-lg border border-solid border-gray-300 w-full top-8 desktop-lg:top-10 z-20">
            {data.map((item) => (
              <li
                className="px-3 py-2 desktop-lg:px-4 desktop-lg:py-3 text-black text-sm border-b border-solid border-gray-300 bg-gray-100 last-of-type:border-0 last-of-type:rounded-b-[7px] first-of-type:rounded-t-[7px] hover:bg-gray-200 transition-all duration-[0.3s] cursor-pointer"
                key={item.value}
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EnthuDropdown;
