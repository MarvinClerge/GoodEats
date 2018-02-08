import React from 'react'

export default class Search extends React.Component {
  state = {
    type: "restaurant",
    radius: 100
  }

  handleTypeChange = event => {
    this.setState({ type: event.target.value })
  }

  handleRadiusChange = event => {
    this.setState({ radius: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    let type = this.state.type
    let radius = this.state.radius

    this.props.handleSearch(type, radius)
  }

  render(){
    return(
      <div>

        <form onSubmit={this.handleSubmit}>
          <input type='number' id='radius' onChange={this.handleRadiusChange}/>
          Range in meters

        <select id='type' onChange={this.handleTypeChange}>
          <option value='restaurant'>restaurant</option>
          <option value='bar'>bar</option>
        </select>
        Choose bars or restaurants

        <input type='submit' value='Search'/>
      </form>
      </div>
    )
  }
}
