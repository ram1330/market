import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/Routes";

import Logo from "../../images/logo.svg";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Developed by <a href="#">Rusl</a>
      </div>

      <div className={styles.socials}>

        <a href="https://www.instagram.com/rusl.1339/" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://www.instagram.com/rusl.1339/" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://www.instagram.com/rusl.1339/" target="_blank">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>

      </div>
    </section>
  );
};

export default Footer;
