import React, { Component } from 'react'
import '../styles/style.css'

class SearchBar extends Component {
  state = {
    chooseModel: 0,
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.chooseModel);
    console.log('modele choisi: ', this.state.chooseModel);
  }
  updateInputValue(evt) {
    this.setState({
      chooseModel: evt.target.value
    });
  }
  render() {
    return (
      <form className="searchBar" onSubmit={this.onSubmit}>
        <input className="searchBarInput" onChange={evt => this.updateInputValue(evt)}
          placeholder="Rechercher...">{this.props.searchBar}</input>
      </form>
    )
  }
}
export default SearchBar;