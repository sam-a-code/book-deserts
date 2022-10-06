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
    function handleRemoveListing(id) {
      const removeBook = books.filter((book) => book.id !== id);
      setBooks(removeBook);
    }
    
  const bookList = books.map((book) => {
    return (
      <BookCard
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
      image={book.image}
      url={book.url}
      books={books}
      handleRemoveListing={handleRemoveListing}
        />
    ) })
  
  return (
    <div>
      <h2 className="section-heading">Books (treat yourself or buy one to donate!)</h2>
      <p>📚 Scroll to the bottom to add your own book suggestions to our list</p>
    <ul className="cards">
      {bookList}
    </ul>
    <BookForm bookList={bookList} addBook={addBook}/>
    </div>
  )
}

export default BookList;
