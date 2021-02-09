import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useHistory} from "react-router-dom";
import {
  AddItemContainer,FormAdd,FormRow, FormInput, FormLabel, FormButton
} from "./AdminStyled";
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'


const EditItem = ({match}) => {
  let history = useHistory();
  const [{adminPhones, adminEdit}, dispatch] = useContext(StateContext)
  const [item, setItem] = useState([{
    series: '',
    model: '',
    description: '',
    cpu: '',
    ram: '',
    storage: '',
    camera: '',
    size: '',
    battery: '',
    price: '',
    img:  ''
  }])
// in this item state value in input is not displaying

console.log(match.params.id, 'editItem')
const currentItemId = match.params.id
useEffect(() => {
  const selectedItem = adminPhones.find(item => item._id === currentItemId)
  setItem(selectedItem)
  console.log(selectedItem, 'selected Item in effect')
  console.log(item, 'item in effect')
},[])
  const sendItem = (e) => {
    e.preventDefault()
    console.log(item)
    dispatch({type: actionTypes.ADMIN_EDIT, payload: !adminEdit})
    axios.put(`/api/phones/${currentItemId}`, item)
    history.push("/admin");
  }

  return (
    <>
    (
      <AddItemContainer>
        <FormAdd onSubmit={sendItem}>
          <FormRow>
            <FormLabel htmlFor="series">Series:</FormLabel>
            <FormInput
              name="series"
              type="text"
              fullWith
              value={item.series}
              onChange={(e) => setItem({ ...item, series: e.target.value })}
            />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="model">Model:</FormLabel>
            <FormInput
              name="model"
              type="text"
              fullWith
              value={item.model}
              onChange={(e) => setItem({ ...item, model: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="description">Description:</FormLabel>
            <FormInput
              name="description"
              type="text"
              fullWith
              value={item.description}
              onChange={(e) => setItem({ ...item, description: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="cpu">CPU:</FormLabel>
            <FormInput
              name="cpu"
              type="text"
              fullWith
              value={item.cpu}
              onChange={(e) => setItem({ ...item, cpu: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="ram">Ram:</FormLabel>
            <FormInput
              name="ram"
              type="text"
              fullWith
              value={item.ram}
              onChange={(e) => setItem({ ...item, ram: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="storage">Storage:</FormLabel>
            <FormInput
              name="storage"
              type="text"
              fullWith
              value={item.storage}
              onChange={(e) => setItem({ ...item, storage: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="camera">Camera:</FormLabel>
            <FormInput
              name="camera"
              type="text"
              fullWith
              value={item.camera}
              onChange={(e) => setItem({ ...item, camera: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="size">Size:</FormLabel>
            <FormInput
              name="size"
              type="text"
              fullWith
              value={item.size}
              onChange={(e) => setItem({ ...item, size: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="battery">Battery:</FormLabel>
            <FormInput
              name="battery"
              type="text"
              fullWith
              value={item.battery}
              onChange={(e) => setItem({ ...item, battery: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="price">Price:</FormLabel>
            <FormInput
              name="price"
              type="text"
              fullWith
              value={item.price}
              onChange={(e) => setItem({ ...item, price: e.target.value })}
            />
          </FormRow>

          <FormRow>
            <FormLabel htmlFor="img">Image:</FormLabel>
            <FormInput
              name="img"
              type="file"
              fullWith
              value={item.img}
              onChange={(e) => setItem({ ...item, img: e.target.value })}
            />
          </FormRow>

          <FormButton type="submit">Submit</FormButton>
        </FormAdd>
      </AddItemContainer>
    )
  </>
);
}

export default EditItem
