import Icon from '../Icon'
import { useEffect, useState } from 'react'

const Header = props => {
    const { title, onClose, wrapper } = props

    const [fullscreen, setFullscreen] = useState(false)
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

        wrapper.current.style.top = wrapper.current.offsetTop - pos2 + 'px'
        wrapper.current.style.left = wrapper.current.offsetLeft - pos1 + 'px'
    }

    const handleMouseUp = () => {
        isMouseDown = false
        document.onmousemove = null
        document.onmouseup = null
    }

    const handleResizing = () => {
        if (fullscreen) {
            setFullscreen(false)
            document.exitFullscreen()
            document.querySelector('.contents').style.height = null
        } else {
            setFullscreen(true)
            wrapper.current.requestFullscreen()
            document.querySelector('.contents').style.height = '100%'
        }
    }

    return (
        <header onMouseDown={handleMouseDown}>
            <span className="title">{title}</span>
            <div className="btns">
                <div className="btn">
                    <Icon size="s" name="minimize" />
                </div>
                <div className="btn" onClick={handleResizing}>
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
