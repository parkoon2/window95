import React, { useState } from 'react'
import classnames from 'classnames'

// import '../../styles/footer.css'
const Footer = () => {
    const [toggleMenu, setToogleMenu] = useState(false)

    const handleToggleMenu = () => {
        console.log(toggleMenu)

        setToogleMenu(!toggleMenu)
    }

    return (
        <div className="footer">
            <div className={classnames('menu', { active: toggleMenu })}>
                <div className="menu__title">
                    Window<span>95</span>
                </div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <div className="start" onClick={handleToggleMenu}>
                <img src="static/icons/start.png" className="start__icon" />
                <div className="start__title active">Start</div>
            </div>

            <div className="task-bar">
                <div className="divider" />
                <div className="divider shadow" />
                <div>
                    <img src="static/icons/search.png" />
                </div>
                <div>
                    <img src="static/icons/search.png" />
                </div>
                <div>
                    <img src="static/icons/search.png" />
                </div>
                <div className="divider" />
                <div className="divider shadow" />
            </div>
            <div className="divider" />
            <div className="time-zone">
                <div className="time-zone__image">
                    <img src="static/icons/sound.ico" />
                </div>
                <span className="time">
                    10:24 <span>PM</span>
                </span>
            </div>
        </div>
    )
}

export default Footer
