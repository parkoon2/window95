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
import { windowContext } from '../context/windowContext'

const Menu = () => {
    const menuCtx = useContext(menuContext)
    const windowCtx = useContext(windowContext)

    return (
        <>
            <div className={classnames('menu', { active: menuCtx.active })}>
                <div className="menu__title">
                    Window<span>95</span>
                </div>
                <ul>
                    <li>
                        <Icon name="programs" />
                        <span>
                            <u>프</u>로그램
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="documents" />
                        <span>
                            <u>문</u>서
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="settings" />
                        <span>
                            <u>설</u>정
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="find" />
                        <span>
                            <u>찾</u>기
                        </span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="help" />
                        <span>
                            <u>도</u>움말
                        </span>
                    </li>
                    <li>
                        <Icon name="run" />
                        <span>
                            <u>실</u>행
                        </span>
                    </li>
                    {/* <div className="horizontal" /> */}
                    <div className="horizontal" />
                    <li
                        onClick={() => {
                            windowCtx.openLoginForm()
                            menuCtx.hideMenu()
                        }}
                    >
                        <Icon name="login" />
                        <span>
                            로그<u>인</u>
                        </span>
                    </li>
                    {/* <div className="horizontal" /> */}

                    <li>
                        <Icon name="login" />
                        <span>
                            로그아<u>웃</u>
                        </span>
                    </li>
                    <li>
                        <Icon name="shutdown" />
                        <span>
                            시스템 <u>종</u>료
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu
