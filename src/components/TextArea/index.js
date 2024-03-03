import React from "react";

const Textarea = ({
  label = "",
  name = "",
  placeholder = "",
  value = "",
  onChange = {},
}) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        cols="30"
        rows="4"
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
      />
    </>
  );
};

export default Textarea;
