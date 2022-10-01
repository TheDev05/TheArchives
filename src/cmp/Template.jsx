import React from "react";
import style from "../cmp/Modal.module.css";
import array1 from "../cmp/BodyContent";
import array2 from "../cmp/TitleContent";

const Template = (props) => {

  let [t1, t2] = props.pass;

  const data1 = array1[t2];
  const data2 = array2[t2];

  return (
    <div className={style.leftBox}>
      <div className={style.title}>
        {t1 == 0 ? <p>Hawkeye aka.</p> : null}
        <h2>{data2[t1]}</h2>
      </div>
      <div className={style.detail}>{data1[t1]}</div>
    </div>
  );
};

export default Template;
