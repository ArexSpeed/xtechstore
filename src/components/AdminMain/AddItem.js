import React, { useState, useContext } from "react";
import axios from 'axios'
import {
  AddItemContainer,FormAdd,FormRow, FormInput, FormLabel, FormButton
} from "./AdminStyled";

import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'


function AddItem({ open }) {
  //const [sum, setSum] = useState(0);
  //const [{bagItems}, dispatch] = useContext(StateContext)
  const [item, setItem] = useState({
    series: '',
    model: '',
    price: '',
    storage: ''
  })


  const sendItem = () => {
    console.log(item)
    axios.post('/api/phones', item)
  }
  
  return (
    <>
      {open && (
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
              <FormLabel htmlFor="storage">Storage:</FormLabel>
              <FormInput
                name="storage"
                type="text"
                fullWith
                value={item.storage}
                onChange={(e) => setItem({ ...item, storage: e.target.value })}
              />
            </FormRow>
            <FormButton type="submit">Submit</FormButton>
          </FormAdd>
        </AddItemContainer>
      )}
    </>
  );
}

export default AddItem;

