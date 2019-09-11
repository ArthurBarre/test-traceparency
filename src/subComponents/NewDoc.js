import React from 'react'

const NewDoc = () => {
  return (
    <div className="newDoc">
      <input className="editInput" placeholder="Nom_Document_1.pdf"></input>
      <div className="deleteDoc"></div>
      <div className="editDoc"></div>
    </div>
  )
}
export default NewDoc;