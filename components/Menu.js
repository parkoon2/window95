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

    const handleRegist = () => {
        windowCtx.openRegisterForm()
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
                        <span>프로그램</span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="documents" />
                        <span>문서</span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="settings" />
                        <span>설정</span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="find" />
                        <span>찾기</span>
                        <div className="right-arrow" />
                    </li>
                    <li>
                        <Icon name="help" />
                        <span>도움말</span>
                    </li>
                    <li>
                        <Icon name="run" />
                        <span>실행</span>
                    </li>
                    <li onClick={handleRegist}>
                        <Icon name="user" />
                        <span>사용자 등록</span>
                    </li>
                    {/* <div className="horizontal" /> */}
                    <div className="horizontal" />

                    {/* 로그인 or 로그아웃 UI */}
                    {userCtx.user ? (
                        <li onClick={handleLogout}>
                            <Icon name="login" />
                            <span>로그아웃</span>
                        </li>
                    ) : (
                        <li onClick={handleLogin}>
                            <Icon name="login" />
                            <span>로그인</span>
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
