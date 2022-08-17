import React, { useEffect, useState, useContext } from 'react'
import '../PaintingTab/paintingTab.css'
import EditModal from '../EditModal/EditModal'

import { ArtContext } from '../../context/ArtContext'

const PrintTab = () => {

    const { getAllPrints, prints } = useContext(ArtContext)
    const [modalActive, setModalActive] = useState(false)
    const [clickedBtnInfo, setClickedBtnInfo] = useState({
        id: '',
        cat: ''
    })

    useEffect(() => {
        getAllPrints()
    }, [])

    function handleEdit(id) {
        setModalActive(!modalActive)
        setClickedBtnInfo(
            {
                id: id,
                cat: 'print'
            }
        )
    }

    function handleAdd() {

    }

    function cancelModal() {
        setModalActive(!modalActive)
    }

    prints && console.log(prints)

    return (
        <div>
            {modalActive &&
                <EditModal
                    info={clickedBtnInfo}
                    cancelModal={cancelModal}
                />}
            <table>
                <thead className='table-head'>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Image Link</th>
                        <th>Price</th>
                        <th><button onClick={handleAdd} className='btn'>ADD NEW PAINTING</button></th>
                    </tr>
                </thead>
                {prints && prints.map(print => (
                    <tbody className='table-body' key={print._id}>
                        <tr>
                            <td>{print.name}</td>
                            <td>{print.bio}</td>
                            {print.src && print.src.map(image => (
                                <tr key={image.image}>
                                    <td>{image.image}</td>
                                    <td>Inventory:{image.inventory}</td>
                                    <td>Price ID: {image.price_id}</td>
                                </tr>
                            ))}
                            <td>$ {print.price}</td>
                            <td><button id={print._id} onClick={(e) => handleEdit(e.target.id)} className='btn edit'>Edit</button>
                                <button className='btn delete'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default PrintTab