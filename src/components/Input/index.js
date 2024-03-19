import React from "react";

const Input = ({
  placeholder = "",
  type = "text",
  value = "",
  onChange = null,
  label = "",
  name = "",
  ...rest
}) => {
  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
        type={type}
        name={name}
        value={value}
        id={label}
        required
        {...rest}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default Input;
