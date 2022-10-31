// import React, { useState } from 'react'
// import '../styles/Dropdown.css'
// import { FaMinus } from 'react-icons/fa'
// import Select from 'react-select'

// const Dropdown = () => {
//   const [selectedValue, setSelectedValue] = useState([])
//   const ref = React.useRef()

//   const options = [
//     {  value: '', label: 'Add schema to segment' },
//     { value: 'first_name', label:'First Name' },
//     { value: 'last_name', label: 'Last Name' },
//     { value: 'gender', label: 'Gender' },
//     { value: 'age', label: 'Age' },
//     { value: 'account_name', label: 'Account Name' },
//     { value: 'city', label: 'City' },
//     { value: 'state', label: 'State' },
//   ]

//   const handleChange = (value)  => {
//     if(value !== null){
//     setSelectedValue(selectedValue => [...selectedValue, value])
//     ref.current.selected.clearValue()
//   }
// }

//   const handleDelete = (e) => {
//     e.preventDefault()
//   }

//   return (
//     <div className='dropdown-container'>
//       <Select className='dropdown' ref={ref} options={options} onChange={handleChange} value={null} />
//       {console.log(selectedValue)}
//       <button className='remove-btn' onClick={() => handleDelete()}><FaMinus /></button>
//     </div>
//   )
// }

// export default Dropdown
