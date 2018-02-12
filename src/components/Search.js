import React, {Component} from 'react'

export default class Search extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" id="radius" defaultValue="1000"/>

          <select id="type">
            <option value="restaurant" defaultValue >restaurant</option>
            <option value="bar">bar</option>
          </select>

          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}
