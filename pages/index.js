import React, { useState, useContext } from 'react'
import WindowIcon from '../components/WindowIcon'
import Icon from '../components/Icon'
import classnames from 'classnames'
import { withIconContext, iconContext } from '../context/iconContext'
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
    const iconCtx = useContext(iconContext)

    const renderIcons = () =>
        INITIAL_ICONS.map((icon, index) => (
            <li
                key={index}
                className="item"
                style={{ top: icon.pos.y, left: icon.pos.x }}
                onDoubleClick={() => alert('double click')}
                onClick={iconCtx.toggle}
            >
                <Icon
                    name={icon.name}
                    title={icon.title}
                    pressed={iconCtx.pressed}
                />
            </li>
        ))
    return (
        <div className="window">
            <ul className="window__container">
                {renderIcons()}
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

export default withIconContext(Home)
