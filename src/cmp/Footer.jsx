import React from "react";
import style from "../cmp/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.context}>
      <div className={style.right2}>
        <p>
          This web application contains information about characters from Marvel
          Cinematic Universe, all the data retrived from the public domain
          database, Thanks for visiting!
          <br />
          <br />
          Build with Love, Ankit D.
          <br />
          <br />
        </p>
      </div>
      <div className={style.box}>
        <div className={style.left}>
          <a href="#">Sony Pictures Pvt. Ltd.</a>
          <a href="#">Marvel Official Page</a>
          <a href="#">New Press Releases</a>
          <a href="#">Budget & Grosses</a>
          <a href="#">Credits & Honours</a>
        </div>
        {/* <div className={style.right}>
          <a href="#">Terms of use</a>
          <a href="#">Privacy and cookies</a>
          <a href="#">Troubleshooting</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
