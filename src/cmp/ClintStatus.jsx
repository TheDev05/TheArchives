import React from "react";
import style from "../cmp/Modal.module.css";

const ClintStatus = () => {
  return (
    <div className={style.leftBox}>
      <div className={style.title}>
        {/* <p>Barton is</p> */}
        <h2>Alive</h2>
      </div>
      <div className={style.detail}>
      Clint Barton was locked in the cell at the investigation site, while Nick Fury ordered scientists to examine Thor's body, learning that Thor was not a human. Phil Coulson told Fury that Barton insisted that he did not kill Thor and he never misfires, no matter what evidence S.H.I.E.L.D. had against him. While Barton was in the cell, Yellowjacket killed him by flying into his ear and causing a hemorrhage in his brain.
      </div>
    </div>
  );
};

export default ClintStatus;
