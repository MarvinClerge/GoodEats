import React, {Component} from 'react'
import '../css/Search.css'
import MaterialIcon from 'react-google-material-icons'

export default class Search extends Component {
  state = {
    radius: 1000,
    type: 'restaurant'
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.radius, this.state.type)
  }

  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="radius" onChange={this.handleInputChange} value={this.state.radius} id="radius"/>
          <label htmlFor="radius">meters</label>

          <select name="type" onChange={this.handleInputChange} value={this.state.type} id="type">
            <option value="restaurant" className='option'>Restaurant</option>
            <option value="bar" className='option'>Bar</option>
          </select>

          <input type='submit' className='search' value="Search" />
        </form>
      </div>
    )
  }
}
