import React from "react";
import style from "../cmp/SecondPage.module.css";

import SearchMovies from "./SearchMovies";
import { Link } from "react-router-dom";

// import Stan from "../assests/StanLee.jpg";
import image3 from "../assests/Hulk.jpg";
import Footer from "../cmp/Footer";
import Stan from "../assests/spidey3.png";
import Profile from "../assests/Stan.jpg";

import { AiFillClockCircle } from "react-icons/ai";
import { BsFillCalendarDayFill } from "react-icons/bs";

const SecondPage = () => {
  return (
    <>
      <div className={style.body}>
        <div className={style.context}>
          <div className={style.right}>
            {/* <img className={style.stanimg} src={Stan} alt="" /> */}
            <div className={style.sign}>
              <div className={style.text}>
              "With great power comes great <span>responsibility</span>.<br/> This is my gift. This is my curse."
              : The Spider-Man
              </div>
              <div className={style.para}>
                <div className={style.title}>The Spider Man</div>
                <div className={style.title_detail}>
                  Unlimited Movie, <span>TVs Shows , & More.</span>
                </div>
                <div className={style.title_movie}>
                  <div className={style.pg18}>PG18</div>
                  <div className={style.hd}>
                    <p>4K</p>
                  </div>
                  <div className={style.genre}>Romance, Drama</div>
                  <div className={style.time}>
                    <BsFillCalendarDayFill className={style.calender} /> 2022{" "}
                    <AiFillClockCircle className={style.clock} /> 128 min
                  </div>
                </div>
              </div>

              <Link to={"/Explore"}>
                <button className={style.btn_explore}>
                  <h5>Explore the Abyss</h5>
                </button>
              </Link>

              <div className={style.box}>
                <img className={style.stanimg} src={Stan} alt="" />
                {/* <img className={style.Profile} src={Profile} alt="" /> */}
                <p>
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam dignissimos animi explicabo consequuntur commodi.
                  Expedita quia iste earum repellendus laudantium officiis,
                  optio, quae magnam labore laboriosam minima modi consequuntur.
                  Dolores aliquid temporibus accusantium consequuntur culpa
                  nesciunt eaque? Aspernatur error, blanditiis laudantium at
                  neque dolore odio, officiis, ipsa necessitatibus doloribus
                  magnam natus quae suscipit sit pariatur repudiandae vitae
                  corrupti a architecto deleniti. Natus magni sit eius libero
                  repellendus at, veritatis pariatur quaerat nesciunt ut
                  consectetur, quas alias dolor quisquam exercitationem beatae
                  consequuntur, recusandae fugit voluptates! Facilis labore,
                  necessitatibus voluptates inventore facere minima rem
                  laudantium, molestiae reiciendis ad voluptatibus esse magni
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis libero quaerat, ad exercitationem dolorem saepe quae
                  quasi facilis similique accusamus, nihil necessitatibus quod
                  consequuntur sed. Veritatis repudiandae accusamus qui odio
                  quasi aut expedita aperiam officia nesciunt corrupti
                  perferendis dolorum atque corporis, est itaque ducimus dolores
                  quia illum, placeat nihil necessitatibus. Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Ut, eveniet culpa
                  laboriosam quidem distinctio laborum quod corrupti consectetur
                  nesciunt porro sed enim provident itaque tempore voluptatum.
                  Inventore quae blanditiis repellendus? Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Maxime dolorum cupiditate
                  libero molestiae, alias aperiam totam unde expedita iure
                  delectus? eius. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecondPage;
