import React, { useRef, useEffect } from 'react'
import Icon from '../Icon'
import Header from './Header'
import ActionBar from './ActionBar'

const Folder = props => {
    const { title, onClose, x, y, portfolios } = props

    const wrapperRef = useRef()
    let isMouseDown = false

    let pos1, pos2, pos3, pos4

    useEffect(() => {
        wrapperRef.current.style.zIndex = getIndexOfPopupOnTop()
    }, [])

    const handleMouseDown = e => {
        isMouseDown = true

        pos3 = e.clientX
        pos4 = e.clientY

        // call a function whenever the cursor moves:
        document.onmousemove = handleMouseMove
        document.onmouseup = handleMouseUp
    }

    const handleMouseMove = e => {
        if (!isMouseDown) return

        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY

        wrapperRef.current.style.top =
            wrapperRef.current.offsetTop - pos2 + 'px'
        wrapperRef.current.style.left =
            wrapperRef.current.offsetLeft - pos1 + 'px'
    }

    const handleMouseUp = () => {
        isMouseDown = false
        document.onmousemove = null
        document.onmouseup = null
    }

    const getIndexOfPopupOnTop = () =>
        ++[...document.querySelectorAll('.popup__container')]
            .map(el => el.style.zIndex * 1) // string to number
            .sort((a, b) => b - a)[0]

    const moveToTopView = () => {
        wrapperRef.current.style.zIndex = getIndexOfPopupOnTop()
    }

    return (
        <div
            // draggable
            className="popup__container"
            style={{
                top: y,
                left: x
            }}
            ref={wrapperRef}
            onMouseDown={moveToTopView}
        >
            <div className="container__frame">
                <div className="frame__padding">
                    <Header
                        wrapper={wrapperRef}
                        title={title}
                        onClose={onClose}
                    />
                    <ActionBar />
                    <div className="contents">
                        <Icon name="briefcase" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Folder
