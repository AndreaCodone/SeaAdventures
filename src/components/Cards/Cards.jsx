import Card from "../Card/Card";
import data from "../../utils/data";
import styles from "./Cards.module.scss";

const Cards = () => {
  return (
    <>
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </>
  );
};

export default Cards;
