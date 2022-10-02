import React from "react";
import style from "../cmp/SecondPage.module.css";

import image1 from "../assests/Barton.jpg";
import image2 from "../assests/Natasha.jpg";
import image3 from "../assests/Hulk.jpg";

import { Link } from "react-router-dom";
import { useState } from "react";

import Footer from "../cmp/Footer";

const SecondPage = () => {
  const [val, updateVal] = useState();
  const click = (e) => {
    updateVal(e.currentTarget.id);
  };

  return (
    <>
      <div className={style.body}>
        <div className={style.context}>
          <div className={style.right}>
            <p>
              <img src={image3} alt="" />
              <h2>Bruce Banner</h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              soluta numquam placeat exercitationem corrupti quisquam maxime
              sapiente quam vitae ipsa? cupiditate tempore, doloremque aliquam
              possimus dolores repellat amet quas delectus voluptatibus vel
              veniam hic soluta natus aliquid inventore quibusdam? Eaque, rem.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              molestiae hic veritatis ducimus magnam minima iste quis pariatur
              ipsa reiciendis totam labore nemo commodi alias eveniet voluptas,
              doloremque deleniti neque vitae provident quae possimus. Officiis
              velit illo eos totam facere fuga dolorem, culpa dolor, pariatur
              labore blanditiis! Aliquam, explicabo vel. Dolor quibusdam placeat
              nisi corrupti illo, fuga, iusto vitae quaerat explicabo,
              reprehenderit harum magnam velit temporibus exercitationem vel
              culpa recusandae fugiat! Aut beatae sit dolor similique, ex
              consequatur fuga error ut omnis excepturi nesciunt voluptate
              exercitationem qui minima sunt corrupti cumque enim vero neque
              dicta hic. Aliquam non laboriosam magnam nostrum repudiandae sint,
              esse architecto optio pariatur cumque suscipit repellat quas
              facere saepe, earum illo. Eaque, a. Aspernatur nulla incidunt sit
              ipsam architecto? Quod perspiciatis accusantium assumenda
              cupiditate dolorem obcaecati, numquam aperiam nostrum, incidunt
              blanditiis soluta cumque et ab totam nisi sit adipisci nam
              architecto. Esse enim doloremque suscipit molestias autem adipisci
              alias asperiores ratione nemo, impedit mollitia deserunt nulla
              consectetur eius cupiditate sint sit a veniam voluptate qui cum
              quos quibusdam ut quia? Eaque aperiam itaque doloremque velit.
              Earum amet ipsum veniam impedit enim cupiditate corporis illo
              accusamus ad deleniti id reiciendis harum vitae, alias ipsa dicta
              quia esse saepe! At ea autem corporis cupiditate maxime? Iste
              libero molestias earum minima quidem odit quia porro nemo rerum
              illo tempora alias unde exercitationem tempore recusandae numquam
              sunt, placeat officia dignissimos esse modi cupiditate eaque,
              mollitia maxime! Veniam, obcaecati exercitationem expedita
              incidunt rerum voluptatem qui autem culpa nesciunt est ipsum non
              eaque nemo nisi. Excepturi, dolorum modi hic aliquid at ab labore
              praesentium quisquam quasi officia blanditiis reiciendis quidem
              vitae unde, quia sunt ad consequatur cum reprehenderit eligendi
              ipsum autem optio? Vero dicta tempora temporibus dignissimos,
              voluptate dolorum eligendi vitae corporis consequuntur qui vel
              quaerat suscipit inventore eius dolor culpa commodi?
            </p>

            {/* <div className={style.section}> */}
            <Link to={"/Barton"} state={{ pass: 0 }}>
              <div className={style.card} id="1" onClick={click}>
                <img src={image1} alt="" />
              </div>
            </Link>
            <Link to={"/Barton"} state={{ pass: 1 }}>
              <div className={style.card} id="2" onClick={click}>
                <img src={image2} alt="" />
              </div>
            </Link>
            <Link to={"/Barton"} state={{ pass: 2 }}>
              <div className={style.card} id="3" onClick={click}>
                <img src={image3} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecondPage;
