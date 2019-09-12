import React, { Component } from 'react'
import '../styles/style.css'
class SelectBox extends Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItems: this.props.items && this.props.items[0],
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }
  selectItem(item) {
    if (item === 3) {
      var itemSelected = 3;
      return itemSelected;
    }
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