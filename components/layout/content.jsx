import React from "react";
import Footer from "./footer";
import Header from "./header";

const Content = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Content;
