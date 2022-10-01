import React, { useState } from "react";
import style from "../cmp/Main.module.css";

import image1 from "../assests/profile.jpg";
import image2 from "../assests/1.jpg";
import image3 from "../assests/3.jpg";

import Nav from "../cmp/Nav";
import Footer from "../cmp/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  const [val, updateVal] = useState();
  const click = (e) => {
    updateVal(e.currentTarget.id);
  };

  // const Land = {
  //   pathname: "/Barton",
  //   pass: val ,
  // };

  return (
    <>
      <Nav />
      <div className={style.context}>
        <div className={style.container}>
          <div className={style.card}>
            <Link to={"/Barton"} state={{ pass: 0 }}>
              <div className="style.image" id="1" onClick={click}>
                <img className={`${style.image}`} src={image1} alt="" />
              </div>
            </Link>

            <Link to={"/Barton"} state={{ pass: 1 }}>
              <div className="style.image" id="2" onClick={click}>
                <img className={`${style.image}`} src={image2} alt="" />
              </div>
            </Link>

            <Link to={"/Barton"} state={{ pass:  2  }}>
              <div className="style.image" id="3" onClick={click}>
                <img className={`${style.image}`} src={image3} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
