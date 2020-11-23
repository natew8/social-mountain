import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleInput = (value) => {
    this.setState({
      input: value
    })
  }


  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input onChange={(e) => this.handleInput(e.target.value.toLocaleLowerCase())} placeholder="Search Your Feed" />
          <SearchIcon onClick={() => { this.props.searchPostsFn(this.state.input) }} id="Search__icon" />
        </div>

      </section>
    )
  }
}