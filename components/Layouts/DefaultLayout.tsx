import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

// const Header = dynamic((): Promise<any> => import("./Header"), {
//   ssr: false,
// });

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
function dynamic(arg0: () => Promise<any>, arg1: { ssr: boolean }) {
  throw new Error("Function not implemented.");
}
