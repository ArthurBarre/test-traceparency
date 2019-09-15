import React, { Component } from 'react'
import SearchBar from "../subComponents/SearchBar"
import ModelItem from "../subComponents/ModelItem"
class Models extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      datas: this.props.data,
      modelId: 0
    }
  }
  print() {
    console.log(this.state.datas)
  }
  selectItem(id) {
    this.props.itemSelected(id)
  }
  render() {
    const datas = this.props.data
    return (
      <div className="models">
        <div className="modelSearchBar">
          <SearchBar onSubmit={this.selectItem} />
        </div>
        <div className="modelItems">
          {
            datas.map((data, index) => {
              return (<ModelItem key={index}
                onClick={() => this.selectItem(data.id)}
                title={data.editNameProductInput} />)
            })
          }
        </div>
        <button onClick={() => console.log(datas)}>console</button>
      </div>
    )
  }
}
export default Models;