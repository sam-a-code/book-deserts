import React from 'react';

function ArticleCard({title, source, published, author, url}) {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <h3>{source}</h3>
            <p>Published: {published}</p>
            <a href={url} target="_blank">Read here</a>
            <br></br>
        </div>
    )
}

export default ArticleCard;