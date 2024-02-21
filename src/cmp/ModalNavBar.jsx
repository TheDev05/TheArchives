import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import style from "../cmp/Modal.module.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Status</MenuItem>
        <MenuItem onClick={handleClose}>Relationship</MenuItem>
        <MenuItem onClick={handleClose}>Skills</MenuItem>
        <MenuItem onClick={handleClose}>Weapons</MenuItem>
        <MenuItem onClick={handleClose}>Troops</MenuItem>
      </Menu>
    </div>
  );
}
