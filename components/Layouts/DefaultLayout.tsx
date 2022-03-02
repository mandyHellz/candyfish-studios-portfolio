import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="max-w-page font-Montserrat font-normal text-white">
      <Header />
      <main className="max-w-menu mx-auto px-5">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
