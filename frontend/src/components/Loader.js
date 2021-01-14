import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className='py-3'>
      <Spinner
        animation='border'
        role='status'
        style={{
          width: 30,
          height: 30,
          margin: 'auto',
          display: 'block',
        }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loader
