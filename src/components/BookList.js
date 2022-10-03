//FOLLOW FORMAT OF ARTICLELIST
// Will contain BookCard AND BookForm

// will go in App, will contain ArticleCard

import React from "react";
import BookCard from "./BookCard";
import { books } from "../db"

function BookList () {

  const bookList = books.map((book) => {
    return (
      <BookCard
      key={book.title}
      title={book.title}
      author={book.author}
      image={book.image}
      url={book.url}
        />
    ) })
  
  return <div>
    <h1>Books</h1>
    {bookList}
    </div>;
}

export default BookList;
