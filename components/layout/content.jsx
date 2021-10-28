import React from "react";
import Footer from "./footer";
import Header from "./header";

const Content = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Content;
