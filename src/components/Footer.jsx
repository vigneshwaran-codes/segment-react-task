import React from 'react'
import '../styles/Footer.css'

const Footer = ({ close , handleSubmit}) => {
  return (
    <div className='footer'>
      <button className='btn-success' onClick={handleSubmit}>Save the Segment</button>
      <button className='btn-danger' onClick={close}>Cancel</button>
    </div>
  )
}

export default Footer
