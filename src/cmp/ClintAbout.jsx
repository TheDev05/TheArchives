import React from "react";
import style from "../cmp/Modal.module.css";

const ClintAbout = () => {
  return (
    <div className={style.leftBox}>
      <div className={style.title}>
        <p><i>Hawkeye aka.</i></p>
        <h2>
          Clint <span className={style.sirname}>Barton</span>
        </h2>
      </div>
      <div className={style.detail}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus facilis
        rerum sint accusantium? Blanditiis voluptates cum qui, quas eveniet
        iste. Qui hic incidunt cumque corporis adipisci cupiditate tenetur
        quisquam. Ea consequatur sunt illo beatae cumque accusamus nostrum
        similique! Natus porro minus dolor vel obcaecati deserunt hic deleniti
        maxime iure totam!
      </div>
    </div>
  );
};

export default ClintAbout;
