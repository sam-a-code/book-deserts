//will go in BookList

import React from 'react';

function BookCard({title, image, author, url}) {
    return (
            <div>
                <span>Book Title: {title}</span>
                <span>Author Name: {author}</span>
                <img src={image} alt={title}/>
            </div>
    )
}

export default BookCard;