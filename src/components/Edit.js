import React, { Component } from 'react'
import CheckBox from '../subComponents/Quantity'

class Edit extends Component {
  render() {
    return (
      <div className="edit">
        <div className="editWrapper">
          <div className="editPictureProduct" />
          <div className="editBasicProduct">
            <input className="editProductInput" placeholder="Producteur/Marque" />
            <input className="editProductInput" placeholder="Nom du produit" />
            <input className="editProductInput" placeholder="Annee d'achat" />
          </div>
          <div className="editQuantity">
            <CheckBox />
          </div>
          <input className="editInformationsProduct" placeholder="big text"></input>
        </div>
      </div>
    )
  }
}
export default Edit;

//<p>INFORRMATIONS PRODUITS (declaratives) <br /> 1.Fabrique par...<br />2. Materiaux en provenance de ...<br />3. Destines a  ...</p>