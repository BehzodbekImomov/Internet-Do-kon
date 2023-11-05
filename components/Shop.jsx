import React from "react";
import styles from "@/styles/Shop.module.css";
const Shop = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.shop}>
          <div className={styles.vases}>
         <div className={styles.vases_title}> 
         <h3>Shop vases</h3>
          <button>Shop now</button>
         </div>
          <img src="/Rectangle2273.png" alt="img" />
          </div>
          <div className={styles.bowles}>
         <div className={styles.bowles_title}> 
         <h3>Shop bowls</h3>
          <button>Shop now</button>
         </div>
          <img src="/Rectangle2275.png" alt="img" />
          </div>
          <div className={styles.exclusivetiles}>
           <div className={styles.exclusivetiles_title}> 
         <h3>Shop exclusive tiles</h3>
          <button>Shop now</button>
         </div>
          <img src="/Rectangle2274.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
