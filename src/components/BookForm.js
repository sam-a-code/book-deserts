import React, { useEffect, useState} from "react";

function BookForm({addBook, bookList}) {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [author, setAuthor] = useState("")
  const [url, setURL] = useState("")

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
        url: url
      })  
    })
    let newBook = {
      title: title,
      image: image,
      author: author,
      url: url
    }
    addBook(newBook)
  }

return (
    <div onSubmit={handleSubmit} className="form-box">
      <h2 className="form">📚 Add a new book to our list!</h2>
      <form className="form">
        <input className="form-input" type="text" name="title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br></br>
        <input className="form-input" type="text" name="author" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <br></br>
        <input className="form-input" type="text" name="link" placeholder="Book link" value={url} onChange={(e) => setURL(e.target.value)}/>
        <br></br>
        <input className="form-input" type="text" name="image" placeholder="Book cover image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
        <br></br>
        <button className="form-submit" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
