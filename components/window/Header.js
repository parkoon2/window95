import Icon from '../Icon'
import { useEffect, useState } from 'react'

const Header = props => {
    const { title, onClose, _ref } = props

    const [fullscreen, setFullscreen] = useState(false)

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
        <header className="action-header" ref={_ref}>
            {/* <header className="action-header" onMouseDown={handleMouseDown}> */}
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
