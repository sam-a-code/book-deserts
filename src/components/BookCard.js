//will go in BookList

import React from 'react';

function BookCard({title, image, author, url}) {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <img src={image} alt={title}/>
            <h3>Author: {author}</h3>
            <a href={url} >Read more!</a>
        </div>
    )
}

export default BookCard;