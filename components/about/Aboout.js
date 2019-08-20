import Layout from '../window/Layout'
import Button from '../Button'
import SpecLogo from './SpecLogo'
import { useState } from 'react'
const About = ({ onClose, x, y }) => {
    const [currentTab, setCurrentTab] = useState('tab01')

    const handleTabChange = e => {
        setCurrentTab(e.target.id)
    }

    return (
        <Layout
            noActionbar={true}
            title="About me"
            onClose={onClose}
            x={x}
            y={y}
            background={'#c1c1c1'}
            width="550px"
            height="480px"
        >
            <div className="about__container">
                <input
                    type="radio"
                    name="tab"
                    id="tab01"
                    checked={currentTab === 'tab01'}
                    onChange={handleTabChange}
                />
                <label htmlFor="tab01">General</label>
                <input
                    type="radio"
                    name="tab"
                    id="tab02"
                    checked={currentTab === 'tab02'}
                    onChange={handleTabChange}
                />
                <label htmlFor="tab02">Performance</label>
                <input
                    type="radio"
                    name="tab"
                    id="tab03"
                    checked={currentTab === 'tab03'}
                    onChange={handleTabChange}
                />
                <label htmlFor="tab03">History</label>

                {/* General */}
                <div className="contents__box box--1">
                    <div className="flexbox">
                        <div className="contents__image">
                            <img
                                className="avatar"
                                src="static/images/landing.jpg"
                            />
                        </div>
                        <div className="contents__body">
                            <div className="body__row">
                                <div className="row__title">I am:</div>
                                <ul>
                                    <li>박종혁</li>
                                    <li>1990. 09. 17</li>
                                    <li>
                                        <a
                                            href="https://github.com/parkoon"
                                            target="__blank"
                                        >
                                            https://github.com/parkoon
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://devparkoon.tistory.com"
                                            target="__blank"
                                        >
                                            https://devparkoon.tistory.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="body__row">
                                <div className="row__title">Pros:</div>
                                <ul>
                                    <li>이것이 나의 장점 1</li>
                                    <li>이것이 나의 장점 2</li>
                                    <li>이것이 나의 장점 3</li>
                                </ul>
                            </div>
                            <div className="body__row">
                                <div className="row__title">Cons:</div>

                                <ul>
                                    <li>이것이 나의 단점 1</li>
                                    <li>이것이 나의 단점 2</li>
                                    <li>이것이 나의 단점 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Performance */}
                <div className="contents__box box--2">
                    <div className="flexbox">
                        <div className="contents__image">
                            <SpecLogo width={60} x={10} y={10} name="html" />
                            <SpecLogo width={53} x={120} y={1} name="css" />
                            <SpecLogo
                                width={110}
                                x={60}
                                y={70}
                                name="javascript"
                            />
                            <SpecLogo width={92} x={-20} y={70} name="react" />
                            <SpecLogo
                                width={92}
                                x={120}
                                y={140}
                                name="nodejs"
                            />
                            <SpecLogo
                                width={112}
                                x={14}
                                y={140}
                                name="webrtc"
                            />
                            <SpecLogo width={37} x={14} y={230} name="socket" />
                            <SpecLogo width={60} x={100} y={230} name="redux" />
                        </div>
                        <div className="contents__body">
                            <div className="body__row">
                                <div className="row__title">Skill:</div>
                                <ul>
                                    <li>HTML / CSS</li>
                                    <li>Javascript / ES2015+</li>
                                    <li>jQuery</li>
                                    <li>React / Redux / React Native</li>
                                    <li>Next js</li>
                                    <li>Node js / Express</li>
                                    <li>WebRTC</li>
                                    <li>Socket io</li>
                                    <li>Redis</li>
                                    <li>MongoDB</li>
                                    <li>MySQL / Postgress</li>
                                    <li>Git / Github</li>
                                    <li>Heroku</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hardware */}
                <div className="contents__box box--3">
                    <div className="flexbox">
                        <div className="contents__body">
                            <div className="body__row">
                                <div className="row__title">Till now:</div>
                                <ul>
                                    <li>2009년 가천대 컴퓨터공학과</li>
                                    <li>2015년 가천대 SNS 연구실</li>
                                    <li>
                                        2015년 멀티미디어학회, 융복합지식학회,
                                        국제학술대회 4건 논문 등재
                                    </li>
                                    <li>
                                        2016년{' '}
                                        <i>
                                            Mobile health screening service
                                            using motion interface with NFC on
                                            the smart phone
                                        </i>{' '}
                                        SCIE 논문 등재
                                    </li>
                                    <li>2016년 ~ 지금까지 날리지포인트</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about__btns">
                <Button onClick={onClose} title="OK" />
                <Button onClick={onClose} title="Cancel" />
            </div>
        </Layout>
    )
}

export default About
