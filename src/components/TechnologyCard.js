import React from "react";

const TechnologyCard = (props) => {
  return (
    <div className="w-full  font-pt font-medium p-3 bg-white shadow-md rounded">
      <p>{props.technology}</p>
    </div>
  );
};

export default TechnologyCard;
