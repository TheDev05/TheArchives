import React from "react";
import style from "../cmp/Main.module.css";
import profile from "../assests/profile.jpg";

import image1 from "../assests/1.jpg";
import image2 from "../assests/2.jpg";
import image3 from "../assests/3.jpg";

import Nav from "../cmp/Nav";
import Footer from "../cmp/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Nav />
      <div className={style.context}>
        <div className={style.container}>
          <div className={style.card}>
            <img className={style.image} src={image1} alt="" />
            <Link to={"/Barten"}>
              <img
                className={`${style.CenterImage} ${style.image}`}
                src={profile}
                alt=""
              />
            </Link>{" "}
            <img className={style.image} src={image3} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
