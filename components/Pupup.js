import React from 'react'
import Icon from './Icon'

const Popup = () => {
    return (
        <div className="popup__container">
            <div className="container__frame">
                <div className="frame__padding">
                    <header>
                        <span className="title">THiS iS title</span>
                        <div className="btns">
                            <div className="btn">
                                <Icon size="s" name="minimize" />
                            </div>
                            <div className="btn">
                                <Icon size="s" name="fullscreen" />
                            </div>
                            <div className="btn">
                                <Icon size="s" name="close" />
                            </div>
                        </div>
                    </header>
                    <div className="action-bar">
                        <span>
                            <u>F</u>ile
                        </span>
                        <span>
                            <u>E</u>dit
                        </span>
                        <span>
                            <u>S</u>earch
                        </span>
                        <span>
                            <u>H</u>elp
                        </span>
                    </div>
                    <div className="contents">
                        <img src="static/images/landing.jpg" />
                        <div className="devider" />
                        <div className="about">
                            <h1>About this project</h1>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin
                                professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words,
                                consectetur, from a Lorem Ipsum passage, and
                                going through the cites of the word in classical
                                literature, discovered the undoubtable source.
                            </p>
                        </div>
                        <div className="devider" />

                        <div className="techsheet">
                            <h1>Technical Sheet</h1>
                            <ul>
                                <li>Javascript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Node.js</li>
                            </ul>
                        </div>

                        <div className="devider" />

                        <div className="resources">
                            <h1>Resources</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup
