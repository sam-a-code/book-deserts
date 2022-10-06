import React from 'react';

function BookCard({id, title, image, author, url, handleRemoveBook, books}) {
    
    function handleDeleteClick() {
        fetch(`http://localhost:3000/books/${id}`, {
          method: "DELETE",
        });
        handleRemoveBook(id);
      }

    return (
        <div className='card'>
            <h1>{title}</h1>
            {image ?  <img src={image} alt={title}/> : null}
            <h3>By: {author}</h3>
            <a target="_blank" href={url} >Read more (or buy one to donate!)</a>
            <br></br>
            <br></br>
            <button onClick={handleDeleteClick} className="delete-btn">Click to remove from list</button>
        </div>
    )
}

export default BookCard;