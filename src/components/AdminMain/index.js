import {useEffect, useState} from 'react'
import AddItem from './AddItem'
import axios from 'axios'
import {
  AdminContainer, AddButton, ButtonSpan, Table, TableHead, TableRow
} from "./AdminStyled";

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
    <TableRow>
      <td>{phone.series}</td>
      <td>{phone.model}</td>
      <td>{phone.price}</td>
      <td>{phone.storage}</td>
    </TableRow>
  ))
  return (
      <>
      <AdminContainer>
      <AddButton onClick={() => setOpen(!open)}><ButtonSpan>+</ButtonSpan></AddButton>
      <AddItem open={open}></AddItem>
        <Table>
          <TableHead>
            <td>Series</td>
            <td>Model</td>
            <td>Price</td>
            <td>Storage</td>
          </TableHead>
          {showPhones}
        </Table>

        <form>
          
        </form>
        </AdminContainer>
      </>
  )
}
export default AdminMain