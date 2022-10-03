// will live in ResourceList

import React from 'react';

function ResourceCard({summary, name, url}) {
    return (
            <div>
                <span>Organization: {name}</span>
                <span>Summary: {summary}</span>
            </div>
    )
}

export default ResourceCard;