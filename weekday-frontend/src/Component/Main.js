import React from 'react'
import { useState } from 'react'
import Filter from './Filter'
import Jobs from './Jobs'

const Main = () => {
  const [filteredObject, setFilteredObject] = useState({})
  
  return (
    <div className='main'>
      
        <Filter filteredObject={filteredObject} setFilteredObject={setFilteredObject}/>
        <Jobs filteredObject={filteredObject}/>
        {console.log(filteredObject)}
    </div>
  )
}

export default Main