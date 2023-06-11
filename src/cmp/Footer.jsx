import React from "react";
import style from "../cmp/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.context}>
        <div className={style.right2}>
        <p>
        This web application contains information about characters from Marvel Cinematic Universe, all the data retrived from the public domain database, Thanks for visiting!
          <br/>
          Note : This web app is not compitable with small displays (as of June 20, 2023).
          <br/>
          <br/>
        Copyright 2023 - 2024, All right reserved
        <br/>
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
        <div className={style.right}>
          <a href="#">Terms of use</a>
          <a href="#">Privacy and cookies</a>
          <a href="#">Troubleshooting</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
