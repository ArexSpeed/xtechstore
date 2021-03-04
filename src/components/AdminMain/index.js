import {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {
  AdminContainer, AddButton, ButtonActions, EditButton, DeleteButton, ButtonSpan, Table, TableHead, TableRow, TableImg
} from "./AdminStyled";
import AddItem from './AddItem'
import AddUltrabook from './AddUltrabook'
import AddWatch from './AddWatch'
import AddTablet from './AddTablet'
import AddAccessory from './AddAccessory'
import EditItem from './EditItem';
import EditUltrabook from './EditUltrabook';
import EditWatch from './EditWatch';
import EditTablet from './EditTablet';
import EditAccessory from './EditAccessory';

import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'


const AdminMain = () => {
  const [{adminPhones, adminUltrabooks,adminWatches,adminTablets,adminAccessories, adminPanel}, dispatch] = useContext(StateContext)

  const [editPhone, setEditPhone] = useState(false)
  const [editUltrabook, setEditUltrabook] = useState(false)
  const [editWatch, setEditWatch] = useState(false)
  const [editTablet, setEditTablet] = useState(false)
  const [editAccessory, setEditAccessory] = useState(false)

  useEffect(() => {
    const fetchPhones = async () => {
      const { data } = await axios.get('/api/phones')
      dispatch({type: "ADMIN_GET_PHONES", payload: data})

    }
    const fetchUltrabooks = async () => {
      const { data } = await axios.get('/api/ultrabooks')
      dispatch({type: "ADMIN_GET_ULTRABOOKS", payload: data})

    }
    const fetchWatches = async () => {
      const { data } = await axios.get('/api/watches')
      dispatch({type: "ADMIN_GET_WATCHES", payload: data})

    }
    const fetchTablets = async () => {
      const { data } = await axios.get('/api/tablets')
      dispatch({type: "ADMIN_GET_TABLETS", payload: data})

    }
    const fetchAccessories = async () => {
      const { data } = await axios.get('/api/accessories')
      dispatch({type: "ADMIN_GET_ACCESSORIES", payload: data})

    }

    fetchPhones()
    fetchUltrabooks()
    fetchWatches()
    fetchTablets()
    fetchAccessories()
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
      <td><TableImg src={phone.img} alt="phone" /></td>
      <td>
        <ButtonActions>
        <EditButton onClick={() => {dispatch({type: 'SET_CURRENT_EDIT_ID', payload: phone._id}); setEditPhone(!editPhone)}}>Edit</EditButton> 
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
      <td><TableImg src={ultrabook.img} alt="ultrabook" /></td>
      <td>
        <ButtonActions>
        <EditButton onClick={() => {dispatch({type: 'SET_CURRENT_EDIT_ID', payload: ultrabook._id}); setEditUltrabook(!editUltrabook)}}>Edit</EditButton> 
        <form><DeleteButton type="submit" onClick={() => {axios.delete(`/api/ultrabooks/${ultrabook._id}`); console.log('ultrabook to delete', ultrabook._id)}}>X</DeleteButton></form>
        </ButtonActions>
      </td>
    </TableRow>
  ))

  const showWatches = adminWatches.map((watch, index) => (
    <TableRow key={index}>
      <td>{watch.series}</td>
      <td>{watch.model}</td>
      <td>{watch.description}</td>
      <td>{watch.cpu}</td>
      <td>{watch.ram}</td>
      <td>{watch.storage}</td>
      <td>{watch.size}</td>
      <td> GPS: {watch.addons.gps ? ' O ' : ' X '}
           HC: {watch.addons.healthcare ? ' O ' : ' X '}
           ESIM: {watch.addons.esim ? ' O ' : ' X '}
           WiFi: {watch.addons.wifi ? ' O ' : ' X '}
           WP: {watch.addons.waterproof ? ' O ' : ' X '}
      </td>
      <td>{watch.fitness}</td>
      <td>{watch.price}</td>
      <td><TableImg src={watch.img} alt="watch" /></td>
      <td>
        <ButtonActions>
        <EditButton onClick={() => {dispatch({type: 'SET_CURRENT_EDIT_ID', payload: watch._id}); setEditWatch(!editWatch)}}>Edit</EditButton> 
        <form><DeleteButton type="submit" onClick={() => axios.delete(`/api/watches/${watch._id}`)}>X</DeleteButton></form>
        </ButtonActions>
      </td>
    </TableRow>
  ))

  const showTablets = adminTablets.map((tablet, index) => (
    <TableRow key={index}>
      <td>{tablet.series}</td>
      <td>{tablet.model}</td>
      <td>{tablet.description}</td>
      <td>{tablet.cpu}</td>
      <td>{tablet.ram}</td>
      <td>{tablet.storage}</td>
      <td>{tablet.camera}</td>
      <td>{tablet.size}</td>
      <td>{tablet.battery}</td>
      <td>{tablet.price}</td>
      <td><TableImg src={tablet.img} alt="tablet" /></td>
      <td>
        <ButtonActions>
        <EditButton onClick={() => {dispatch({type: 'SET_CURRENT_EDIT_ID', payload: tablet._id}); setEditTablet(!editTablet)}}>Edit</EditButton> 
        <form><DeleteButton type="submit" onClick={() => axios.delete(`/api/tablets/${tablet._id}`)}>X</DeleteButton></form>
        </ButtonActions>
      </td>
    </TableRow>
  ))

  const showAccessories = adminAccessories.map((accessory, index) => (
    <TableRow key={index}>
      <td>{accessory.series}</td>
      <td>{accessory.name}</td>
      <td>{accessory.description}</td>
      <td>{accessory.price}</td>
      <td><TableImg src={accessory.img} alt="accessory" /></td>
      <td>
        <ButtonActions>
        <EditButton onClick={() => {dispatch({type: 'SET_CURRENT_EDIT_ID', payload: accessory._id}); setEditAccessory(!editAccessory)}}>Edit</EditButton> 
        <form><DeleteButton type="submit" onClick={() => axios.delete(`/api/accessories/${accessory._id}`)}>X</DeleteButton></form>
        </ButtonActions>
      </td>
    </TableRow>
  ))
  return (
      <>
      <AdminContainer>
        {adminPanel === 'phones' ? (
          <>
          <AddButton onClick={() => dispatch({type: 'OPEN_ADD_PHONE', payload: true})}><ButtonSpan>+</ButtonSpan></AddButton>
          <AddItem />
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
        <AddButton onClick={() => dispatch({type: 'OPEN_ADD_ULTRABOOK', payload: true})}><ButtonSpan>+</ButtonSpan></AddButton>
        <AddUltrabook />
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
        ) : 
        adminPanel === 'watches' ? (
          <>
          <AddButton onClick={() => dispatch({type: 'OPEN_ADD_WATCH', payload: true})}><ButtonSpan>+</ButtonSpan></AddButton>
          <AddWatch/>
          <EditWatch edit={editWatch} />
          <Table>
            <TableHead>
              <td>Series</td>
              <td>Model</td>
              <td>Description</td>
              <td>CPU</td>
              <td>RAM</td>
              <td>Storage</td>
              <td>Size</td>
              <td>AddOns</td>
              <td>Fitness</td>
              <td>Price</td>
              <td>Img</td>
              <td></td>
            </TableHead>
            
            {showWatches}
          </Table>
          </>
        )
          :
        adminPanel === 'tablets' ?
        (
            <>
            <AddButton onClick={() => dispatch({type: 'OPEN_ADD_TABLET', payload: true})}><ButtonSpan>+</ButtonSpan></AddButton>
            <AddTablet />
            <EditTablet edit={editTablet} />
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
              
              {showTablets}
            </Table>
            </>
        )
        :
        adminPanel === 'accessories' ?
        (
            <>
            <AddButton onClick={() => dispatch({type: 'OPEN_ADD_ACCESSORY', payload: true})}><ButtonSpan>+</ButtonSpan></AddButton>
            <AddAccessory />
            <EditAccessory edit={editAccessory} />
            <Table>
              <TableHead>
                <td>Series</td>
                <td>Name</td>
                <td>Description</td>
                <td>Price</td>
                <td>Img</td>
                <td></td>
              </TableHead>
              
              {showAccessories}
            </Table>
            </>
        )
        :
        "Something went wrong"
        }
       
      <p style={{margin: '50px',maxWidth: '90%', color: '#555', fontSize: '14px'}}>This is only an example of admin cms panel. You can change and add data and you will see changes on this admin panel but will be no changes ont he main site, there in a raw data. All data is stored in MongoDB. </p>

        </AdminContainer>
      </>
  )
}

export default AdminMain;