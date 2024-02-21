import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import style from "./SandBox.module.css";

import image0 from "../assests/Barton.jpg";
import image1 from "../assests/Natasha.jpg";
import image3 from "../assests/Thor.jpg";
import image5 from "../assests/Captain.jpg";
import image6 from "../assests/Spider.jpg";

import { Link } from "react-router-dom";

const data = [image0, image1, "", image3,"", image5, image6];

const exampleItems = [
  {
    id: "0",
    name: "Bartan",
    description: "The Hawk Eye",
  },
  {
    id: "1",
    name: "Natasha",
    description: "Black Widow",
  },
  {
    id: "5",
    name: "Captain",
    description: "Oldest yet Powerful",
  },
  {
    id: "3",
    name: "Thor",
    description: "Thunder God",
  },
  {
    id: "6",
    name: "Spidey",
    description: "Web Blaster",
  },
];

const ExampleCarousel = () => {
  return (
    <div className={style.context}>
      <Carousel
        className={style.box}
        animation="slide"
        indicators={true}
        timeout={500}
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
        cycleNavigation={true}
        fullHeightHover={false}
        sx={{
          // maxWidth: "350px",
          // maxHeight: "1000px",
          width: "350px",
          height:"400px",
          flexGrow: 1,
          // margin: "auto",
          mt: 5,
          borderRadius: "10px",
        }}
      >
        {exampleItems.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {/* <div className={style.right1}>
        <h1>The</h1>
        <h1>Archives</h1>
        <textarea className={style.input} name="" placeholder="Search Movies" id="" cols="30" rows="10"></textarea>
        <button className={style.btn}>Search</button>
      </div> */}
    </div>
  );
};

function Item(props) {
  console.log(props);
  return (
    <Paper
      className={style.card}
      // sx={{
      //   position: "relative",
      //   backgroundColor: "red",
      //   color: "#fff",
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   // height: "420px",
      //   display: "flex",
      //   flexDirection: "column",
      //   borderRadius: "10px",
      //   p: 4,
      // }}
      elevation={10}
    >
      <img src={data[props.item.id]} alt="" />
      <div className={style.below}>

        <Typography className={style.text} variant="h4">{props.item.name}</Typography>
        <Typography className={style.text2}>{props.item.description}</Typography>
        <Link to={"/Characters"} state={{ pass: props.item.id }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, alignSelf: "center" }}
          >
            Explore
          </Button>
        </Link>
      </div>
    </Paper>
  );
}

export default ExampleCarousel;
