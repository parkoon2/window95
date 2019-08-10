import React, { useContext, useRef, useEffect } from 'react'
import Icon from './Icon'
import { popupContext } from '../context/popupContext'

const Popup = props => {
    const { title, onClose, x, y } = props

    const popupCtx = useContext(popupContext)
    const wrapperRef = useRef()

    let zIndex = 0
    let isMouseDown = false

    let pos1, pos2, pos3, pos4

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

    return (
        <div
            // draggable
            className="popup__container"
            style={{
                top: y,
                left: x,
                zIndex: 0
            }}
            ref={wrapperRef}
            onClick={e => {
                let biggiestZindex =
                    [...document.querySelectorAll('.popup__container')]
                        .map(el => el.style.zIndex)
                        .sort()[0] * 1

                wrapperRef.current.style.zIndex = ++biggiestZindex
            }}
        >
            <div className="container__frame">
                <div className="frame__padding">
                    <header onMouseDown={handleMouseDown}>
                        <span className="title">{title}</span>
                        <div className="btns">
                            <div className="btn">
                                <Icon size="s" name="minimize" />
                            </div>
                            <div className="btn">
                                <Icon size="s" name="fullscreen" />
                            </div>
                            <div className="btn" onClick={onClose}>
                                <Icon size="s" name="close" />
                            </div>
                        </div>
                    </header>
                    <div className="action-bar">
                        <span>
                            <u>F</u>ile
                        </span>
                        <span>
                            <u>E</u>dit
                        </span>
                        <span>
                            <u>S</u>earch
                        </span>
                        <span>
                            <u>H</u>elp
                        </span>
                    </div>
                    <div className="contents">
                        <img src="static/images/landing.jpg" />
                        <div className="devider" />
                        <div className="about">
                            <h1>About this project</h1>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                            </p>
                        </div>
                        <div className="devider" />

                        <div className="techsheet">
                            <h1>Technical Sheet</h1>
                            <ul>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Node.js</li>
                            </ul>
                        </div>

                        <div className="devider" />

                        <div className="resources">
                            <h1>Resources</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
