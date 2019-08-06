import React, { useState, useContext } from 'react'
import classnames from 'classnames'
import Menu from '../Menu'
import { withMenuContext, menuContext } from '../../context/menuContext'

// import '../../styles/footer.css'
const Footer = props => {
    const menu = useContext(menuContext)

    return (
        <>
            <Menu />
            <div className="footer">
                <div className="start" onClick={menu.toggle}>
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
        </>
    )
}

// export default withMenuContext(Footer)
export default Footer
