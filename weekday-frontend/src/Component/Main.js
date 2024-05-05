import React, { Suspense } from 'react'
import Filter from './Filter'

const Jobs = React.lazy(() => import('./Jobs'));


const Main = () => {

  return (
    <div className='main'>
     
      <p className='header'>Search jobs</p>
      <Filter />
      <Suspense fallback={<p>Jobs are loading!</p>}>
        <Jobs />
      </Suspense>


    </div>
  )
}

export default Main