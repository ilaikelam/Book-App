import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

import styles from "./BookCard.module.css";

function BookCard({ data, likedlist }) {
  const { image, title, author, language, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike((like) => !like);
    likedlist(data,like);
  };

  return (
    <div className={styles.card}>
      <img src={image} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "#fff"} fontSize="1.8rem" />{" "}
      </button>
    </div>
  );
}

export default BookCard;
