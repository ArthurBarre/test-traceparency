import React, { Component } from 'react';
//import "../styles/style"



class ModelItem extends Component {
  render() {
    return (
      <div className="modelItem">
        <div className="modelItemWrapper">
          <div className="modelPicture" />
          <div className="modelInfos">
            <h2 className="modelTitle">{this.props.title}</h2>
            <div className="modelInfosText">
              {/* <button onClick={() => console.log('datas: ', this.state.datas)}>
                test
              </button>  */}
              {/* <p>{this.props.tag}</p>
              <p>#{this.props.number}</p> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ModelItem;