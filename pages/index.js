import React from 'react'
import WindowIcon from '../components/WindowIcon'
import Icon from '../components/Icon'
// import '../styles/home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="window">
                {/* <WindowIcon /> */}
                <Icon name="computer" title={'My Computer'} />
            </div>
        )
    }
}

export default Home
