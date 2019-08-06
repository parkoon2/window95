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
                        <span>P</span>rograms
                    </li>
                    <li>
                        <Documents />
                        <span>D</span>cuments
                    </li>
                    <li>
                        <Settings />
                        <span>S</span>ettings
                    </li>
                    <li>
                        <Find />
                        <span>F</span>ind
                    </li>
                    <li>
                        <Help />
                        <span>H</span>elp
                    </li>
                    <li>
                        <Run />
                        <span>R</span>un
                    </li>
                    <div className="divider horizontal" />
                    <li>
                        <ShutDown />
                        Shu<span>t</span> Down..
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu
