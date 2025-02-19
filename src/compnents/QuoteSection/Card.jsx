import styles from "./Card.module.css";

function Card(props) {
  return (
    <>
      <div className={styles.quote_card}>
        <h5 className={styles.quote}>{props.quote}</h5>
        <p className={styles.writer}>{props.writer}</p>
      </div>
    </>
  );
}

export default Card;