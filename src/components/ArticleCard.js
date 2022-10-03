// will go in ArticleList 

import React from 'react';

function ArticleCard({title, source, published, author, url}) {
    return (
            <div>
                <span>Article Name: {title}</span>
                <span>Author Name: {author}</span>
                <span>Source: {source}</span>
                <span>Published Date: {published}</span>
            </div>
    )
}

export default ArticleCard;