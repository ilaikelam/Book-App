import { useState } from "react";
import { books as booksData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

import styles from "./Books.module.css";

function Books() {
  const [books, setBooks] = useState(booksData);
  const [liked, setliked] = useState([]);
  const [search, setSearch] = useState("");

  const likedlist = (Book, status) => {
    console.log(status);
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== Book.id);
      setliked(newLikedList);
    } else {
      setliked((liked) => [...liked, Book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const searchBook = books.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(searchBook);
    } else {
      setBooks(booksData);
    }
  };

  return (
    <>
      <SearchBox
        value={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard key={book.id} data={book} likedlist={likedlist} />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((i) => (
              <SideCard key={i.id} data={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
