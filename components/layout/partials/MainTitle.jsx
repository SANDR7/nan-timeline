import React from "react";

const MainTitle = ({ title = "De status van je project op één tijdlijn" }) => {
  return <h2 className="font-bold text-3xl my-4">{title}</h2>;
};

export default MainTitle;
