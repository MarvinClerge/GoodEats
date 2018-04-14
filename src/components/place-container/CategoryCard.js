import React from 'react'

import './../../css/place/category-card.css'

const CategoryCard = props => {

  let title = props.category.charAt(0).toUpperCase() + props.category.slice(1)

  function changeCategory(event) {
    props.changeCategory(props.category.split(" ").join('_'))
  }

  return(
    <div className='category-card' onClick={changeCategory}>
      <h3>{title}</h3>
    </div>
  )
}

export default CategoryCard
