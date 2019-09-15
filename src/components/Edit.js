import React, { Component } from 'react'

class Edit extends Component {
  constructor() {
    super()
    this.state = {
      formControls: {
        editProductorInput: {
          value: ''
        },
        editNameProductInput: {
          value: ''
        },
        editYearProductInput: {
          value: ''
        },
        checkBox75: {
          value: ''
        },
        checkBox150: {
          value: ''
        },
        checkBox300: {
          value: ''
        },
        editInformationsProduct: {
          value: ''
        },
        editLink: {
          value: ''
        }
      }
    }
  }

  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.formControls);
    console.log('this.state.formControls: ', this.state.formControls);
  }

  render() {
    return (
      <form className="edit" onSubmit={this.onSubmit}>
        <div className="editWrapper">
          <div className="editPictureProduct" />
          <div className="editBasicProduct">
            <input className="editProductInput"
              type="text"
              name="editProductorInput"
              value={this.state.formControls.editProductorInput.value}
              onChange={this.changeHandler} placeholder="Producteur/Marque" />
            <input className="editProductInput"
              type="text"
              name="editNameProductInput"
              value={this.state.formControls.editNameProductInput.value}
              onChange={this.changeHandler} placeholder="Nom du produit" />
            <input className="editProductInput"
              type="text"
              name="editYearProductInput"
              value={this.state.formControls.editYearProductInput.value}
              onChange={this.changeHandler}
              placeholder="Annee d'achat" />
          </div>
          <div className="editQuantity">
            <p className="editQuantityTitle">Contenances possibles</p>
            <div>
              <input id="75"
                type="checkbox"
                name="checkBox75"
                value={this.state.formControls.checkBox75.value}
                onChange={this.changeHandler} />
              <label className="checkboxLabel" htmlFor="75">75 cL</label>
            </div>
            <div>
              <input id="1.5"
                type="checkbox"
                name="checkBox150"
                value={this.state.formControls.checkBox150.value}
                onChange={this.changeHandler} />
              <label className="checkboxLabel" htmlFor="1.5">1.5 L</label>
            </div>
            <div>
              <input id="3"
                type="checkbox"
                name="checkBox300"
                value={this.state.formControls.checkBox300.value}
                onChange={this.changeHandler}
              />
              <label className="checkboxLabel" htmlFor="3">3 L</label>
            </div>
          </div>
          <input className="editInformationsProduct"
            type="text"
            name="editInformationsProduct"
            value={this.state.formControls.editInformationsProduct.value}
            onChange={this.changeHandler}
            placeholder="big text"></input>
          <div className="editDocContainer">
            <div className="newDoc">
              <input className="editInput" placeholder="Nom_Document_1.pdf"></input>
              <div className="deleteDoc"></div>
              <div className="editDoc"></div>
            </div>
            <div className="newDoc">
              <input className="editInput" placeholder="Nom_Document_1.pdf"></input>
              <div className="deleteDoc"></div>
              <div className="editDoc"></div>
            </div>
            <div className="addDockBtnContainer">
              <h6 className="addDockBtnText ">ajouter un document</h6>
            </div>
            <input className="editLink"
              type="text"
              name="editLink"
              value={this.state.formControls.editLink.value}
              onChange={this.changeHandler}
              placeholder="Lien URL vers davantage d'informations"></input>
          </div>

          <p className="warningEdit">Attention toutes ces informations sont generiques et communes à tous les certificats</p>
          <button className="saveModelBtnContainer">
            <h6 className="saveModelBtnText ">enregistrer le model</h6>
          </button>
        </div>
      </form>
    )
  }
}
export default Edit;