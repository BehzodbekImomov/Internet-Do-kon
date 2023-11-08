import React from "react";
import { Carousel } from "antd";

import styles from "@/styles/Intro.module.css";
const contentStyle = {
  margin: 0,
  height: "auto",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",

};
const Intro = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className={styles.intro}>
      <div className={styles.intro_slide}>
       <div>
       <Carousel autoplay afterChange={onChange}>
          <div>
            <img style={contentStyle} src="/Rectangle2252.png" alt="sdvgwr" />
          </div>
          <div>
            <img style={contentStyle} src="/Rectangle2252.png" alt="sdvgwr" />
          </div>
          <div>
            <img style={contentStyle} src="/Rectangle2252.png" alt="sdvgwr" />
          </div>
        </Carousel>
       </div>
        <div className={styles.intro_slide__info}>
          <h2>FREE DELIVERY</h2>
          <p>lorem ipsum dolor sit amet</p>
          <button>Find out more</button>
        </div>
      </div>
      <div className={styles.slide_indicator}></div>
    </div>
  );
};

export default Intro;
