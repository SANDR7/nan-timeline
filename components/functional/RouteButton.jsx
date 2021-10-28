import React from "react";
import { useRouter } from "next/router";

const RouteButton = ({ route, name = "button", border = false }) => {
  const Router = useRouter();
  const curr_route = Router.pathname;
  const next_route = route.toLowerCase();

  return (
    <button
      onClick={() => Router.push(`${next_route || curr_route}`)}
      title={name}
      className={`${border ? "custom-button-border" : "custom-button"} `}
    >
      {name !== "" ? name : "button"}
    </button>
  );
};

export default RouteButton;
