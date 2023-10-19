"use client";
import { useState } from "react";
import EnthuDropdown from "../components/EnthuDropdown";
import EnthuInput from "../components/EnthuInput";
import { EnthuDropdownLevelItems } from "../data/EnthuDropdownLevelData";
import { EnthuDropdownCategoryData } from "../data/EnthuDropdownCategoryData";
import { EnthuDropdownAgeData } from "../data/EnthuDropdownAgeData";

const EnthuDropdownBar = () => {
  const [selectedAge, setSelectedAge] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(0);

  return (
    <div className="flex gap-y-4 justify-between flex-wrap desktop:flex-nowrap w-full">
      <EnthuDropdown
        data={EnthuDropdownCategoryData}
        selectedValue={selectedCategory}
        onSelect={(item) => setSelectedCategory(item?.value)}
        dropdownTitle="Category"
      />
      <EnthuDropdown
        data={EnthuDropdownAgeData}
        selectedValue={selectedAge}
        onSelect={(item) => setSelectedAge(item?.value)}
        dropdownTitle="Age Group"
      />
      <EnthuDropdown
        data={EnthuDropdownLevelItems}
        selectedValue={selectedLevel}
        onSelect={(item) => setSelectedLevel(item?.value)}
        dropdownTitle="Levels"
      />
      <EnthuInput placeholder={20} inputTitle="Sessions" value={20} 
      inputBlockClass={` flex flex-col gap-[5px] desktop-lg:gap-[6px] enthu-input-dropdown `}
      inputClass={` flex justify-between items-center max-h-[38px] desktop-lg:max-h-[45px] border border-solid border-gray-300 bg-gray-100 relative px-4 py-3 rounded-lg  transition-all duration-[0.34s] cursor-pointer hover:border-secondary outline-none `}
      />
    </div>
  );
};

export default EnthuDropdownBar;
