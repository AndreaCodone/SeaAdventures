import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerBackground}>
        <img src="/images/banner.jpeg" alt="Sea Adventures" />
      </div>

      <div className={styles.bannerContent}>
        <h2>+20 Destionazioni</h2>
        <h2>+15 Imbarcazioni</h2>
        <h2>+40 Itinerari</h2>
      </div>
    </div>
  );
};

export default Banner;
