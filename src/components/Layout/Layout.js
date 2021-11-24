import { Fragment, useState } from "react";
import Header from "./Header";
import SVG from "../SVG";

const Layout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Fragment>
      <Header loggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
