// import { useState } from 'react'
// import '../styles/List.css'
// import Dropdown from './Dropdown'
// import axios from 'axios'

// const List = () => {
//   const [option, setOption] = useState([])
//   const [name, setName] = useState('')
//   const handleSubmit = async (e) => {
//     // * check dropdown value
//     e.preventDefault()
//     await axios.post('https://635d32bdfc2595be26553e5f.mockapi.io/dropdown')
//     setOption([...option, <Dropdown />])
//   }
//   return (
//     <div>
//       <div className='list-container'>
//       <div className='input-container'>

//       <input type='text' className='input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name of the segment' />
//       <p className='txt'>To save your segment, you need to add the schemas to build the query</p>
//     </div>
//       <div className='list-traits'>
//         <p className='traits-txt'><span className='dot-user' /> - User traits</p>
//         <p className='traits-txt'><span className='dot-group' /> - Group traits</p>
//       </div>
//       <div className='list-dropdown-container'>
//         {
//             option
//         }
//       </div>
//       <Dropdown />
//       <button className='btn-schema' onClick={handleSubmit}>+ Add new Schema</button>
//     </div>
//     </div>
//   )
// }

// export default List
