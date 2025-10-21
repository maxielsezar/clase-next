import React from 'react'
import AnimatedList from './lista'


  

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 
const page = () => {
  return (
    <div>
      <h1 className='bg-blue-800 text-7xl text-center'>Bolsa de empleo</h1>
      <p className='text-3xl'>filtrar por puesto</p>
      
      <AnimatedList
  items={items}
  onItemSelect={(item, index) => console.log(item, index)}
  showGradients={true}
  enableArrowNavigation={true}
  displayScrollbar={true}
/>
    </div>
  )
}

export default page
