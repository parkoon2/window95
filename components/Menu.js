import React, { useContext } from 'react'
import classnames from 'classnames'
import { menuContext } from '../context/menuContext'
import {
    ShutDown,
    Run,
    Help,
    Find,
    Settings,
    Documents,
    Programs
} from './Icon'

const Menu = () => {
    const menu = useContext(menuContext)
    return (
        <>
            <div className={classnames('menu', { active: menu.active })}>
                <div className="menu__title">
                    Window<span>95</span>
                </div>
                <ul>
                    <li>
                        <Programs />
                        <span>
                            <u>P</u>rograms
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Documents />
                        <span>
                            <u>D</u>cuments
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Settings />
                        <span>
                            <u>S</u>ettings
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Find />
                        <span>
                            <u>F</u>ind
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Help />
                        <span>
                            <u>H</u>elp
                        </span>
                    </li>
                    <li>
                        <Run />
                        <span>
                            <u>R</u>un
                        </span>
                    </li>
                    <div className="horizontal" />
                    <li>
                        <ShutDown />
                        <span>
                            Shu<u>t</u> Down..
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu
