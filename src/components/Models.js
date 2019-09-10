import React, { Component } from 'react'
import SearchBar from "../subComponents/SearchBar"
import ModelItem from "../subComponents/ModelItem"
class Models extends Component {
  render() {
    return (
      <div className="models">
        <div className="modelSearchBar">
          <SearchBar />
        </div>
        <div className="modelItems">
          <ModelItem title="titre" tag="tag" number="122321" />
          <ModelItem title="titre2" tag="tag2" number="122321" />
          <ModelItem title="titre3" tag="tag3" number="122321" />
          <ModelItem title="titre4" tag="tag4" number="122321" />

        </div>
      </div>
    )
  }
}
export default Models;