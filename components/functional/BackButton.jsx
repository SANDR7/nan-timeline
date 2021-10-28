import React from "react";
import { useRouter } from "next/router";
import {capitalize} from '../../hooks/custom_methods'

const BackButton = ({ name = "back"}) => {
  const Router = useRouter();
  
  return (
    <button onClick={() => window.history.back()} className="custom-button-border">
      {capitalize(name)}
    </button>
  );
};

export default BackButton;
