import React from 'react'
// import '../../styles/footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="start">
                <img src="static/icons/start.png" className="start__icon" />
                <div className="start__title">Start</div>
            </div>

            <div className="divider" />
            <div className="divider shadow" />

            <div className="task-bar">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="divider" />
            <div className="divider shadow" />
            <div className="divider" />
            <div className="time-zone">
                <div className="volume" />
                <span>10:24 PM</span>
            </div>
        </div>
    )
}

export default Footer
