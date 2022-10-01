import React from "react";
import style from "../cmp/Modal.module.css";

const ClintSkills = () => {
  return (
    <div className={style.leftBox}>
      <div className={style.title}>
        {/* <p>Skills'</p> */}
        <h2>Master <span className={style.sirname}>Archer</span></h2>
      </div>
      <div className={style.detail}>
        Barton has trained himself to become a master archer
        specializing in the use of regular bows, longbows, compound bows, and
        crossbows with near-perfect accuracy. He is capable of firing multiple
        arrows at a single target in a few seconds, hitting multiple targets in
        a few quick strokes, and directly hit small targets in the greatest of
        distances. Barton has even been known to hit an apple in the center of
        it. He practices a minimum of two hours per day to keep his skills
        honed.
      </div>
    </div>
  );
};

export default ClintSkills;
