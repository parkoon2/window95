import React, { useState, useContext, useEffect } from 'react'
import classnames from 'classnames'
import Menu from '../Menu'
import { withMenuContext, menuContext } from '../../context/menuContext'
import { formatAMPM, openNewWindow } from '../../helpers/utils'
import Icon from '../Icon'

// import '../../styles/footer.css'
const Footer = () => {
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
                    <Icon name="start" size="m"></Icon>
                    <div className="start__title active">시작</div>
                </div>

                <div className="task-bar">
                    <div className="vertical" />
                    <div className="vertical shadow" />
                    <div
                        className="task-bar__icon"
                        onClick={openNewWindow.bind(
                            this,
                            'https://github.com/parkoon'
                        )}
                    >
                        <Icon name="github-2" size="m"></Icon>
                    </div>
                    <div
                        className="task-bar__icon"
                        onClick={openNewWindow.bind(
                            this,
                            'https://devparkoon.tistory.com'
                        )}
                    >
                        <Icon name="blog" size="m"></Icon>
                    </div>
                    <div
                        className="task-bar__icon"
                        onClick={openNewWindow.bind(
                            this,
                            'https://youtube.com'
                        )}
                    >
                        <Icon name="youtube" size="m"></Icon>
                    </div>
                    {/* <div>
                        <img src="static/icons/search.png" />
                    </div>
                    <div>
                        <img src="static/icons/search.png" />
                    </div>
                    <div>
                        <img src="static/icons/search.png" />
                    </div> */}
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
