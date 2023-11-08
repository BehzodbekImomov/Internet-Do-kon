import React from 'react'
import styles from "@/styles/Footer.module.css";
import Link from 'next/link';
const Footer = () => {
  return (
   <footer>
     <div className='container'>
      <div className={styles.footer}>
<div className={styles.about}>
  <h4>About market</h4>
<div className={styles.li}>
<Link href=''>Our blog</Link>
  <Link href=''>Contact</Link>
  <Link href=''>About us</Link>
  <Link href=''>FAQ</Link>
</div>
</div>
<div className={styles.collection}>
  <h4>Collection silk route</h4>
<div className={styles.li}>
<Link href=''>Our blog</Link>
  <Link href=''>Contact</Link>
  <Link href=''>About us</Link>
  <Link href=''>FAQ</Link>
</div>
</div>
<div className={styles.help}>
<h4>Help & Info</h4>
<div className={styles.li}>
<Link href=''>Terms & conditions</Link>
  <Link href=''>Privacy policy</Link>
</div>

</div>
<div className={styles.contact_us}>
  <h4>Contact us</h4>
  <form className={styles.form} action="">
  <input type="text" />
  <input type="text" />
  <button>Subscribe</button>
  </form>
</div>
      </div>
    </div>
   </footer>
  )
}

export default Footer