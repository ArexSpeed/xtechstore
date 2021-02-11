import React, { useState, useContext } from "react";
import FileBase from 'react-file-base64'
import axios from 'axios'
import {
  AddItemContainer,FormAdd,FormRow, FormInput, FormLabel, FormButton
} from "./AdminStyled";



function AddAccessory({ open }) {
  const [item, setItem] = useState({
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
      {open && (
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
              <FileBase type="file" multiple={false} onDone={({base64}) => setItem({...item, img: base64})} />
            </FormRow>

            <FormButton type="submit">Submit</FormButton>
          </FormAdd>
        </AddItemContainer>
      )}
    </>
  );
}

export default AddAccessory;

