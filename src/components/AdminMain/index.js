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
    <TableRow key={index}>
      <td>{phone.series}</td>
      <td>{phone.model}</td>
      <td>{phone.description}</td>
      <td>{phone.cpu}</td>
      <td>{phone.ram}</td>
      <td>{phone.storage}</td>
      <td>{phone.camera}</td>
      <td>{phone.size}</td>
      <td>{phone.battery}</td>
      <td>{phone.price}</td>
      <td>{phone.img}</td>
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
            <td>Description</td>
            <td>CPU</td>
            <td>RAM</td>
            <td>Storage</td>
            <td>Camera</td>
            <td>Size</td>
            <td>Battery</td>
            <td>Price</td>
            <td>Img</td>
            <td></td>
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