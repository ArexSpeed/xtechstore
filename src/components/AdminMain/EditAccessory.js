import React, {useState, useEffect, useContext} from 'react'
import FileBase from 'react-file-base64'

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
              <FormLabel htmlFor="series">Series:</FormLabel>
              <FormInput
                name="series"
                type="text"
                value={item.series}
                onChange={(e) => setItem({ ...item, series: e.target.value })}
              />
            </FormRow>

            <FormRow>
              <FormLabel htmlFor="name">Name:</FormLabel>
              <FormInput
                name="name"
                type="text"
                value={item.name}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </FormRow>

            <FormRow>
              <FormLabel htmlFor="description">Description:</FormLabel>
              <FormInput
                name="description"
                type="text"
                value={item.description}
                onChange={(e) => setItem({ ...item, description: e.target.value })}
              />
            </FormRow>

            <FormRow>
              <FormLabel htmlFor="price">Price:</FormLabel>
              <FormInput
                name="price"
                type="text"
                value={item.price}
                onChange={(e) => setItem({ ...item, price: e.target.value })}
              />
            </FormRow>

            <FormRow>
              <FormLabel htmlFor="img">Image:</FormLabel>
              <FileBase type="file" multiple={false} onDone={({base64}) => setItem({...item, img: base64})} />
            </FormRow>

          <FormButton type="submit">Submit</FormButton>
        </FormAdd>
      </AddItemContainer>
}
  </>
);
}

export default EditAccessory
