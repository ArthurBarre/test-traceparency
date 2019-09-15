import React, { Component } from 'react'

class Recap extends Component {
  constructor(props) {
    super(props);
    console.log('------------------------------------');
    console.log(props);
    console.log('------------------------------------');
    this.state = {
      name: this.props.data.editNameProductInput,
      year: this.props.data.editYearProductInput,
      quantity: '3L',
      infoProduct: this.props.data.editInformationsProduct,
      editLink: this.props.data.editLink,

    }
  }
  render() {
    return (
      <div className="recap">
        <div className="recapMainPicture"></div>
        <div className="recapTitleContainer">
          <p className="recapTitle">{this.state.name} {this.state.year} {this.state.quantity}</p>
        </div>
        <div className="recapIdCertified"></div>
        <div className="recapStatus">
          <div className="recapStatusLeft">
            <div className="recapStatusWitness"></div>
            <h6 className="recapStatusText">Status : all clear</h6>
          </div>
          <div><h6>info</h6></div>
        </div>
        <div className="recapIdentity">
          <div className="recapId">
            <h6 className="recapIdText">ID NUMBER 12231212</h6>
          </div>
          <div className="recapId">
            <h6 className="recapIdText">ID CERTIFIED BY Arthur</h6>
          </div>
          <div className="recapId">
            <h6 className="recapIdText">REGISTRATION DATE 12/12/2012</h6>
          </div>
        </div>
        <div className="recapStory">
          <h5 className="recapSubtitle">Product story</h5>
          {this.state.infoProduct}
        </div>
        <div className="recapInfos">
          <h6 className="recapSubtitle">Notes about your product</h6>
        </div>
        <div className="recapPictures">
          <h6 className="recapSubtitle">Picture of your product</h6>
        </div>
        <div className="recapDocs">
          <h6 className="recapSubtitle">Documents</h6>
          {this.state.editLink}
        </div>
        <div className="recapMoreDocs">
          <h6 className="recapSubtitleDocs">MORE INFORMATIONS</h6>
        </div>
      </div>
    )
  }
}
export default Recap;