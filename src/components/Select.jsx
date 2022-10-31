import { useState } from 'react'
import '../styles/Select.css'
import { FaMinus } from 'react-icons/fa'
import axios from 'axios'

export default function Select ({ handleSave }) {
  const [name, setName] = useState('')
  const [formVal, setFormVal] = useState([])
  const [schema, setSchema] = useState([])

  const handleChange = (e, index) => {
    const data = [...formVal]
    data[index][e.target.value] = e.target.value
    setFormVal(data)
  }

  const addSelect = () => {
    const object = {
    }
    setFormVal([...formVal, object])
  }

  // saving Data
  const handleSubmit = async (e) => {
    e.preventDefault()
    axios.post('https://webhook.site/1becb8a6-7fb7-4387-8a10-9462b955e9ad', {
      segment_name: name,
      schema: formVal
    })
      .then((response) => {
        setSchema([...schema, { segment_name: name, schema: formVal }])
      })
      .catch(err => console.log(err))
    console.log({ name, formVal })
    setFormVal([])
    setName('')
  }

  const resetVal = (e) => {
    e.preventDefault()
    setFormVal([])
  }

  const removeSelect = (index) => {
    const data = [...formVal]
    data.splice(index, 1)
    setFormVal(data)
  }
  return (
    <div>
      <form>
      <div className='input-container'>
      <p className='txt'>Enter the Name of the segment</p>
      <input className='input' type='text' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
      <p className='txt'>To save your segment, you need to add the schemas to build the query</p>
    </div>
      <div className='list-traits'>
      <p className='traits-txt'><span className='dot-user' /> - User traits</p>
      <p className='traits-txt'><span className='dot-group' /> - Group traits</p>
    </div>

      <div className='list-dropdown-container'>
      {
      formVal.map((schema, index) => {
        return (
          <div key={index}>
            <select className='select-option' value={schema.value} onChange={(e) => handleChange(e, index)} autoComplete='off' required>
              <option value='' readOnly>Add schema to segment</option>
              <option value='firstname'>First Name</option>
              <option value='lastname'>Last Name</option>
              <option value='lastname'>Gender</option>
              <option value='lastname'>Age</option>
              <option value='lastname'>Account Namee</option>
              <option value='lastname'>City</option>
              <option value='lastname'>State</option>
            </select>
            <button className='del-btn' onClick={() => removeSelect(index)}><FaMinus /></button>
          </div>
        )
      })
    }
    </div>
    </form>
      <button className='add-btn' type='button' onClick={addSelect}>+ Add new Schema</button>
      <button className='reset-btn' type='button' onClick={resetVal}>Reset</button>
      <button className='save-btn' type='button' onClick={handleSubmit}>Save the segment</button>
    </div>
  )
}
