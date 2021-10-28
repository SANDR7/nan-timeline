import React from "react";

const MainTitle = ({ title = "De status van je project op één tijdlijn" }) => {
  return <h2 className="font-bold text-6xl my-4 font-montserrat">{title}</h2>;
};

export default MainTitle;
