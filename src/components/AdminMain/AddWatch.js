import React, { useState, useContext } from "react";
import { useHistory} from "react-router-dom";

import axios from 'axios'
import {
  AddItemContainer,FormAdd,FormRow, FormInput, FormLabel, FormButton
} from "./AdminStyled";

import {StateContext} from '../../StateProvider'
import {actionTypes} from '../../reducer'


function AddWatch({ open }) {
  //const [sum, setSum] = useState(0);
  //const [{bagItems}, dispatch] = useContext(StateContext)
  let history = useHistory();
  const [item, setItem] = useState({
    series: '',
    model: '',
    description: '',
    cpu: '',
    ram: '',
    storage: '',
    addons: {
      gps: false,
      wifi: false,
      healthcare: false,
      esim: false,
      waterproof: false
    },
    size: '',
    battery: '',
    price: '',
    img:  ''
  })


  const sendItem = () => {
    axios.post('/api/watches', item)
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
              <FormLabel htmlFor="addons">Addons:</FormLabel>
              <p>GPS</p>
              <FormInput
                name="addons"
                type="checkbox"
                onChange={(e) => setItem({ ...item, addons: {...item.addons, gps: e.target.checked} })}
              />
              <p>WiFi</p>
              <FormInput
                name="addons"
                type="checkbox"
                onChange={(e) => setItem({ ...item, addons: {...item.addons, wifi: e.target.checked} })}
              />
              <p>eSim</p>
              <FormInput
                name="addons"
                type="checkbox"
                onChange={(e) => setItem({ ...item, addons: {...item.addons, esim: e.target.checked} })}
              />
              <p>Healthcare</p>
              <FormInput
                name="addons"
                type="checkbox"
                onChange={(e) => setItem({ ...item, addons: {...item.addons, healthcare: e.target.checked} })}
              />
              <p>Waterproof</p>
              <FormInput
                name="addons"
                type="checkbox"
                onChange={(e) => setItem({ ...item, addons: {...item.addons, waterproof: e.target.checked} })}
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

export default AddWatch;

