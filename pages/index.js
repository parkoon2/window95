import React, { useContext } from 'react'
import Icon from '../components/Icon'
import { windowContext } from '../context/windowContext'
import Nav from '../components/Nav'
import Warning from '../components/Warning'
import PortForm from '../components/portfolio/PortForm'
import { getPortfolios } from '../actions'

const Home = () => {
    const windowCtx = useContext(windowContext)
    const { windows, warning, warningMessage } = windowCtx

    const handleDoubleClick = icon => {
        const { type } = icon.detail
        alert(type)
        switch (type) {
            case 'folder': {
                break
            }
        }
    }

    const renderIcons = icons =>
        icons.map((icon, index) => (
            <li
                key={index}
                className="item"
                style={{ top: icon.pos.y, left: icon.pos.x }}
                onDoubleClick={() => handleDoubleClick(icon)}
            >
                <Icon name={icon.name} title={icon.displayName} />
            </li>
        ))

    const renderWindows = windows =>
        windows.map((popup, index) => (
            <React.Fragment key={index}>{popup.component}</React.Fragment>
        ))
    return (
        <div className="main">
            <Nav />
            {windows && renderWindows(windows)}

            {warning && <Warning message={warningMessage} />}
        </div>
    )
}

Home.getInitialProps = async () => {}

export default Home
