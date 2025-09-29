import React, { useState, useEffect } from "react";
import "./pagetwo.css";
import one from "../assets/1.png";
import hat from "../assets/hat.png";
import balloon1 from "../assets/balloon1.png";
import balloon2 from "../assets/balloon2.png";
import flower from "../assets/decorate_flower.png";
import decorate from "../assets/decorate.png";
import smiley from "../assets/smiley_icon.png";
import mewmew from "../assets/mewmew.gif";
import heart from "../assets/heart.png";
import moumita4 from "../assets/moumita4.jpg";
import gif1 from "../assets/gif1.gif";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import next from "../assets/nxt-btn.png";

function PageTwo() {
  const [showLetter, setShowLetter] = useState(false);
  const [letterText, setLetterText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const datetxt = "28 November 2025";
  const datatxtletter =
    "HHAPPY BIRTHDAY my bou, I Lovee youu. Im really blessed to have you in my life as a partner as a soulmate.";
  const titleLetter = "TTo you";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      const dateElement = document.querySelector(".date__of__birth");
      if (dateElement) {
        const i1 = document.createElement("i");
        i1.className = "fa-solid fa-star";
        dateElement.prepend(i1);

        const i2 = document.createElement("i");
        i2.className = "fa-solid fa-star";
        dateElement.appendChild(i2);
      }
    }, 13000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOpenLetter = () => {
    setShowLetter(true);
    setLetterText("");
    setTitleText("");

    // Add animation classes after a short delay
    setTimeout(() => {
      const heartLetter = document.getElementById("heart__letter");
      const loveImg = document.querySelector(".love__img");
      const mewmewImg = document.getElementById("mewmew");
      const hearts = document.querySelectorAll(".heart");

      if (heartLetter) heartLetter.classList.add("animationOp");
      if (loveImg) loveImg.classList.add("animationOp");
      if (mewmewImg) mewmewImg.classList.add("animationOp");

      hearts.forEach((heart) => {
        heart.classList.add("animation");
      });
    }, 100);

    // Title animation
    let currentIndexTitle = 0;
    const titleInterval = setInterval(() => {
      if (currentIndexTitle < titleLetter.length) {
        setTitleText((prev) => prev + titleLetter.charAt(currentIndexTitle));
        currentIndexTitle++;
      } else {
        clearInterval(titleInterval);
      }
    }, 100);

    // Letter text animation
    setTimeout(() => {
      let currentIndexLetter = 0;
      const letterInterval = setInterval(() => {
        if (currentIndexLetter < datatxtletter.length) {
          setLetterText(
            (prev) => prev + datatxtletter.charAt(currentIndexLetter)
          );
          currentIndexLetter++;
        } else {
          clearInterval(letterInterval);
        }
      }, 50);
    }, 2000);
  };

  const handleCloseLetter = () => {
    setShowLetter(false);
    setLetterText("");
    setTitleText("");

    // Remove animation classes
    const heartLetter = document.getElementById("heart__letter");
    const loveImg = document.querySelector(".love__img");
    const mewmewImg = document.getElementById("mewmew");
    const hearts = document.querySelectorAll(".heart");

    if (heartLetter) heartLetter.classList.remove("animationOp");
    if (loveImg) loveImg.classList.remove("animationOp");
    if (mewmewImg) mewmewImg.classList.remove("animationOp");

    hearts.forEach((heart) => {
      heart.classList.remove("animation");
    });
  };

  return (
    <div id="wrapper">
      <div className="flag__birthday">
        <img src={one} alt="" width="350" className="flag__left" />
        <img src={one} alt="" width="350" className="flag__right" />
      </div>
      <div className="content">
        <div className="left">
          <div className="title">
            <h1 className="happy">
              <span style={{ animationDelay: "2s" }}>H</span>
              <span style={{ animationDelay: "2.2s" }}>a</span>
              <span style={{ animationDelay: "2.4s" }}>p</span>
              <span style={{ animationDelay: "2.6s" }}>p</span>
              <span style={{ animationDelay: "2.8s" }}>y</span>
            </h1>
            <h1 className="birthday">
              <span style={{ animationDelay: "3s" }}>B</span>
              <span style={{ animationDelay: "3.2s" }}>i</span>
              <span style={{ animationDelay: "3.4s" }}>r</span>
              <span style={{ animationDelay: "3.6s" }}>t</span>
              <span style={{ animationDelay: "3.8s" }}>h</span>
              <span style={{ animationDelay: "4s" }}>d</span>
              <span style={{ animationDelay: "4.2s" }}>a</span>
              <span style={{ animationDelay: "4.4s" }}>y</span>
            </h1>
            <div className="hat">
              <img src={hat} alt="" width={isMobile ? "80" : "130"} />
            </div>
          </div>
          <div className="date__of__birth">
            <span>{datetxt}</span>
          </div>
          <div className="btn">
            <button id="btn__letter" onClick={handleOpenLetter}>
              Click here Moumita
              <i className="fa-regular fa-envelope"></i>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="box__account">
            <div className="image">
              <img src={moumita4} alt="" />
            </div>
            <div className="name">
              <i className="fa-solid fa-heart"></i>
              <span>Moumita</span>
              <i className="fa-solid fa-heart"></i>
            </div>
            <div className="balloon_one">
              <img width={isMobile ? "70" : "100"} src={balloon1} alt="" />
            </div>
            <div className="balloon_two">
              <img width={isMobile ? "70" : "100"} src={balloon2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="decorate_star star1" style={{ "--t": "5s" }}></div>
      <div className="decorate_star star2" style={{ "--t": "5.2s" }}></div>
      <div className="decorate_star star3" style={{ "--t": "5.4s" }}></div>
      <div className="decorate_star star4" style={{ "--t": "5.6s" }}></div>
      <div className="decorate_star star5" style={{ "--t": "5.8s" }}></div>
      <div className="decorate_flower--one" style={{ "--t": "5s" }}>
        <img width="20" src={flower} alt="" />
      </div>
      <div className="decorate_flower--two" style={{ "--t": "5.3s" }}>
        <img width="20" src={flower} alt="" />
      </div>
      <div className="decorate_flower--three" style={{ "--t": "5.6s" }}>
        <img width="20" src={flower} alt="" />
      </div>
      <div className="decorate_bottom">
        <img src={decorate} alt="" width="100" />
      </div>
      <div className="smiley__icon">
        <img src={smiley} alt="" width={isMobile ? "70" : "100"} />
      </div>
      {showLetter && (
        <div className="box__letter">
          <div className="letter__border">
            <div className="letter">
              <div className="title__letter">{titleText}</div>
              <div className="content__letter">
                <div className="left">
                  <img id="heart__letter" src={gif1} alt="" />
                  <img
                    className="heart heart_1"
                    style={{ "--t": "0.2s" }}
                    width="20"
                    src={heart}
                    alt=""
                  />
                  <img
                    className="heart heart_2"
                    style={{ "--t": "0.4s" }}
                    width="20"
                    src={heart}
                    alt=""
                  />
                  <img
                    className="heart heart_3"
                    style={{ "--t": "0.6s" }}
                    width="20"
                    src={heart}
                    alt=""
                  />
                  <img
                    className="heart heart_4"
                    style={{ "--t": "0.8s" }}
                    width="20"
                    src={heart}
                    alt=""
                  />
                </div>
                <div className="right">
                  <div className="text__letter">
                    <p>{letterText}</p>
                  </div>
                  <img
                    id="mewmew"
                    width={isMobile ? "50" : "80"}
                    src={mewmew}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="close" onClick={handleCloseLetter}>
              <IoMdClose />
            </div>
          </div>
        </div>
      )}
      <div>
        <Link to="/page-three" className="absolute bottom-4 left-4">
          <img className="w-[100px]" src={next} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default PageTwo;
