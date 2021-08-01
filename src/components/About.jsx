import React from "react";
import styles from "./styles/About.module.css";
import { FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>About me</h4>
      <div className={styles.animated}>
        <p>Hello, I'm Matías Monastirsky! </p>
        <p>
          I'm 24 years old and I'm currently studying to become a Full Stack Web
          Developer at soyhenry.com.
        </p>

        <p>
          This is my first App created with React, as you can see it's a simple
          Weather App.
        </p>
        <p>It was made with the openweathermap.org API.</p>
        <p>
          If you would like to contact or chat with me, all my information is in
          my linkedin{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/mat%C3%ADas-monastirsky-b0aa7a20b/"
            target="_blank"
          >
            <FaLinkedin className={styles.linkedin} />
          </a>
        </p>
      </div>
    </div>
  );
}
