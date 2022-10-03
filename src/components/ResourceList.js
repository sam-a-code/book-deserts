// will contain ResourceCard
// add to App 

import React from "react";
import ResourceCard from "./ResourceCard";
import { resources } from "../db"


function ResourceList() {

  const resourceList = resources.map((resource) => {
    return (
      <ResourceCard
      key={resource.name}
      name={resource.name}
      url={resource.url}
      summary={resource.summary}
        />
    ) })
  
  return <div>
    <h1>Resources</h1>
    {resourceList}
    </div>;
}

export default ResourceList;
