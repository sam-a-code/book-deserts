//will go in BookList

import React from 'react';

function BookCard({title, image, author, url}) {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <img src={image} alt={title}/>
            <h3>By: {author}</h3>
            <a target="_blank" href={url} >Read more (or buy one to donate!)</a>
        </div>
    )
}

export default BookCard;