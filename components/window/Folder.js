import React, { useRef, useEffect, useContext } from 'react'
import Icon from '../Icon'
import Header from './Header'
import ActionBar from './ActionBar'
import { windowContext } from '../../context/windowContext'
import useDrag from '../../hooks/useDrag'
import Layout from './Layout'

const Folder = props => {
    const { title, onClose, x, y, items } = props

    const windowCtx = useContext(windowContext)

    // const wrapperRef = useRef()
    // const targetRef = useRef()

    // useDrag(wrapperRef, targetRef)

    const renderItems = items => {
        if (typeof items === 'array' || items.length === 0) return

        return items.map((item, index) => {
            return (
                <li
                    className="folder"
                    key={index}
                    onDoubleClick={windowCtx.openPortfolio.bind(this, item)}
                >
                    <Icon name="portfolio" title={item.title} />
                </li>
            )
        })
    }

    return (
        <Layout x={x} y={y} title={title} onClose={onClose}>
            <ul className="folder__container">{renderItems(items)}</ul>
        </Layout>
    )
}

export default Folder
