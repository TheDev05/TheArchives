import React from "react";
import style from "../cmp/FirstPage.module.css";

import image1 from "../assests/Barton.jpg";
import image2 from "../assests/Natasha.jpg";
import image3 from "../assests/Thor.jpg";
import image4 from "../assests/Hulk.jpg";
import image5 from "../assests/Captain.jpg";
import image7 from "../assests/Spider.jpg";
import image8 from "../assests/Thor2.jpg";
import image9 from "../assests/Nick.jpg";
import image11 from "../assests/Arrow3.png";
import image12 from "../assests/2.png";

import Marquee from "react-marquee-master";

import { HiDotsHorizontal } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { TbMessageCircle2 } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

import SecondPage from "../cmp/SecondPage";
import { Link } from "react-router-dom";
import { useState } from "react";

import SandBox from "./SandBox";

const FirstPage = () => {
  return (
    <div className={style.outerBody}>
      <div className={style.context1}>
        <div className={style.head}>
          <div className={style.logo}>
            {/* <img className={style.logoimage} src={image12} alt="" /> */}
            <p>
              THE
              <br /> <span className={style.logo_lower}>ARCHIVES</span>
            </p>
          </div>
        </div>

        <div className={style.left}>
          <div className={style.part}>
            <div className={style.details}>
              <p>
                Welcome, Marvel Fanatics! Have you ever felt like the Infinity
                Saga was just the beginning, and the Multiverse Saga feels like
                a whole new universe to explore? Do character names like Kamala
                Khan, Yelena Belova, and Shang-Chi leave you scratching your
                head? Fear not, for you've stumbled upon the ultimate gateway to
                the ever-expanding Marvel Cinematic Universe: The Archives!
                <span className={style.extra}>
                  Think of us as your personal Avengers Quinjet, soaring you
                  through the vast realms of Marvel movies and TV shows. Search
                  for your favorite heroes, from the iconic Iron Man to the
                  enigmatic Moon Knight. Explore timelines, delve into hidden
                  connections, and rediscover forgotten gems. With The
                  Archives!, the secrets of the MCU are at your fingertips! But
                  wait, there's more! We're not just a search engine for
                  superpowered beings. Here's what awaits you within our digital
                  walls: Curated Collections: Feeling nostalgic for the Phase 1
                  classics? Or maybe you're curious about the cosmic side of
                  things. Dive into our themed collections, where we handpick
                  movies and shows based on characters, genres, storylines, and
                  even historical periods within the MCU. Beyond the Big Screen:
                  The MCU extends far beyond the silver screen. We keep you
                  updated on the latest Disney+ series, upcoming movie releases,
                  and even tie-in comics and video games. No detail escapes our
                  watchful eye! Unleash Your Inner Superfan level. So, dear
                  Marvel fan, don't get lost in the Quantum Realm of information
                  overload. Join us at The Archives! and embark on a journey
                  through the ever-evolving Marvel Cinematic Universe! Remember,
                  with great knowledge comes great responsibility... the
                  responsibility to share your love for the MCU with the world!
                  Start your adventure today!
                </span>
                <div className={style.social}>
                  <AiFillTwitterCircle className={style.twitter} />
                  <BsGithub className={style.git} />
                  <BsFacebook className={style.fb} />
                </div>
              </p>
            </div>

            {/* <div className={style.sign}>
            <img className={style.sign} src={image11} alt="" />
          </div> */}
          </div>
        </div>
        {/* <div className={style.number}>
          <span className={style.count1}>Love&nbsp;you</span>
          3k
        </div> */}

        <div className={style.right}>
          <div className={style.newCard}>
            <SandBox />
          </div>
          <div className={style.col1}>
            <Marquee
              className={style.marquee}
              direction="up"
              delay="12"
              height={1100}
              marqueeItems={[
                <Link to={"/Characters"} state={{ pass: 0 }}>
                  <div className={style.card} id="1">
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
                  </div>
                </Link>,
                <Link to={"/Characters"} state={{ pass: 1 }}>
                  <div className={style.card} id="2">
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
                  </div>
                </Link>,
                <Link to={"/Characters"} state={{ pass: 2 }}>
                  <div className={style.card} id="3">
                    <div className={style.top}>
                      <div className={style.profile}>
                        <CgProfile />
                        <h3>Nick</h3>
                      </div>
                      <div className={style.add}>
                        <HiDotsHorizontal />
                      </div>
                    </div>
                    <img src={image9} alt="" />

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
                        <span className={style.hash}> #Nick</span>
                      </div>
                    </div>
                  </div>
                </Link>,

                <Link to={"/Characters"} state={{ pass: 3 }}>
                  <div className={style.card} id="4">
                    <div className={style.top}>
                      <div className={style.profile}>
                        <CgProfile />
                        <h3>Thor</h3>
                      </div>
                      <div className={style.add}>
                        <HiDotsHorizontal />
                      </div>
                    </div>
                    <img src={image8} alt="" />

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
                        Liked by Dev and 98 others{" "}
                        <span className={style.hash}> #Thor</span>
                      </div>
                    </div>
                  </div>
                </Link>,
              ]}
            />
          </div>

          <div className={style.col2}>
            <Marquee
              direction="down"
              delay="20"
              height={1100}
              marqueeItems={[
                <Link to={"/Characters"} state={{ pass: 4 }}>
                  <div className={style.card} id="5">
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
                  </div>
                </Link>,
                <Link to={"/Characters"} state={{ pass: 5 }}>
                  <div className={style.card} id="6">
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
                  </div>
                </Link>,
                <Link to={"/Characters"} state={{ pass: 6 }}>
                  <div className={style.card} id="7">
                    <div className={style.top}>
                      <div className={style.profile}>
                        <CgProfile />
                        <h3>Peter</h3>
                      </div>
                      <div className={style.add}>
                        <HiDotsHorizontal />
                      </div>
                    </div>
                    <img src={image7} alt="" />

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
                        <span className={style.hash}> #Spidey</span>
                      </div>
                    </div>
                  </div>
                </Link>,
                <Link to={"/Characters"} state={{ pass: 3 }}>
                  <div className={style.card} id="4">
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
                        Liked by Yash and 55 others{" "}
                        <span className={style.hash}> #Thor</span>
                      </div>
                    </div>
                  </div>
                </Link>,
              ]}
            />
          </div>
        </div>
      </div>
      <div className={style.secondPageContext}>
        <SandBox />
      </div>
      <SecondPage/>
    </div>
  );
};

export default FirstPage;
