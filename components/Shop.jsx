import React from "react";
import styles from "@/styles/Shop.module.css";
const Shop = () => {
  return (
    <div>
      <div className="container">
       
        <div className={styles.shop}>
          <div className={styles.shop_imgs}>
         <div className={styles.vases}>
         <img  src="/Rectangle2273.png" alt="img" />
         </div>
            <div className={styles.bowles}>
            <img  src="/Rectangle2275.png" alt="img" />
            </div>
           <div className={styles.tiles}>
           <img  src="/Rectangle2274.png" alt="img" />
           </div>
          </div>
          <div className={styles.shop_title}>
            <div className={styles.title1}>
              <h4>Shop vases</h4>
              <button>Shop now</button>
            </div>
            <div className={styles.title2}>
              <h4>Shop bowls</h4>
              <button>Shop now</button>
            </div>
            <div className={styles.title3}>
              <h4>Shop exclusive tiles</h4>
              <button>Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
