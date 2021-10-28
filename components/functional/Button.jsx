import React from "react";
import Router from "next/router";

export const Button = ({ route, name = "button", border = false }) => {
  const Router = useRouter();
  return (
    <button
      onClick={() => Router.push(`/${route}`)}
      className={`${border ? "border" : ""}`}
    >
      {name}
    </button>
  );
};
