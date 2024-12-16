import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/computer.png";

const Poster = () => {
  return (
    <section className={styles.home}>
      <h3 className={styles.title}>Big sale 20%</h3>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>the bestseller of 2023</div>
          <h1 className={styles.head}>lennon R2D2 with nvidia 5090 ti</h1>
          <button className={styles.button}>Shop now</button>
        </div>
        <div className={styles.image}>
          <img src={BG} alt="computer" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
