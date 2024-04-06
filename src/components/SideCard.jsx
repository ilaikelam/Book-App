import styles from "./SideCard.module.css";

function SideCard({ data: { image, title } }) {
  return (
    <div className={styles.card}>
      <img src={image} />
      <span>{title}</span>
    </div>
  );
}

export default SideCard;
