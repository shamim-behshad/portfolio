import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shamim.behshad@gmail.com">shamim.behshad@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/shamim-behshad">github.com/shamim-behshad</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/telegram.png")}
            alt="LinkedIn icon"
          />
          <a href="https://t.me/shamimbhd">t.me/shamimbhd</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://ir.linkedin.com/in/shamim-behshad-510665306">linkedin.com/shamim-behshad</a>
        </li>
      </ul>
    </footer>
  );
};
