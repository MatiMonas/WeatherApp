import React from "react";
import styles from "./styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>About me</h4>
      <div className={styles.animated}>
        <p>Hello, i'm Matías Monastirsky! </p>
        <p>
          I'm 24 years old and i'm currently studying to become a Full Stack Web
          Developoer at soyhenry.com
        </p>

        <p>
          This is my first App created with React, as you can see it's a simple
          Weather App
        </p>
        <p>It was made with the openweathermap.org API</p>
      </div>
    </div>
  );
}