// components/Hero.js

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <img src="/images/hero.jpeg" alt="Sea Adventures" />
      </div>

      <div className={styles.heroContent}>
        <h1>Lorem ipsum dolor sit amet</h1>
      </div>
    </div>
  );
};

export default Hero;
