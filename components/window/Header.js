import Icon from '../Icon'
import { useState } from 'react'

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
            document.querySelector('.window__layout').requestFullscreen()
            document.querySelector('.contents').style.height = '100%'
        }
    }

    return (
        <header className="action-header" ref={_ref}>
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
