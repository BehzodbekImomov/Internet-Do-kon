import React from "react";
import styles from "@/styles/Products.module.css";
const Products = () => {
  return (
    <div className="container">
      <div className={styles.products}>
        <p className={styles.title}>Gallery Collection</p>
        <h2>HOT PRODUCTS</h2>
        <div className={styles.products_catalogue}>
          <btn className={styles.catalogue_btn}>All products</btn>
          <btn className={styles.catalogue_btn}>Ceramics</btn>
          <btn className={styles.catalogue_btn}>Accessories</btn>
          <btn className={styles.catalogue_btn}>Home decor</btn>
          <btn className={styles.catalogue_btn}>Ikat Fabrics</btn>
          <btn className={styles.catalogue_btn}>Clothing</btn>
          <btn className={styles.catalogue_btn}>Embroidery</btn>
        </div>
        <div className={styles.products_cards}>
          <div className={styles.product_card}>
            <img src="/Rectangle2270.png" alt="img" />
            <button>Add to cart</button>
            <h4>Desert plates</h4>
            <p>Lorem ipsum dolot sit amet</p>
            <div className={styles.price}>
              <p className={styles.price_out}>58.00</p>
              <p className={styles.price_in}>52.00</p>
              <div className={styles.skidka}>50%</div>
              <div className={styles.stars}>
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image10.png" alt="stars" />
              </div>
            </div>
          </div>
          <div className={styles.product_card}>
            <img src="/Rectangle22701.png" alt="img" />
            <button>Add to cart</button>
            <h4>Desert plates</h4>
            <p>Lorem ipsum dolot sit amet</p>
            <div className={styles.price}>
              <p className={styles.price_out}>58.00</p>
              <p className={styles.price_in}>52.00</p>
              <div className={styles.skidka}>50%</div>
              <div className={styles.stars}>
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image10.png" alt="stars" />
              </div>
            </div>
            
          </div>{" "}
          <div className={styles.product_card}>
            <img src="/Rectangle2270.png" alt="img" />
            <button>Add to cart</button>
            <h4>Desert plates</h4>
            <p>Lorem ipsum dolot sit amet</p>
            <div className={styles.price}>
              <p className={styles.price_out}>58.00</p>
              <p className={styles.price_in}>52.00</p>
              <div className={styles.skidka}>50%</div>
              <div className={styles.stars}>
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image10.png" alt="stars" />
              </div>
            </div>
          </div>
          <div className={styles.product_card}>
            <img src="/Rectangle22701.png" alt="img" />
            <button>Add to cart</button>
            <h4>Desert plates</h4>
            <p>Lorem ipsum dolot sit amet</p>
            <div className={styles.price}>
              <p className={styles.price_out}>58.00</p>
              <p className={styles.price_in}>52.00</p>
              <div className={styles.skidka}>50%</div>
              <div className={styles.stars}>
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image23.png" alt="stars" />
                <img src="/image10.png" alt="stars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
