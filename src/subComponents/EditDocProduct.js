import React from 'react'
import AddDock from './AddDoc'
import deleteImg from "../assets/trash.png";
import editImg from "../assets/edit.png";
const EditDocProduct = () => {
  return (
    <div className="editDocContainer">
      <div class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
        </div>
        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </div>
      <div className="newDoc">
        <input className="newDocInput"></input>
        <div className="deleteDoc">
          <img className="deleteDocImg" src={deleteImg} />
        </div>
        <div className="deleteDoc">
          <img className="deleteDocImg" src={editImg} />
        </div>

      </div>
      <AddDock />


    </div>
  )
}
export default EditDocProduct;