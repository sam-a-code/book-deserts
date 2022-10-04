// will contain ResourceCard
// add to App 

import React, {useState, useEffect} from "react";
import ResourceCard from "./ResourceCard";


function ResourceList() {
  const [resources, setResources] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/resources')
    .then((r) => r.json())
    .then((resources) => setResources(resources))
    }, [])

  const resourceList = resources.map((resource) => {
    return (
      <ResourceCard
      key={resource.id}
      name={resource.name}
      url={resource.url}
      summary={resource.summary}
      image={resource.image}
        />
    ) })
  
  return (
    <div>
      <h2>People and organizations who are making a difference:</h2>
    <ul className="cards">
    {resourceList}
    </ul>
    </div>
  )
}

export default ResourceList;
