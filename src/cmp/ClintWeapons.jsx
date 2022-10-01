import React from "react";
import style from "../cmp/Modal.module.css";

const ClintWeapons = () => {
  return (
    <div className={style.leftBox}>
      <div className={style.title}>
        {/* <p>Weapons'</p> */}
        <h2>Custom-made Bow</h2>
      </div>
      <div className={style.detail}>
        As Hawkeye, Barton possesses a custom-made bow, quick-release quiver, a
        number of trick arrows and a combat knife. Although he is not known to
        use melee weapons, Barton's incredible reflexes and hand-eye
        coordination allow him to easily master most weapons. He also received
        training in swordsmanship during his youth from the original Swordsman,
        who was considered one of the greatest experts in sword-fighting the
        world has ever known.
      </div>
    </div>
  );
};

export default ClintWeapons;
