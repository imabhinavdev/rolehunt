import React from "react";

const Input = ({
  placeholder = "",
  type = "text",
  value = "",
  onChange = {},
  label = "",
  name = "",
}) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
        type={type}
        name={name}
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
