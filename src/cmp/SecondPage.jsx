import React from "react";
import style from "../cmp/SecondPage.module.css";

// import Stan from "../assests/StanLee.jpg";
import image3 from "../assests/Hulk.jpg";
import Footer from "../cmp/Footer";
import Stan from "../assests/StanLee.jpg";
import Profile from "../assests/Stan.jpg";

const SecondPage = () => {
  return (
    <>
      <div className={style.body}>
        <div className={style.context}>
          <div className={style.right}>
            {/* <img className={style.stanimg} src={Stan} alt="" /> */}
            <div className={style.sign}>
              <div className={style.text}>
                <h2 className={style.who}>2' Exploration</h2>
              </div>
              <div className={style.para}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima fuga est quod nisi ipsum minus alias nobis. Quaerat,
                  necessitatibus similique quis sint repellat cum. Distinctio,
                  omnis reprehenderit pariatur delectus blanditiis error
                  asperiores excepturi temporibus commodi alias eaque enim?
                  Quam, ipsa. Optio sint debitis porro voluptates officia,
                  labore, harum dolore magni soluta ratione nam aperiam sunt lorem100
                  adipisci inventore officiis accusamus esse praesentium atque
                  iure vitae natus nemo in molestiae quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio totam quam voluptate impedit explicabo esse. Repellat non iure ullam enim! Quam?
                </p>
              </div>
              <div>
                <input className={style.search} placeholder=" Search..." type="text" />
              </div>

              <div className={style.box}>
              <img className={style.stanimg} src={Stan} alt="" />
              {/* <img className={style.Profile} src={Profile} alt="" /> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos animi explicabo consequuntur commodi. Expedita quia iste earum repellendus laudantium officiis, optio, quae magnam labore laboriosam minima modi consequuntur. Dolores aliquid temporibus accusantium consequuntur culpa nesciunt eaque? Aspernatur error, blanditiis laudantium at neque dolore odio, officiis, ipsa necessitatibus doloribus magnam natus quae suscipit sit pariatur repudiandae vitae corrupti a architecto deleniti. Natus magni sit eius libero repellendus at, veritatis pariatur quaerat nesciunt ut consectetur, quas alias dolor quisquam exercitationem beatae consequuntur, recusandae fugit voluptates! Facilis labore, necessitatibus voluptates inventore facere minima rem laudantium, molestiae reiciendis ad voluptatibus esse magni Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero quaerat, ad exercitationem dolorem saepe quae quasi facilis similique accusamus, nihil necessitatibus quod consequuntur sed. Veritatis repudiandae accusamus qui odio quasi aut expedita aperiam officia nesciunt corrupti perferendis dolorum atque corporis, est itaque ducimus dolores quia illum, placeat nihil necessitatibus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eveniet culpa laboriosam quidem distinctio laborum quod corrupti consectetur nesciunt porro sed enim provident itaque tempore voluptatum. Inventore quae blanditiis repellendus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorum cupiditate libero molestiae, alias aperiam totam unde expedita iure delectus? eius.</p>
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
