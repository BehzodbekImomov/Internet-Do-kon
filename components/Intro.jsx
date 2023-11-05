import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "@/styles/Intro.module.css";
const Intro = () => {
  return (
    <div class={styles.intro}>
        <div class={styles.intro_slide}>
        <Carousel showThumbs={false}>
          
            <img src="/Rectangle2252.png" alt="sdvgwr"/>
            <img src="/Rectangle2252.png" alt="sdvgwr"/>
            <img src="/Rectangle2252.png" alt="sdvgwr"/>
          </Carousel>
            <div class={styles.intro_slide__info}>
                <h2>FREE DELIVERY</h2>
                <p>lorem ipsum dolor sit amet</p>
                <button>Find out more</button>
            </div>
        </div>
        <div class={styles.slide_indicator}></div>
    </div>
  )
}

export default Intro