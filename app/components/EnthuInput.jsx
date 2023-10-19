import React from "react";

const EnthuInput = ({ placeholder, inputTitle, value, inputBlockClass, inputClass }) => {
  return (
    <div className={`${inputBlockClass ? inputBlockClass : '' }`}>
      {inputTitle && (
        <span className="text-gray-600 text-sm block">{inputTitle}</span>
      )}

      <input
        className={`${inputClass ? inputClass : '' }`}
        type="text"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default EnthuInput;
