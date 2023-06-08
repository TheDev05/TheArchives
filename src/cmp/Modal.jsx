import React from "react";
import style from "../cmp/Modal.module.css";
import image1 from "../assests/image.png";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import array from "./BodyContent";
import Template from "../cmp/Template";

import ModalProfiles from "./ModalProfiles";

const Modal = (props) => {
  let [value, updateValue] = useState(0);
  // const [ok, updateOk] = useState(1);

  const data = array;

  const location = useLocation();
  const param1 = location.state.pass;

  const photo = {
    // backgroundColor: "black",
    position: "fixed",
    top: ModalProfiles[param1].top,
    bottom: ModalProfiles[param1].bottom,
    left: ModalProfiles[param1].left,
    right: ModalProfiles[param1].right,
    width: ModalProfiles[param1].width,
    height: ModalProfiles[param1].height,
  };

  
  // console.log("param1: ", param1);

  const [dash, updateDash] = useState([
    "2px solid black",
    "none",
    "none",
    "none",
    "none",
    "none",
  ]);

  const click = (e) => {
    updateValue(e.target.id);
    updateDash(
      dash.map((val, index) => {
        if (index == e.target.id) {
          return "2px solid black";
        } else return "none";
      })
    );
  };

  let [dot, updateDot] = useState("In");
  const clickCancel = (e) => {
    // console.log("first");
    // updateDot("Out");
  };

  return (
    <div className={`${style.body}`}>
      <div
        className={`${
          style.context
        } ${`animate__animated animate__zoom${dot}`}`}
      >
        <div className={style.head}>
          <div className={style.home}>
            <Link to={"/"}>Home</Link>
            {/* <a href="#">Home</a> */}
          </div>
          <div className={style.char}>
            <a href="#">Characters</a>
          </div>
          <div className={style.help}>
            <a href="#" onClick={clickCancel}>
              Help
            </a>
          </div>
        </div>

        {/* <div className={style.leftBox}>
          <div className={style.title}>
            <p>Hawkeye aka.</p>
            <h2>Clint Barton</h2>
          </div>
          <div className={style.detail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            facilis rerum sint accusantium? Blanditiis voluptates cum qui, quas
            eveniet iste. Qui hic incidunt cumque corporis adipisci cupiditate
            tenetur quisquam. Ea consequatur sunt illo beatae cumque accusamus
            nostrum similique! Natus porro minus dolor vel obcaecati deserunt
            hic deleniti maxime iure totam!
          </div>
        </div> */}

        {/* {data.map((val, index) => {
          if (index == value) {
            return val;
          }
        })} */}

        <Template pass={[value, param1]} />

        {/* Image */}
          <div className={style.image}>
            <img src={ModalProfiles[param1].url} style={photo} alt="" />
          </div>
      

        <div className={style.right}>
          <div
            className={`${style.about} ${style.link}`}
            id="0"
            style={{ borderBottom: dash[0] }}
            onClick={click}
          >
            About
          </div>
          <div
            className={`${style.status} ${style.link}`}
            id="1"
            onClick={click}
            style={{ borderBottom: dash[1] }}
          >
            Status
          </div>
          <div
            className={`${style.relation} ${style.link}`}
            id="2"
            onClick={click}
            style={{ borderBottom: dash[2] }}
          >
            Relationships
          </div>
          <div
            className={`${style.skills} ${style.link}`}
            id="3"
            onClick={click}
            style={{ borderBottom: dash[3] }}
          >
            Skills
          </div>
          <div
            className={`${style.weapons} ${style.link}`}
            id="4"
            onClick={click}
            style={{ borderBottom: dash[4] }}
          >
            Weapons
          </div>
          <div
            className={`${style.troops} ${style.link}`}
            id="5"
            onClick={click}
            style={{ borderBottom: dash[5] }}
          >
            Troops
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
