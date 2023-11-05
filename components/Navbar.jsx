import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_inner}>
            <div className={styles.header_logo}>
                <img src="/Group10.png" alt="silk route global"/>
            </div>
            <div className={styles.header_menu}>
                    <Link href="">About</Link>
                    <Link href="">Contact</Link>
                    <Link href="">Craftsmanship</Link>
                </div>
                <div className={styles.header_cart}>
                    <button>
                        <img src="/icons/search02.png" alt="logo"/>
                    </button>
                    <div className={styles.cart_price}>
                        <img src="/icons/eurocircle.png" alt="logo"/>
                        <span>0.00</span>
                    </div>
                    <div className={styles.cart_icon}>
                        <img src="/icons/image33.png" alt="logo"/>
                    </div>
                </div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.container}>
            <div className={styles.menu_inner}>
                <div className={styles.menu_item}>Rugs</div>
                <div className={styles.menu_item}>Ceramics</div>
                <div className={styles.menu_item}>Home decor</div>
                <div className={styles.menu_item}>Ikat fabrics</div>
                <div className={styles.menu_item}>Clothing</div>
                <div className={styles.menu_item}>Embroidery</div>
                <div className={styles.menu_item}>Accessories</div>
                <div className={styles.menu_item}>View all</div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;
