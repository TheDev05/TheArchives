import React from "react";
import style from "../cmp/Modal.module.css";

const ClintRelation = () => {
  return (
    <div className={style.leftBox}>
      <div className={style.title}>
        {/* <p>Relations'</p> */}
        <h2>Married</h2>
      </div>
      <div className={style.detail}>
        Clint and Natasha are best friends. However, at the start of their
        relationship, Clint Barton (as Hawkeye) was sent to eliminate Natasha,
        but instead, Barton saw her skills and recommended her recruitment. The
        two began an everlasting partnership, with Barton affectionately calling
        her "Nat." During The Avengers, Barton was taken by Loki Laufeyson,
        while being under his mind control. When she heard he was in danger, she
        immediately beat up her interogators.
      </div>
    </div>
  );
};

export default ClintRelation;
