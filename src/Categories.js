import React from 'react'

const Categories = ({filterItems, Items}) => {
  return (
    <div className='btn-container'>
         <button className='filter-btn' onClick = {() => filterItems('all')}>
        All
      </button>
      <button className='filter-btn' onClick = {() => filterItems('breakfast')}>
        breakfast
      </button>
      <button className='filter-btn' onClick = {() => filterItems('lunch')}>
        Lunch
      </button>
      <button className='filter-btn' onClick = {() => filterItems('shakes')}>
        Shakes
      </button>
    </div>
  )
}

export default Categories