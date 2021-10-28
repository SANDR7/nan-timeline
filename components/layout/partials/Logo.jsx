import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image height={80} width={120} src="/Logo.svg" alt="" />
    </div>
  );
};

export default Logo;
