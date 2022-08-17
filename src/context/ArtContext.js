import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ArtContext = createContext()

export function ArtProvider(props) {
    const [oils, setOils] = useState([])
    const [mixedMedia, setMixedMedia] = useState([])
    const [prints, setPrints] = useState([])
    const [oneOil, setOneOil] = useState({})
    const [onePrint, setOnePrint] = useState({})
    const [oneMixedMedia, setOneMixedMedia] = useState({})
  
    const URL = process.env.REACT_APP_URL_PRO
  
    const getAllOils = async () => {
      try {
        const response = await axios.get(URL + '/api/paintings/oils')
        setOils(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    const getOneOil = async (id) => {
      try {
        const response = await axios.get(URL + '/api/paintings/oils/' + id)
        setOneOil(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    const getAllMixedMedia = async () => {
      try {
        const response = await axios.get(URL + '/api/paintings/mixedmedia')
        setMixedMedia(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    const getOneMixedMedia = async (id) => {
      try {
        const response = await axios.get(URL + '/api/paintings/mixedmedia/' + id)
        setOneMixedMedia(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    const getAllPrints = async () => {
      try {
        const response = await axios.get(URL + '/api/paintings/prints')
        setPrints(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    const getOnePrint = async (id) => {
      try {
        const response = await axios.get(URL + '/api/paintings/prints/' + id)
        setOnePrint(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  
    const subtractInventory = async (data) => {
      try {
        const response = await axios.put(URL + '/api/paintings/subtract', data)
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <ArtContext.Provider
        value={{
          oils,
          getAllOils,
          mixedMedia,
          getAllMixedMedia,
          prints,
          getAllPrints,
          oneOil,
          getOneOil,
          onePrint,
          getOnePrint,
          oneMixedMedia,
          getOneMixedMedia,
          subtractInventory
        }}>
        {props.children}
      </ArtContext.Provider>
    );
  }