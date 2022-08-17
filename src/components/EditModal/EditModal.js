import React, { useEffect, useState, useContext } from 'react'
import './editModal.css'

import { ArtContext } from '../../context/ArtContext'

const EditModal = (props) => {

    const { info, cancelModal } = props

    const { getOneOil, oneOil, getOneMixedMedia, oneMixedMedia, getOnePrint, onePrint } = useContext(ArtContext)

    const [inputData, setInputdata] = useState({})

    useEffect(() => {
        if (info.cat === 'painting') {
            getOneOil(info.id)
        }

        if (info.cat === 'mixed_media') {
            getOneMixedMedia(info.id)
        }

        if (info.cat === 'print') {
            getOnePrint(info.id)
        }
    }, [])

    useEffect(() => {
        setInputdata({
            name: oneOil.name,
            description: oneOil.description,
            size: oneOil.size,
            image: oneOil.image,
            inventory: oneOil.inventory,
            price: oneOil.price,
            price_id: oneOil.price_id
        })
    }, [oneOil])

    useEffect(() => {
        setInputdata({
            name: oneMixedMedia.name,
            description: oneMixedMedia.bio,
            size: oneMixedMedia.size,
            image: oneMixedMedia.src,
            inventory: oneMixedMedia.inventory,
            price: oneMixedMedia.price,
            price_id: oneMixedMedia.price_id
        })
    }, [oneMixedMedia])

    useEffect(() => {
        setInputdata({
            name: onePrint.name,
            size: onePrint.bio,
            image: onePrint.src,
            price: onePrint.price,
        })
    }, [onePrint])

    function handleChange(e) {
        const { name, value } = e.target;

        setInputdata({
            ...inputData,
            [name]: value,
        });

    }

    function saveData() {

    }

    if (info && info.cat === 'print') {
        return (
            <div>
                <div className='modal-container'>
                    <h1>Edit {inputData.name}</h1>
                    <br />
                    <input onChange={(e) => handleChange(e)} type="text" name="name" id="name" value={inputData.name} />
                    <br />
                    <input onChange={(e) => handleChange(e)} type="text" name="size" id="size" value={inputData.size} />
                    <br />

                    {inputData.image && inputData.image.map(item => (
                        <div>
                            <input onChange={(e) => handleChange(e)} type="text" name="image" id="image" value={item.image} />
                            <input onChange={(e) => handleChange(e)} type="text" name="inventory" id="inventory" value={item.inventory} />
                            <input onChange={(e) => handleChange(e)} type="text" name="price_id" id="price_id" value={item.price_id} />
                        </div>
                    ))}
                    <br />
                    <input onChange={(e) => handleChange(e)} type="text" name="price" id="price" value={inputData.price} />
                    <br />
                    <br />
                    <br />
                    <button onClick={saveData}>Save</button>
                    <button onClick={cancelModal}>Cancel</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='modal-container'>
                <h1>Edit {inputData.name}</h1>
                <br />
                <input onChange={(e) => handleChange(e)} type="text" name="name" id="name" value={inputData.name} />
                <br />
                <input onChange={(e) => handleChange(e)} type="text" name="description" id="description" value={inputData.description} />
                <br />
                <input onChange={(e) => handleChange(e)} type="text" name="size" id="size" value={inputData.size} />
                <br />
                <input onChange={(e) => handleChange(e)} type="text" name="image" id="image" value={inputData.image} />
                <br />
                <input onChange={(e) => handleChange(e)} type="text" name="inventory" id="inventory" value={inputData.inventory} />
                <br />
                <input onChange={(e) => handleChange(e)} type="text" name="price" id="price" value={inputData.price} />
                <br />
                <input onChange={(e) => handleChange(e)} type="text" name="price_id" id="price_id" value={inputData.price_id} />
                <br />
                <br />
                <button onClick={saveData}>Save</button>
                <button onClick={cancelModal}>Cancel</button>
            </div>
        </div>
    )
}

export default EditModal