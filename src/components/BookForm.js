// will go in BookList
import React, { useEffect, useState} from "react";

function BookForm({addBook, bookList}) {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [author, setAuthor] = useState("")
  const [link, setLink] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("yay!")
    fetch('http://localhost:3000/books', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"},
      body: JSON.stringify({
        title: title,
        image: image,
        author: author,
        link: link
      })  
    })
    let newBook = {
      title: title,
      image: image,
      author: author,
      link: link
    }
    addBook(newBook)
  }

return (
    <div onSubmit={handleSubmit}>
      <h2>New Book</h2>
      <form className="form">
        <input type="text" name="title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
        <input type="text" name="author" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <input type="text" name="link" placeholder="Book link" value={link} onChange={(e) => setLink(e.target.value)}/>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
