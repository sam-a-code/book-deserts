import React from 'react';

function ResourceCard({summary, name, url, image}) {
    return (
        <div className='card'>
            <img src={image}/>
            <h2>{name}</h2>
            <p>{summary}</p>
            <a href={url} target="_blank">Read more!</a>
        </div>
    )
}

export default ResourceCard;