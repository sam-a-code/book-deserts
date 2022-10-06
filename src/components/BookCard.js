import React from 'react';

function BookCard({id, title, image, author, url, handleRemoveListing, books}) {
    
    function handleDeleteClick() {
        fetch(`http://localhost:3000/books/${id}`, {
          method: "DELETE",
        });
        handleRemoveListing(id);
        console.log(id)
      }
    console.log(id)
    return (
        <div className='card'>
            <button onClick={handleDeleteClick} className="delete-btn">X</button>
            <h1>{title}</h1>
            {image ?  <img src={image} alt={title}/> : null}
            <h3>By: {author}</h3>
            <a target="_blank" href={url} >Read more (or buy one to donate!)</a>
        </div>
    )
}

export default BookCard;