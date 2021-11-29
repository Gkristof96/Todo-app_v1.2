import { Fragment } from "react";
import Header from "./Header";
import SVG from "../SVG";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <section>
        <div className='content-wrapper'>{children}</div>
        <div className='svg-wrapper'>
          <SVG />
        </div>
      </section>
    </Fragment>
  );
};

export default Layout;
