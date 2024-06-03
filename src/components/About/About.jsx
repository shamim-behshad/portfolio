import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutPic.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                I have been studying programming for close to two years now, and
                my interest in the field continues to grow.I previously earned
                a certificate in web development skills from BIHE University. I
                have actively collaborated on various projects within the
                field, honing my skills through practical experience and
                teamwork, and now I’m eager to transition into a career in this
                area.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Enthusiast</h3>
              <p>
              Crafting responsive and user-friendly websites is my passion, backed by hands-on experience in creating optimized interfaces.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
