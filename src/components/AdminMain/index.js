import {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import AddItem from './AddItem'
import AddUltrabook from './AddUltrabook'
import axios from 'axios'
import {
  AdminContainer, AddButton, ButtonSpan, Table, TableHead, TableRow
} from "./AdminStyled";
import EditItem from './EditItem';
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'


const AdminMain = () => {
  const [{adminPhones, adminUltrabooks, currentEditId, adminEditForm}, dispatch] = useContext(StateContext)
  const [phones, setPhones] = useState([])
  const [addPhone, setAddPhone] = useState({})
  const [open, setOpen] = useState(false)
  const [openUltrabook, setOpenUltrabook] = useState(false)
  const [edit, setEdit] = useState(false)
  const [editItem, setEditItem] = useState('')

  useEffect(() => {
    const fetchPhones = async () => {
      const { data } = await axios.get('/api/phones')
      dispatch({type: actionTypes.ADMIN_GET_PHONES, payload: data})
      console.log(data, 'Phone')
      //setPhones(data)
    }
    const fetchUltrabooks = async () => {
      const { data } = await axios.get('/api/ultrabooks')
      dispatch({type: actionTypes.ADMIN_GET_ULTRABOOKS, payload: data})
      console.log(data, 'Phone')
      //setPhones(data)
    }

    fetchPhones()
    fetchUltrabooks()
  }, [])


  const showPhones = adminPhones.map((phone, index) => (
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
      <td><button onClick={() => {dispatch({type: actionTypes.SET_CURRENT_EDIT_ID, payload: phone._id}); setEdit(!edit)}}>Edit</button> 
      <form><button type="submit" onClick={() => axios.delete(`/api/phones/${phone._id}`)}>X</button></form></td>
    </TableRow>
  ))

  const showUltrabooks = adminUltrabooks.map((ultrabook, index) => (
    <TableRow key={index}>
      <td>{ultrabook.series}</td>
      <td>{ultrabook.model}</td>
      <td>{ultrabook.description}</td>
      <td>{ultrabook.cpu}</td>
      <td>{ultrabook.ram}</td>
      <td>{ultrabook.storage}</td>
      <td>{ultrabook.camera}</td>
      <td>{ultrabook.size}</td>
      <td>{ultrabook.battery}</td>
      <td>{ultrabook.price}</td>
      <td>{ultrabook.img}</td>
      <td><button onClick={() => {dispatch({type: actionTypes.SET_CURRENT_EDIT_ID, payload: ultrabook._id}); setEdit(!edit)}}>Edit</button> 
      <form><button type="submit" onClick={() => axios.delete(`/api/ultrabook/${ultrabook._id}`)}>X</button></form></td>
    </TableRow>
  ))
  return (
      <>
      <AdminContainer>
      <AddButton onClick={() => setOpen(!open)}><ButtonSpan>+</ButtonSpan></AddButton>
      <AddItem open={open} />
      <EditItem edit={edit} />
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

        <AddButton onClick={() => setOpenUltrabook(!openUltrabook)}><ButtonSpan>+</ButtonSpan></AddButton>
        <AddUltrabook open={openUltrabook} />
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
          
          {showUltrabooks}
        </Table>

        <form>
          
        </form>
        </AdminContainer>
      </>
  )
}
export default AdminMain