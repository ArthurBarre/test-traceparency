import React, { Component } from 'react'
import CheckBox from '../subComponents/Quantity'
import EditDocProduct from '../subComponents/EditDocProduct';
import SaveModel from '../subComponents/SaveModel';

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
            <p className="editQuantityTitle">Contenances possibles</p>
            <CheckBox />
          </div>
          <input className="editInformationsProduct" placeholder="big text"></input>
          <EditDocProduct />
          <p className="warningEdit">Attention toutes ces informations sont generiques et communes à tous les certificats</p>
          <SaveModel />
        </div>
      </div>
    )
  }
}
export default Edit;

//<p>INFORRMATIONS PRODUITS (declaratives) <br /> 1.Fabrique par...<br />2. Materiaux en provenance de ...<br />3. Destines a  ...</p>