import data from "../../utils/data";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div>
      <div className={styles.card}>
        <h3>{data.value}</h3>
        <p>{data.costType}</p>
        <h2>{data.title}</h2>
        {/* <p>
        Departure: {data.departure.Port} ({data.departure.portCode},{" "}
        {data.departure.countryCode})
      </p>
      <p>
        Arrival: {data.arrival.Port} ({data.arrival.portCode},{" "}
        {data.arrival.countryCode})
      </p> */}
      </div>
    </div>
  );
};

export default Card;
