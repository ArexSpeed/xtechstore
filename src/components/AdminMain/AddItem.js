import React, { useState, useContext } from "react";
import FileBase from 'react-file-base64'

import axios from 'axios'
import {
  AddItemContainer,FormAdd,FormRow, FormInput, FormLabel, FormButton, FormCancel
} from "./AdminStyled";
import {StateContext} from '../../StateProvider'

function AddItem() {
  const [{openAddPhone}, dispatch] = useContext(StateContext)
  
  const [item, setItem] = useState({
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
  })


  const sendItem = () => {
    console.log(item)
    axios.post('/api/phones', item)
  }
  
  return (
    <>
      {openAddPhone && (
        <AddItemContainer>
          <FormAdd autoComplete="off" onSubmit={sendItem}>
            <FormRow>
              <FormLabel htmlFor="series">Series:</FormLabel>
              <FormInput
                name="series"
                label="series"
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
              <FileBase type="file" multiple={false} onDone={({base64}) => setItem({...item, img: base64})} />
            </FormRow>
            <FormRow>
            <FormButton type="submit">Submit</FormButton>
            <FormCancel onClick={() => dispatch({type: 'OPEN_ADD_PHONE', payload: false})}>Cancel</FormCancel>
            </FormRow>
          </FormAdd>
        </AddItemContainer>
      )}
    </>
  );
}

export default AddItem;

