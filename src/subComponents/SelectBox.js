import React, { Component } from 'react'
import '../styles/style.css'
import App from "../index"
class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.app = new App(this);
  }
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItems: null
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }
  selectItem(item) {
    this.app.getValue(item)
  }
  componentDidMount(test) {
    // this.app.getValue(test)
  }
  render() {
    return (
      <div>
        <div className="selectBoxHeader">
          <div className="selectBoxArrow" onClick={this.dropDown}>
            <span className={`${this.state.showItems ? 'selectBoxArrowUp' : 'selectBoxArrowDown'}`} />
          </div>
          <h2 className="selectBoxTitle">{this.props.title}</h2>
        </div>
        <div style={{ display: this.state.showItems ? 'block' : 'none' }}>
          {
            this.state.items.map(item => <div className="selectBoxItem"
              key={item.id} onClick={() => this.selectItem(item.id)}>
              {item.value}
            </div>
            )
          }
        </div>
      </div>
    )
  }
}
export default SelectBox;