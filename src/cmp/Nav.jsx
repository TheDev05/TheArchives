import React from "react";
import style from "../cmp/Nav.module.css";

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <a href="#">தூக்கம் </a>
      </div>
      <div className={style.link}>
        <div className={style.Char}>
          <a href="#">Characters</a>
        </div>
        <div className={style.Blog}>
          <a href="#">Blog</a>
        </div>
        <div className={style.Gallery}>
          <a href="#">Gallery</a>
        </div>
        <div className={style.Contact}>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
