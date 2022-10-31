import React from 'react'
import '../styles/Header.css'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const Header = ({ close, theme }) => {
  return (
    <div className='header'>
      <IconButton onClick={close}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <h4>Saving Segment</h4>
    </div>
  )
}

export default Header
