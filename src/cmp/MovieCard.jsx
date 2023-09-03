import React from "react";
import style from "./MovieCard.module.css";

import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCalendarDayFill } from "react-icons/bs";

export default function MovieCard(props) {
  // console.log(props.values);
  return (
    <div className={style.card}>
      <img src={props.values.cover_url} alt="" />

      <div className={style.rows}>
        <div className={style.row1}>
          <div className={style.title}>{props.values.title}</div>

          <div className={style.year}>
            YEAR: {props.values.release_date.substring(4, 0)}
          </div>
        </div>

        <div className={style.row2}>
          <div className={style.hd}>HD</div>
          <div className={style.time}>
            <AiFillClockCircle className={style.clock} />{" "}
            {props.values.duration} Min
          </div>
        </div>
      </div>
    </div>
  );
}
