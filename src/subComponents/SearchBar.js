import React, { Component } from 'react'
import '../styles/style.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <input className="searchBarInput" placeholder="Rechercher..."></input>
      </div>
    )
  }
}
export default SearchBar;