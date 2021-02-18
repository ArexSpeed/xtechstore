import React, { useState, useContext } from "react";
import FileBase from 'react-file-base64'
import axios from 'axios'
import {
  AddItemContainer,FormAdd,FormRow, FormInput, FormLabel, FormButton, FormCancel
} from "./AdminStyled";
import {StateContext} from '../../StateProvider'

function AddAccessory() {
  const [{openAddAccessory}, dispatch] = useContext(StateContext)

  const [item, setItem] = useState({
    series: '',
    name: '',
    description: '',
    price: '',
    img:  ''
  })


  const sendItem = () => {
    axios.post('/api/accessories', item)
  }
  
  return (
    <>
      {openAddAccessory && (
        <AddItemContainer>
          <FormAdd onSubmit={sendItem}>
            <FormRow>
              <FormLabel htmlFor="name">Series:</FormLabel>
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
              <FileBase type="file" multiple={false} onDone={({base64}) => setItem({...item, img: base64})} />
            </FormRow>

            <FormRow>
            <FormButton type="submit">Submit</FormButton>
            <FormCancel onClick={() => dispatch({type: 'OPEN_ADD_ACCESSORY', payload: false})}>Cancel</FormCancel>
            </FormRow>
          </FormAdd>
        </AddItemContainer>
      )}
    </>
  );
}

export default AddAccessory;

