import React, { useContext } from 'react'
import classnames from 'classnames'
import { menuContext } from '../context/menuContext'
import Icon from './Icon'
import { windowContext } from '../context/windowContext'
import { userConext } from '../context/userContext'
import Cookies from 'js-cookie'

const Menu = () => {
    const menuCtx = useContext(menuContext)
    const windowCtx = useContext(windowContext)
    const userCtx = useContext(userConext)

    const handleLogout = () => {
        menuCtx.hideMenu()
        setTimeout(() => {
            if (confirm('로그아웃 하시겠습니까?')) {
                Cookies.remove('jwt')
                userCtx.setUser(null)
            }
        }, 300)
    }

    const handleLogin = () => {
        windowCtx.openLoginForm()
        menuCtx.hideMenu()
    }

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
                    <li
                        onClick={() => {
                            windowCtx.openRegisterForm()
                            menuCtx.hideMenu()
                        }}
                    >
                        <Icon name="run" />
                        <span>
                            <u>사</u>용자 등록
                        </span>
                    </li>
                    {/* <div className="horizontal" /> */}
                    <div className="horizontal" />

                    {/* 로그인 or 로그아웃 UI */}
                    {userCtx.user ? (
                        <li onClick={handleLogout}>
                            <Icon name="login" />
                            <span>
                                로그아<u>웃</u>
                            </span>
                        </li>
                    ) : (
                        <li onClick={handleLogin}>
                            <Icon name="login" />
                            <span>
                                로그<u>인</u>
                            </span>
                        </li>
                    )}

                    {/* <div className="horizontal" /> */}

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
