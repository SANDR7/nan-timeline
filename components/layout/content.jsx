import React from "react";
import BackButton from "../functional/BackButton";
import Footer from "./footer";
import Header from "./header";

const Content = ({ children }) => {
  return (
    <>
      <Header />
      <BackButton />
      <main className="grid grid-cols-6">
        <div className="col-span-4 lg:w-9/12">{children}</div>
        {/* <Graphic/> */}
        <p>fancy graphic goes here</p>
      </main>
      <Footer />
    </>
  );
};

export default Content;
