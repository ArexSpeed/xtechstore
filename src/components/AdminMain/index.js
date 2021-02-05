import {useEffect, useState} from 'react'
import AddItem from './AddItem'
import axios from 'axios'

const AdminMain = () => {
  const [phones, setPhones] = useState([])
  const [addPhone, setAddPhone] = useState({})
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fetchPhones = async () => {
      const { data } = await axios.get('/api/phones')
      console.log(data, 'Phone')
      setPhones(data)
    }

    fetchPhones()
  }, [])

  const showPhones = phones.map((phone, index) => (
    <tr>
      <td>{phone.series}</td>
      <td>{phone.model}</td>
      <td>{phone.price}</td>
      <td>{phone.storage}</td>
    </tr>
  ))
  return (
      <>
      <button onClick={() => setOpen(!open)}>Add</button>
      <AddItem open={open}>Add Phone</AddItem>
        <table>
          <th>
            <td>Series</td>
            <td>Model</td>
            <td>Price</td>
            <td>Storage</td>
          </th>
          {showPhones}
        </table>

        <form>
          
        </form>
      </>
  )
}
export default AdminMain