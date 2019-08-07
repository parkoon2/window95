import React, { useContext } from 'react'
import classnames from 'classnames'
import { menuContext } from '../context/menuContext'
import Icon, {
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
                        <Icon name="programs" />
                        <span>
                            <u>P</u>rograms
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="documents" />
                        <span>
                            <u>D</u>cuments
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="settings" />
                        <span>
                            <u>S</u>ettings
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="find" />
                        <span>
                            <u>F</u>ind
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="help" />
                        <span>
                            <u>H</u>elp
                        </span>
                    </li>
                    <li>
                        <Icon name="run" />
                        <span>
                            <u>R</u>un
                        </span>
                    </li>
                    <div className="horizontal" />
                    <li>
                        <Icon name="shutdown" />
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
