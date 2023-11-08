import Link from "next/link";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "@/styles/Products.module.css";
export default class Slick extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={styles.media_slider}>
        <Slider className={styles.prodact_catalogue_media} {...settings}>
          <div>
            <Link href="" className={styles.catalogue_btn_media}>
              All products
            </Link>
          </div>
          <div>
            {" "}
            <Link href="" className={styles.catalogue_btn_media}>
              Ceramics
            </Link>
          </div>
          <div>
            {" "}
            <Link href="" className={styles.catalogue_btn_media}>
              Accessories
            </Link>
          </div>
          <div>
            {" "}
            <Link href="" className={styles.catalogue_btn_media}>
              Home decor
            </Link>
          </div>
          <div>
            {" "}
            <Link href="" className={styles.catalogue_btn_media}>
              Ikat Fabrics
            </Link>
          </div>
          <div>
            {" "}
            <Link href="" className={styles.catalogue_btn_media}>
              Clothing
            </Link>
          </div>
          <div>
            {" "}
            <Link href="" className={styles.catalogue_btn_media}>
              Embroidery
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
