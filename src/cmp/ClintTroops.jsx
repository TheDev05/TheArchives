import React from "react";
import style from "../cmp/Modal.module.css";

const ClintTroops = () => {
  return (
    <div className={style.leftBox}>
      <div className={style.title}>
        {/* <p>Hawkeye aka.</p> */}
        <h2>The Avengers</h2>
      </div>
      <div className={style.detail}>
        Although Hawkeye became romantically involved with the Black Widow, he
        was unhappy being a criminal. When he approached the Avengers and told
        them of his desire to reform, Iron Man sponsored his membership on the
        team. Barton formed, along with Captain America, Scarlet Witch and her
        brother, Quicksilver, an incarnation of the Avengers known as "Cap's
        Kooky Quartet." Eventually, however, Hawkeye came to respect Cap more
        than any other Avenger and became one of his staunchest supporters.
      </div>
    </div>
  );
};

export default ClintTroops;
