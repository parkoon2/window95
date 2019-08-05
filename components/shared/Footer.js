import React from 'react'
// import '../../styles/footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="start">
                <img src="static/icons/start.png" className="start__icon" />
                <div className="start__title">Start</div>
            </div>

            <div className="task-bar">
                <div className="divider" />
                <div className="divider shadow" />
                <div>
                    <img src="static/icons/search.png" />
                </div>
                <div>
                    <img src="static/icons/search.png" />
                </div>
                <div>
                    <img src="static/icons/search.png" />
                </div>
                <div className="divider" />
                <div className="divider shadow" />
            </div>
            <div className="divider" />
            <div className="time-zone">
                <div className="time-zone__image">
                    <img src="static/icons/sound.ico" />
                </div>
                <span className="time">
                    10:24 <span>PM</span>
                </span>
            </div>
        </div>
    )
}

export default Footer
