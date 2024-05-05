import React from 'react'
import Filter from './Filter'
import Jobs from './Jobs'

const Main = () => {

  return (
    <div className='main'>
       <p className='header'>Search jobs</p>
      <Filter />
      <Jobs />
    </div>
  )
}

export default Main