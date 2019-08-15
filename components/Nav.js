import Icon from './Icon'
import { popupContext } from '../context/windowContext'
import { useContext } from 'react'

const Nav = ({ portfolios }) => {
    const popupCtx = useContext(popupContext)

    return (
        <ul className="window__container">
            <li
                className="item"
                style={{ top: 0, left: 0 }}
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="computer" title="About me" />
            </li>
            <li
                className="item"
                style={{ top: 100, left: 0 }}
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="recyclebin" title="Recycle Bin" />
            </li>
            <li
                className="item"
                style={{ top: 200, left: 0 }}
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="internet" title="The internet" />
            </li>
            <li
                className="item"
                style={{ top: 300, left: 0 }}
                // onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name="inbox" title="Contact me" />
            </li>
            <li
                className="item"
                style={{ top: 400, left: 0 }}
                onDoubleClick={popupCtx.openFolder.bind(
                    this,
                    'Portfolios',
                    portfolios
                )}
            >
                <Icon name="briefcase" title="Portfolios" />
            </li>
        </ul>
    )
}

export default Nav
