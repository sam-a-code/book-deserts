// will live in ResourceList

import React from 'react';

function ResourceCard({summary, name, url}) {
    return (
        <div className='card'>
            <h2>Organization: {name}</h2>
            <p>{summary}</p>
            <a href={url} target="_blank">Read more!</a>
        </div>
    )
}

export default ResourceCard;