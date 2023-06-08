import React from "react";
import style from "../cmp/SecondPage.module.css";

import Stan from "../assests/StanLee.jpg";
import image3 from "../assests/Hulk.jpg";
import Footer from "../cmp/Footer";

const SecondPage = () => {
  return (
    <>
      <div className={style.body}>
        <div className={style.context}>
          <div className={style.right}>
            <img src={Stan} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecondPage;
