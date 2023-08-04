import Card from "../Card/Card";
import data from "../../utils/data";
import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <>
      <div className={styles.cardsContainer}>
        {data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default Cards;
