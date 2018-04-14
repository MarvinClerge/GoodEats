import React,{ Component } from 'react'
import CategoryCard from './CategoryCard'
import PlaceCard from './PlaceCard'
import Adapter from './../../adapter'

import './../../css/place/place-container.css'

class PlaceContainer extends Component {

  state = {
    mode: 'search',
    category: 'none',
    results: []
  }

  search = () => {
    console.log('getting user location');
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('going to backend');
      Adapter.search({
        position: position,
        distance: 10000,
        category: this.state.category
      })
      .then(response => {
        this.setState({
          mode: 'result',
          results: response.results
        })
      })
    })
  }

  changeCategory = (category) => {
    this.setState({
      mode: 'category',
      category: category
    })
  }

  renderResults = () => {
    return this.state.results.map((result, index) => {
      return <PlaceCard key={index} {...result} />
    })
  }

  renderCategoryCards = () => {
    let categories = [
      'bakery', 'bar', 'cafe', 'convenience store',
      'liquor store', 'restaurant', 'store', 'supermarket'
    ]

    return categories.map((category, index) => {
      return <CategoryCard
        key={index}
        category={category}
        changeCategory={this.changeCategory} />
    })
  }

  render(){
    if (this.state.mode === 'result') {
      console.log('got result');
      return (
        <div className='place-container'>
          {this.renderResults()}
        </div>
      )
    } else if (this.state.mode === 'search') { // Selecting a category
      return (
        <div className='place-container'>
          <h2>Select a category to search.</h2>
          <div className='categories'>
            {this.renderCategoryCards()}
          </div>
        </div>
      )
    } else if (this.state.mode === 'category') { // Searching for places
      this.search()
      return (
        <div className='place-container'>
          <p>{'<-'} back</p>
          <h3>return results here</h3>
        </div>
      )
    }
  }
}

export default PlaceContainer
