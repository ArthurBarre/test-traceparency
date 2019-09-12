import React from 'react'
import AddDock from './AddDocBtn'
import NewDoc from './NewDoc'

const EditDocProduct = () => {
  return (
    <div className="editDocContainer">
      <NewDoc />
      <NewDoc />
      <NewDoc />
      <AddDock />
      <input className="editLink" placeholder="Lien URL vers davantage d'informations"></input>
    </div>
  )
}
export default EditDocProduct;