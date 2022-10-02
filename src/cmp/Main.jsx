import React, { useState } from "react";
import style from "../cmp/Main.module.css";

import image1 from "../assests/Barton.jpg";
import image2 from "../assests/Captain.jpg";
import image3 from "../assests/Widow.jpg";

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
          <div className={style.cover}>

            <Link to={"/Barton"} state={{ pass: 0 }}>
              <div className={style.card} id="1" onClick={click}>

                <div className={style.head}>
                  <div className={style.left}>
                    <div className={style.profile}>😊</div>
                    <div className={style.name}>Clint B.</div>
                  </div>

                  <div className={style.right}>
                    <div className={style.follow}>Follow</div>
                  </div>
                </div>

                <div className={style.imageSection}>
                  <img src={image1} alt="" />
                </div>
              </div>
              
            </Link>

            <Link to={"/Barton"} state={{ pass: 1 }}>
              <div className={style.card} id="2" onClick={click}>
                <div className={style.head}>
                  <div className={style.left}>
                    <div className={style.profile}>😊</div>
                    <div className={style.name}>Steve R.</div>
                  </div>

                  <div className={style.right}>
                    <div className={style.follow}>Follow</div>
                  </div>
                </div>

                <div className={style.imageSection}>
                  <img src={image2} alt="" />
                </div>
              </div>
            </Link>

            <Link to={"/Barton"} state={{ pass: 2 }}>
              <div className={style.card} id="3" onClick={click}>
                <div className={style.head}>
                  <div className={style.left}>
                    <div className={style.profile}>😊</div>
                    <div className={style.name}>Natasha R.</div>
                  </div>

                  <div className={style.right}>
                    <div className={style.follow}>Follow</div>
                  </div>
                </div>

                <div className={style.imageSection}>
                  <img src={image3} alt="" />
                </div>
              </div>
            </Link>

            {/* <Link to={"/Barton"} state={{ pass: 0 }}>
              <div className={style.card} id="1" onClick={click}>
                <img className={`${style.image}`} src={image1} alt="" />
              </div>
            </Link>

            <Link to={"/Barton"} state={{ pass: 1 }}>
              <div className={style.card} id="2" onClick={click}>
                <img className={`${style.image}`} src={image2} alt="" />
              </div>
            </Link>

            <Link to={"/Barton"} state={{ pass: 2 }}>
              <div className={style.card} id="3" onClick={click}>
                <img className={`${style.image}`} src={image3} alt="" />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
