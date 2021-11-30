import { Fragment } from "react";
import style from "./Layout.module.css";
import Header from "./Header";
import SVG from "./SVG";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <section className={style.section}>
        <div className={style["content-wrapper"]}>{children}</div>
        <div className={style["svg-wrapper"]}>
          <SVG />
        </div>
      </section>
    </Fragment>
  );
};

export default Layout;
