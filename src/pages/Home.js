import React, { useEffect, useState, useContext } from 'react'
import './home.css'
import PaintingTab from '../components/PaintingTab/PaintingTab'
import MixedMediaTab from '../components/MixedMediaTab/MixedMediaTab'
import PrintTab from '../components/PrintTab/PrintTab'

import { ArtContext } from '../context/ArtContext'

const Home = () => {

    const { getAllOils, oils, getAllMixedMedia, mixedMedia, getAllPrints, prints } = useContext(ArtContext)

    const [currentTab, setCurrentTab] = useState('painting')

    return (
        <div>
            <div style={{ display: 'flex', gap: '50px', justifyContent: 'center', margin: '10px' }}>
                {currentTab && currentTab === 'painting' ? <button onClick={() => setCurrentTab('painting')}
                    className='tab-btn active'>Painting</button> : <button onClick={() => setCurrentTab('painting')} className='tab-btn'>Painting</button>}

                {currentTab && currentTab === 'mixed_media' ? <button onClick={() => setCurrentTab('mixed_media')}
                    className='tab-btn active'>Mixed Media</button> : <button onClick={() => setCurrentTab('mixed_media')} className='tab-btn'>Mixed Media</button>}

                {currentTab && currentTab === 'print' ? <button onClick={() => setCurrentTab('print')}
                    className='tab-btn active'>Prints</button> : <button onClick={() => setCurrentTab('print')} className='tab-btn'>Prints</button>}
            </div>

            {currentTab === 'painting' ?
                <PaintingTab
                />
                : currentTab === 'mixed_media' ?
                    <MixedMediaTab
                    />
                    : <PrintTab
                    />
            }
        </div>
    )
}

export default Home