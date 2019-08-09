import React, { useState, useContext, useEffect } from 'react'
import WindowIcon from '../components/WindowIcon'
import Icon from '../components/Icon'
import classnames from 'classnames'
import Popup from '../components/Pupup'
import uuidv1 from 'uuid/v1'
import { popupContext } from '../context/popupContext'

// import '../styles/home.css'

const INITIAL_ICONS = [
    {
        name: 'computer',
        title: 'My Computer',
        pos: {
            x: 0,
            y: 0
        }
    },
    {
        name: 'recyclebin',
        title: 'Recycle Bin',
        pos: {
            x: 0,
            y: 100
        }
    },
    {
        name: 'internet',
        title: 'The internet',
        pos: {
            x: 0,
            y: 200
        }
    },
    {
        name: 'briefcase',
        title: 'My Briefcase',
        pos: {
            x: 0,
            y: 300
        }
    },
    {
        name: 'inbox',
        title: 'Inbox',
        pos: {
            x: 0,
            y: 400
        }
    }
]

const Home = () => {
    const popupCtx = useContext(popupContext)
    const { openPopup, closePopup, popups } = popupCtx

    const renderIcons = () =>
        INITIAL_ICONS.map((icon, index) => (
            <li
                key={index}
                className="item"
                style={{ top: icon.pos.y, left: icon.pos.x }}
                onDoubleClick={() => openPopup('hello')}
            >
                <Icon name={icon.name} title={icon.title} />
            </li>
        ))
    return (
        <div className="window">
            <ul className="window__container">
                {renderIcons()}

                {popups.map(popup => popup.component)}
                {/* <li className="item" style={{ top: '0', left: '0' }}>
                    <Icon name="computer" title={'My Computer'} />
                </li>
                <li className="item" style={{ top: '100px', left: '0' }}>
                    <Icon name="recyclebin" title={'My Computer'} />
                </li> */}
            </ul>
        </div>
    )
}

export default Home
