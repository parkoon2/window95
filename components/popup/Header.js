import Icon from '../Icon'
import { useEffect, useState } from 'react'

const Header = props => {
    const { title, onClose, wrapper } = props

    const [fullscreen, togglefullscreen] = useState(false)
    let isMouseDown = false

    let pos1, pos2, pos3, pos4

    let isFullScreen = false

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

        wrapper.current.style.top = wrapper.current.offsetTop - pos2 + 'px'
        wrapper.current.style.left = wrapper.current.offsetLeft - pos1 + 'px'
    }

    const handleMouseUp = () => {
        isMouseDown = false
        document.onmousemove = null
        document.onmouseup = null
    }

    return (
        <header onMouseDown={handleMouseDown}>
            <span className="title">{title}</span>
            <div className="btns">
                <div className="btn">
                    <Icon size="s" name="minimize" />
                </div>
                <div
                    className="btn"
                    onClick={() => {
                        !fullscreen
                            ? wrapper.current.requestFullscreen()
                            : document.exitFullscreen()

                        togglefullscreen(true)

                        // 리액트 스타일로 어떻게 처리 할 수 있을까?
                        document.querySelector('.contents').style.height =
                            '100%'
                        console.log(wrapper.current.style)
                    }}
                >
                    <Icon size="s" name="fullscreen" />
                </div>
                <div className="btn" onClick={onClose}>
                    <Icon size="s" name="close" />
                </div>
            </div>
        </header>
    )
}

export default Header
