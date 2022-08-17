import React, { useEffect, useState, useContext } from 'react'
import '../PaintingTab/paintingTab.css'
import EditModal from '../EditModal/EditModal'

import { ArtContext } from '../../context/ArtContext'

const MixedMediaTab = () => {

    const { getAllMixedMedia, mixedMedia } = useContext(ArtContext)
    const [modalActive, setModalActive] = useState(false)
    const [clickedBtnInfo, setClickedBtnInfo] = useState({
        id: '',
        cat: ''
    })

    useEffect(() => {
        getAllMixedMedia()
    }, [])

    function handleEdit(id) {
        setModalActive(!modalActive)
        setClickedBtnInfo(
            {
                id: id,
                cat: 'mixed_media'
            }
        )
    }

    function handleAdd() {

    }

    function cancelModal() {
        setModalActive(!modalActive)
    }

    mixedMedia && console.log(mixedMedia)

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
                        <th>Description</th>
                        <th>Size</th>
                        <th>Image Link</th>
                        <th>Inventory</th>
                        <th>Price</th>
                        <th>Price ID</th>
                        <th><button onClick={handleAdd} className='btn'>ADD NEW PAINTING</button></th>
                    </tr>
                </thead>
                {mixedMedia && mixedMedia.map(mixed => (
                    <tbody className='table-body' key={mixed._id}>
                        <tr>
                            <td>{mixed.name}</td>
                            <td>{mixed.bio}</td>
                            <td>{mixed.size}</td>
                            <td>{mixed.src}</td>
                            <td>{mixed.inventory}</td>
                            <td>$ {mixed.price}</td>
                            <td>{mixed.price_id}</td>
                            <td><button id={mixed._id} onClick={(e) => handleEdit(e.target.id)} className='btn edit'>Edit</button>
                                <button className='btn delete'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default MixedMediaTab