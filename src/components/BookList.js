//FOLLOW FORMAT OF ARTICLELIST
// Will contain BookCard AND BookForm

// will go in App, will contain ArticleCard

import React, {useState, useEffect} from "react";
import BookCard from "./BookCard";
import BookForm from "./BookForm"

function BookList () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/books')
    .then((r) => r.json())
    .then((books) => setBooks(books))
    }, [])

    function addBook(newBook) {
      setBooks(books => [...books, newBook])
    }

  const bookList = books.map((book) => {
    return (
      <BookCard
      key={book.id}
      title={book.title}
      author={book.author}
      image={book.image}
      url={book.url}
        />
    ) })
  
  return (
    <div>
      <h2>Books</h2>
    <ul className="cards">
      {bookList}
    </ul>
    <BookForm bookList={bookList} addBook={addBook}/>
    </div>
  )
}

export default BookList;
