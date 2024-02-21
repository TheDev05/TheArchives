import React from "react";
import style from "../cmp/Modal.module.css";
import image1 from "../assests/image.png";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import array from "./BodyContent";
import Template from "../cmp/Template";
import ModalNavBar from "../cmp/ModalNavBar";

import ModalProfiles from "./ModalProfiles";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";

const Modal = (props) => {
  let [value, updateValue] = useState(0);
  // const [ok, updateOk] = useState(1);

  const data = array;

  const location = useLocation();
  const param1 = location.state.pass;

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

  // Hamburger menu contents down below:
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`${style.body}`}>
      <div
        className={`${
          style.context
        } ${`animate__animated animate__zoom${dot}`}`}
      >
        <div className={style.head}>
          {/* Toggle hamburger menu */}
          <div className={style.menuToggle}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: "red" }}
            >
              <MenuSharpIcon className={style.burgerMenu} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => updateValue(0)}>About</MenuItem>
              <MenuItem onClick={() => updateValue(1)}>Status</MenuItem>
              <MenuItem onClick={() => updateValue(2)}>Relationship</MenuItem>
              <MenuItem onClick={() => updateValue(3)}>Skills</MenuItem>
              <MenuItem onClick={() => updateValue(4)}>Weapons</MenuItem>
              <MenuItem onClick={() => updateValue(5)}>Troops</MenuItem>
            </Menu>
          </div>

          {/* <ModalNavBar /> */}

          {/* <div className={style.otherMenu}>
            <div className={style.home}>
              <Link to={"/"}>Home</Link>
            </div>
            <div className={style.char}>
              <Link to="/Explore">Movies</Link>
            </div>
            <div className={style.help}>
              <a href="#">Help</a>
            </div>
          </div> */}
        </div>

        <div className={style.below}>
          <Template pass={[value, param1]} className={style.left} />

          {/* Image */}
          <div className={style.image}>
            <img
              className={style.photu}
              src={ModalProfiles[param1].url}
              alt=""
            />
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
    </div>
  );
};

export default Modal;
