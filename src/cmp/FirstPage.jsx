import React from "react";
import style from "../cmp/FirstPage.module.css";

import image1 from "../assests/Barton.jpg";
import image2 from "../assests/Natasha.jpg";
import image3 from "../assests/Thor.jpg";
import image4 from "../assests/Hulk.jpg";
import image5 from "../assests/Captain.jpg";
import image6 from "../assests/Natasha.jpg";

// import Marquee from "react-fast-marquee";
import Marquee from "react-marquee-master";

import { HiDotsHorizontal } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

import SecondPage from "../cmp/SecondPage";

const FirstPage = () => {
  return (
    <>
      <div className={style.context}>
        <div className={style.head}>
          <p>அற்புதம்</p>
        </div>

        <div className={style.part}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, cum,
            aspernatur et illum iusto eius repellendus quidem laboriosam ducimus
            quibusdam quisquam, ullam quasi cumque architecto excepturi. Modi
            recusandae adipisci repellat. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Fuga architecto rem reiciendis animi
            repellendus odio, aliquam nisi voluptate veritatis eaque eveniet
            dolorem cumque nemo consequatur quam autem! Nihil fuga obcaecati
            quibusdam reprehenderit ex odit nisi perspiciatis eos ut nemo amet
            aperiam, quae repudiandae exercitationem dolorem alias ab aut
            incidunt non mollitia? Quae amet, nihil quaerat accusantium facere
            facilis labore maxime nemo. Quidem sequi eos eligendi incidunt
            possimus pariatur laborum tempore libero eaque ullam magni animi in
            officia ad molestias, dolor assumenda similique sunt, suscipit quo.
            Omnis repellat et explicabo unde nemo quasi tempore corrupti, natus,
            nisi eos mollitia asperiores ut sunt ex molestiae, amet at itaque
            numquam inventore exercitationem. Laudantium commodi deleniti
            doloremque, alias culpa, nemo nulla minus exercitationem quidem
            error laborum earum cumque obcaecati pore ad. Quia dolorum sed
            excepturi, numquam id cum harum fugiat adipisci dolor vel provident
            magni deleniti minus distinctio est aspernatur cupiditate illum! Ut
            non natus qui! Similique, fugit id alias veniam non voluptatibus,
            reiciendis dolorem magnam officia Lorem. Dolores soluta quae error.
          </p>
        </div>
        <div className={style.number}>
          <span className={style.count1}>Love&nbsp;you</span>
          3k
        </div>

        <div className={style.right}>
          <div className={style.col1}>
            <Marquee
              direction="up"
              delay="12"
              height={750}
              marqueeItems={[
                <div className={style.card}>
                  <div className={style.top}>
                    <div className={style.profile}>
                      <CgProfile />
                      <h3>Barton</h3>
                    </div>
                    <div className={style.add}>
                      <HiDotsHorizontal />
                    </div>
                  </div>
                  <img src={image1} alt="" />

                  <div className={style.bottom}>
                    <div className={style.upper}>
                      <div className={style.like}>
                        <div className={style.heart}>
                          <FaHeart />
                        </div>
                        <TbMessageCircle2 />
                        <FiSend />
                      </div>
                      <div className={style.save}>
                        <FiBookmark />
                      </div>
                    </div>

                    <div className={style.text}>
                      Liked by Dev and 55 others{" "}
                      <span className={style.hash}> #Barton</span>
                    </div>
                  </div>
                </div>,
                <div className={style.card}>
                  <div className={style.top}>
                    <div className={style.profile}>
                      <CgProfile />
                      <h3>Natasha</h3>
                    </div>
                    <div className={style.add}>
                      <HiDotsHorizontal />
                    </div>
                  </div>
                  <img src={image2} alt="" />

                  <div className={style.bottom}>
                    <div className={style.upper}>
                      <div className={style.like}>
                        <div className={style.heart}>
                          <FaHeart />
                        </div>
                        <TbMessageCircle2 />
                        <FiSend />
                      </div>
                      <div className={style.save}>
                        <FiBookmark />
                      </div>
                    </div>

                    <div className={style.text}>
                      Liked by Ashish and 29 others{" "}
                      <span className={style.hash}>#Nat</span>
                    </div>
                  </div>
                </div>,
                <div className={style.card}>
                  <div className={style.top}>
                    <div className={style.profile}>
                      <CgProfile />
                      <h3>Thor</h3>
                    </div>
                    <div className={style.add}>
                      <HiDotsHorizontal />
                    </div>
                  </div>
                  <img src={image3} alt="" />

                  <div className={style.bottom}>
                    <div className={style.upper}>
                      <div className={style.like}>
                        <div className={style.heart}>
                          <FaHeart />
                        </div>
                        <TbMessageCircle2 />
                        <FiSend />
                      </div>
                      <div className={style.save}>
                        <FiBookmark />
                      </div>
                    </div>

                    <div className={style.text}>
                      Liked by Yash and 98 others{" "}
                      <span className={style.hash}> #Thor</span>
                    </div>
                  </div>
                </div>,
              ]}
            />
          </div>

          <div className={style.col2}>
            <Marquee
              direction="down"
              delay="20"
              height={750}
              marqueeItems={[
                <div className={style.card}>
                  <div className={style.top}>
                    <div className={style.profile}>
                      <CgProfile />
                      <h3>Bruce</h3>
                    </div>
                    <div className={style.add}>
                      <HiDotsHorizontal />
                    </div>
                  </div>
                  <img src={image4} alt="" />

                  <div className={style.bottom}>
                    <div className={style.upper}>
                      <div className={style.like}>
                        <div className={style.heart}>
                          <FaHeart />
                        </div>
                        <TbMessageCircle2 />
                        <FiSend />
                      </div>
                      <div className={style.save}>
                        <FiBookmark />
                      </div>
                    </div>

                    <div className={style.text}>
                      Liked by Akansha and 55 others{" "}
                      <span className={style.hash}> #Hulk</span>
                    </div>
                  </div>
                </div>,
                <div className={style.card}>
                  <div className={style.top}>
                    <div className={style.profile}>
                      <CgProfile />
                      <h3>Steve</h3>
                    </div>
                    <div className={style.add}>
                      <HiDotsHorizontal />
                    </div>
                  </div>
                  <img src={image5} alt="" />

                  <div className={style.bottom}>
                    <div className={style.upper}>
                      <div className={style.like}>
                        <div className={style.heart}>
                          <FaHeart />
                        </div>
                        <TbMessageCircle2 />
                        <FiSend />
                      </div>
                      <div className={style.save}>
                        <FiBookmark />
                      </div>
                    </div>

                    <div className={style.text}>
                      Liked by Yash and 55 others{" "}
                      <span className={style.hash}> #Captain</span>
                    </div>
                  </div>
                </div>,
                <div className={style.card}>
                  <div className={style.top}>
                    <div className={style.profile}>
                      <CgProfile />
                      <h3>Tony</h3>
                    </div>
                    <div className={style.add}>
                      <HiDotsHorizontal />
                    </div>
                  </div>
                  <img src={image6} alt="" />

                  <div className={style.bottom}>
                    <div className={style.upper}>
                      <div className={style.like}>
                        <div className={style.heart}>
                          <FaHeart />
                        </div>
                        <TbMessageCircle2 />
                        <FiSend />
                      </div>
                      <div className={style.save}>
                        <FiBookmark />
                      </div>
                    </div>

                    <div className={style.text}>
                      Liked by Dev and 55 others{" "}
                      <span className={style.hash}> #Iron</span>
                    </div>
                  </div>
                </div>,
              ]}
            />
          </div>
        </div>
      </div>
      <SecondPage />
    </>
  );
};

export default FirstPage;
