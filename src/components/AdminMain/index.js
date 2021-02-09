import {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import AddItem from './AddItem'
import AddUltrabook from './AddUltrabook'
import axios from 'axios'
import {
  AdminContainer, AddButton, ButtonActions, EditButton, DeleteButton, ButtonSpan, Table, TableHead, TableRow
} from "./AdminStyled";
import EditItem from './EditItem';
import EditUltrabook from './EditUltrabook';
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'


const AdminMain = () => {
  const [{adminPhones, adminUltrabooks, adminPanel}, dispatch] = useContext(StateContext)
  const [phones, setPhones] = useState([])
  const [addPhone, setAddPhone] = useState({})
  const [open, setOpen] = useState(false)
  const [openUltrabook, setOpenUltrabook] = useState(false)
  const [editPhone, setEditPhone] = useState(false)
  const [editUltrabook, setEditUltrabook] = useState(false)
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
      <td>
        <ButtonActions>
        <EditButton onClick={() => {dispatch({type: actionTypes.SET_CURRENT_EDIT_ID, payload: phone._id}); setEditPhone(!editPhone)}}>Edit</EditButton> 
        <form><DeleteButton type="submit" onClick={() => axios.delete(`/api/phones/${phone._id}`)}>X</DeleteButton></form>
        </ButtonActions>
      </td>
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
      <td>
        <ButtonActions>
        <EditButton onClick={() => {dispatch({type: actionTypes.SET_CURRENT_EDIT_ID, payload: ultrabook._id}); setEditUltrabook(!editUltrabook)}}>Edit</EditButton> 
        <form><DeleteButton type="submit" onClick={() => {axios.delete(`/api/ultrabooks/${ultrabook._id}`); console.log('ultrabook to delete', ultrabook._id)}}>X</DeleteButton></form>
        </ButtonActions>
      </td>
    </TableRow>
  ))
  return (
      <>
      <AdminContainer>
        {adminPanel === 'phones' ? (
          <>
          <AddButton onClick={() => setOpen(!open)}><ButtonSpan>+</ButtonSpan></AddButton>
          <AddItem open={open} />
          <EditItem edit={editPhone} />
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
            </>
        )
        :
        adminPanel === 'ultrabooks' ? (
        <>
        <AddButton onClick={() => setOpenUltrabook(!openUltrabook)}><ButtonSpan>+</ButtonSpan></AddButton>
        <AddUltrabook open={openUltrabook} />
        <EditUltrabook edit={editUltrabook} />
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
        </>
        ) : "Something went wrong"}
      

        


        </AdminContainer>
      </>
  )
}
export default AdminMain