import React from "react";

function ResourceList() {

  const resourceList = ITEM.map((PARAM) => {
    return (
      <div >
        <p>Organization:</p>
        <p>Link</p>
        <p>Summary</p>
      </div>
    ) })
  


  return <div>
    <h1>Donations + Resources</h1>
    {resourceList}
    </div>;
}

export default ResourceList;
