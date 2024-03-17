import React from "react";

const DynamicRoute = ({ params }) => {
  return <div>{params.id}</div>;
};

export default DynamicRoute;
