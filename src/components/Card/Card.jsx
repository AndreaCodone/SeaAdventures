import data from "../../utils/data";
import styles from "./Card.module.scss";
import { BiRightArrowAlt } from "react-icons/Bi";

const formatDateTime = (dateTimeString) => {
  const [date, time] = dateTimeString.split(" ");
  const [year, month, day] = date.split("-");
  const [hour, minutes, seconds] = time.split(":");
  return `${day}/${month}/${year} ${hour}:${minutes}`;

  // return (
  //   <>
  //     <span className={styles.datePart}>
  //       {day}-{month}-{year}
  //     </span>
  //     <br />
  //     <span className={styles.timePart}>
  //       {hour}:{minutes}
  //     </span>
  //   </>
  // );
};

const Card = () => {
  return (
    <div>
      {data.map((data) => (
        <div key={data.id} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.budget}>
              <h4>{data.budget.value}</h4>
              <h4>{data.budget.currencyCode}</h4>

              <h5 className={styles.costType}>{data.budget.costType}</h5>
            </div>

            <h4 className={styles.title}>{data.title}</h4>

            <div className={styles.departure}>
              <div className={styles.departureType}>
                <h5 className={styles.departureFrom}>PARTENZA DA:</h5>
                <p className={styles.departurePort}>{data.departure.Port}</p>
              </div>
              <div className={styles.numberOfDays}>
                <h5>{data.boatType}</h5>
                <h5>{data.numberOfDays} giorni</h5>
              </div>
            </div>

            <div className={styles.date}>
              <div className={styles.departureDate}>
                <h5>{formatDateTime(data.departureDate)}</h5>
              </div>

              <div className={styles.icon}>
                <BiRightArrowAlt />
              </div>

              <div className={styles.arrivalDate}>
                <h5>{formatDateTime(data.arrivalDate)}</h5>
              </div>
            </div>

            <div className={styles.availability}>
              <div className={styles.reservation}>
                <h5>{data.reservations}</h5>
                <h5 className={styles.reservationType}>
                  {data.reservationsType}
                </h5>
              </div>

              <div className={styles.available}>
                <h5 className={styles.numberAvailable}>Disponibilità</h5>
                <h5 className={styles.reservationsAvailable}>
                  {data.reservationsAvailable}
                </h5>
              </div>
            </div>

            <button className={styles.btn}>
              <h5>PRENOTA</h5>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
