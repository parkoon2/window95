import React, { useContext } from 'react'
import classnames from 'classnames'
import { menuContext } from '../context/menuContext'
import { CanvasIcon } from './Icon'

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
                        <span>P</span>rograms
                    </li>
                    <li>
                        <span>D</span>cument
                    </li>
                    <li>
                        <span>S</span>ettings
                    </li>
                    <li>
                        <span>F</span>ind
                    </li>
                    <li>
                        <span>H</span>elp
                    </li>
                    <li>
                        <span>R</span>un
                    </li>
                    <div className="divider horizontal" />
                    <li>
                        <CanvasIcon />
                        Shu<span>t</span> Down..
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu
