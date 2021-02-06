import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
  AddItemContainer,FormAdd,FormRow, FormInput, FormLabel, FormButton
} from "./AdminStyled";

const EditItem = ({edit, editItem}) => {
  const [item, setItem] = useState({
    series: editItem.series,
    model: editItem.model,
    description: editItem.description,
    cpu: editItem.cpu,
    ram: editItem.ram,
    storage: editItem.storage,
    camera: editItem.camera,
    size: editItem.size,
    battery: editItem.battery,
    price: editItem.price,
    img:  editItem.img
  })
// in this item state value in input is not displaying

console.log(editItem, 'editItem')
  const sendItem = () => {
    console.log(item)
    axios.put(`/api/phones/${editItem._id}`, item)
  }
console.log(item, 'item in edit')
  return (
    <>
    {edit && (
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
    )}
  </>
);
}

export default EditItem
