import React, { useEffect, useState, useContext } from 'react'
import './paintingTab.css'
import EditModal from '../EditModal/EditModal'

import { ArtContext } from '../../context/ArtContext'

const PaintingTab = () => {

    const { getAllOils, oils } = useContext(ArtContext)
    const [modalActive, setModalActive] = useState(false)
    const [clickedBtnInfo, setClickedBtnInfo] = useState({
        id: '',
        cat: ''
    })

    useEffect(() => {
        getAllOils()
    }, [])

    function handleEdit(id) {
        setModalActive(!modalActive)
        setClickedBtnInfo(
            {
                id: id,
                cat:'painting'
            }
        )
    }

    function handleAdd() {

    }

    function cancelModal() {
        setModalActive(!modalActive)
    }

    oils && console.log(oils)

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
                {oils && oils.map(oil => (
                    <tbody className='table-body' key={oil._id}>
                        <tr>
                            <td>{oil.name}</td>
                            <td>{oil.description}</td>
                            <td>{oil.size}</td>
                            <td>{oil.image}</td>
                            <td>{oil.inventory}</td>
                            <td>$ {oil.price}</td>
                            <td>{oil.price_id}</td>
                            <td><button id={oil._id} onClick={(e) => handleEdit(e.target.id)} className='btn edit'>Edit</button>
                                <button className='btn delete'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
    )
}

export default PaintingTab