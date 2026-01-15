import styles from "./ProductCard.module.css";

export default function ProductCard({ image, title, price }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>₹{price}</p>
      </div>
    </div>
  );
}
