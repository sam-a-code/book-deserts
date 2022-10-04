// will go in ArticleList 

import React from 'react';

function ArticleCard({title, source, published, author, url}) {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <h2>Author: {author}</h2>
            <h3>Source: {source}</h3>
            <p>Published Date: {published}</p>
            <a href={url} target="_blank">Read here</a>
            <br></br>
        </div>
    )
}

export default ArticleCard;