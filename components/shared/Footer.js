import React, { useState, useContext, useEffect } from 'react'
import classnames from 'classnames'
import Menu from '../Menu'
import { withMenuContext, menuContext } from '../../context/menuContext'
import { formatAMPM } from '../../helpers/utils'

// import '../../styles/footer.css'
const Footer = props => {
    const menu = useContext(menuContext)

    const [time, setTime] = useState(formatAMPM(new Date()))

    let timer = null

    useEffect(() => {
        updateTimer()

        return () => {
            removeTimer()
        }
    }, [])

    const updateTimer = () => {
        timer = setInterval(() => {
            setTime(formatAMPM(new Date()))
        }, 1000)
    }
    const removeTimer = () => {
        if (timer) clearInterval(timer)
    }

    return (
        <>
            <Menu />
            <div className="footer">
                <div
                    className={classnames('start', { pressed: menu.active })}
                    onClick={menu.toggle}
                >
                    <img src="static/icons/start.png" className="start__icon" />
                    <div className="start__title active">Start</div>
                </div>

                <div className="task-bar">
                    <div className="vertical" />
                    <div className="vertical shadow" />
                    <div>
                        <img src="static/icons/search.png" />
                    </div>
                    <div>
                        <img src="static/icons/search.png" />
                    </div>
                    <div>
                        <img src="static/icons/search.png" />
                    </div>
                    <div className="vertical" />
                    <div className="vertical shadow" />
                </div>
                <div className="vertical" />
                <div className="time-zone">
                    <div className="time-zone__image">
                        <img src="static/icons/sound.ico" />
                    </div>
                    <span className="time">
                        {time}
                        {/* 10:24 <span>PM</span> */}
                    </span>
                </div>
            </div>
        </>
    )
}

// export default withMenuContext(Footer)
export default Footer
