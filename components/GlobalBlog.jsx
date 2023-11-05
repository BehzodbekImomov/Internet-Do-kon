import React from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
const GlobalBlog = () => {
  return (
    <div className="container">
      <div className={styles.blogs}>
        <p className={styles.desc}>Latest articles</p>
        <h2 className={styles.title}>SILKROUTE GLOBAL BLOG</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.blog}>
              <img src="/Rectangle228(1).png" alt="img" />
              <h4>Silk Route Global prides</h4>
              <p>Silk Route Global prides itself on its authenticity. This unique and specialist business was awarded by ECG and Romford</p>
              <Link className={styles.link} href=''>Read more </Link>
            </div>
            <div className={styles.data}>
                <p>June 16, 2019</p>
                <p>No Comments</p>

            </div>
            <div className={styles.btn}>Blog</div>
          </div>
          
           <div className={styles.card}>
            <div className={styles.blog}>
              <img src="/Rectangle2281.png" alt="img" />
              <h4>Silk Route Global prides</h4>
              <p>Silk Route Global prides itself on its authenticity. This unique and specialist business was awarded by ECG and Romford</p>
              <Link className={styles.link}  href=''>Read more </Link>
            </div>
            <div className={styles.data}>
                <p>June 16, 2019</p>
                <p>No Comments</p>

            </div>
            <div className={styles.btn}>Blog</div>
          </div>
          
           <div className={styles.card}>
            <div className={styles.blog}>
              <img src="/Rectangle228(1).png" alt="img" />
              <h4>Silk Route Global prides</h4>
              <p>Silk Route Global prides itself on its authenticity. This unique and specialist business was awarded by ECG and Romford</p>
              <Link className={styles.link} href=''>Read more </Link>
            </div>
            <div className={styles.data}>
                <p>June 16, 2019</p>
                <p>No Comments</p>

            </div>
            <div className={styles.btn}>Blog</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBlog;
