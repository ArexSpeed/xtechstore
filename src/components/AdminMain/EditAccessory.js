import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {
  AddItemContainer,FormAdd,FormRow, FormInput, FormLabel, FormButton
} from "./AdminStyled";
import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'


const EditAccessory = ({edit}) => {
  const [{adminAccessories,currentEditId}, dispatch] = useContext(StateContext)
  const [item, setItem] = useState([])

const currentItemId = currentEditId

useEffect(() => {
  const selectedItem = adminAccessories.find(item => item._id === currentItemId)
  if(selectedItem){
    setItem(selectedItem)
  }

},[adminAccessories, currentItemId])

  const sendItem = () => {
    axios.put(`/api/accessories/${currentItemId}`, item)
  }


  return (
    <>
    {edit &&
      <AddItemContainer>
        <FormAdd onSubmit={sendItem}>
            <FormRow>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <FormInput
                name="name"
                label="name"
                type="text"
                fullWith
                value={item.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
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
}
  </>
);
}

export default EditAccessory
