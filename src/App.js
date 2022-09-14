import React, {useState} from 'react';
import './App.css';
import Menu from './Menu'
import Categories from './Categories';
import Items from './data';


function App() {
  const [menuItems, setMenuItems] = useState(Items)
  const [categories, setCategories] = useState([])

  const filterItems = (categories) => {
    if(categories === 'all'){
      setMenuItems(Items);
      return;
    }
    const newItems = Items.filter((item => item.category === categories))
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
           <h2>Our Menu</h2>
           <div className='underline'></div>
        </div>
        <Categories filterItems = {filterItems}/>
        <Menu items = {menuItems}/>
      </section>
    </main>
  )
}

export default App;
