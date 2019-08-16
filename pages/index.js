import React, { useContext } from 'react'
import Icon from '../components/Icon'
import { windowContext } from '../context/windowContext'
import Nav from '../components/Nav'
import Warning from '../components/Warning'

const Home = ({ portfolios }) => {
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
            <Nav portfolios={portfolios} />
            {windows && renderWindows(windows)}

            {warning && <Warning message={warningMessage} />}
        </div>
    )
}

Home.getInitialProps = () => {
    let portfolios = [
        {
            id: 'id',
            title: 'Portfolio Title',
            icon: 'portfolio',
            body: `Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical
            literature, discovered the undoubtable source.`,
            tech: ['Javascript', 'HTML', 'CSS', 'Node.js'],
            git: 'https://github.com/parkoon',
            images: ['static/images/landing.jpg']
        },
        {
            id: 'id',
            title: 'KT 화상 컨설팅',
            icon: 'portfolio',
            body: `화상으로 상담 할 수 있는 웹 페이지.`,
            tech: ['Javascript', 'HTML', 'CSS', 'webrtc'],
            git: 'https://github.com/parkoon',
            images: ['static/images/landing.jpg']
        }
    ]

    return {
        portfolios
    }
}

export default Home
