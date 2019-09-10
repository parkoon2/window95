import React from 'react'
import App, { Container } from 'next/app'
import BaseLayout from '../components/layout/BaseLayout'
import Loading from '../components/Loading'
import ToastPopup from '../components/ToastPopup'
// import '../styles/main.scss'

import '../styles/reset.css'
import '../styles/index.css'
import Footer from '../components/shared/Footer'
import { MenuContextProvider } from '../context/menuContext'
import { WindowContextProvider } from '../context/windowContext'
import { ToastProvider } from '../context/toastContext'
import { clientAuth, serverAuth } from '../helpers/auth'
// import '../styles/common.css'
import Cookies from 'js-cookie'
import { UserProvider } from '../context/userContext'

// import 'react-toastify/dist/ReactToastify.css'
class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        let isLoaded = false

        // 모든 페이지를 이동 할 떄 경유
        // 여기서 권한 체크를
        // 서버쪽이랑 클라이언트 쪽을 별개로 처리
        // process.browser로 클라이언트인지 서버쪽인지 확인
        let user = process.browser ? clientAuth() : serverAuth(ctx.req)

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps, isLoaded, user }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: false })
        }, 3000)
    }
    _

    renderWindowIfLoaded = () => {
        const { Component, pageProps, isLoaded, user } = this.props

        return isLoaded ? (
            <Loading />
        ) : (
            <BaseLayout>
                <UserProvider>
                    <ToastProvider>
                        <WindowContextProvider>
                            <MenuContextProvider>
                                <Component {...pageProps} user={user} />
                                <Footer />
                                <ToastPopup />
                            </MenuContextProvider>
                        </WindowContextProvider>
                    </ToastProvider>
                </UserProvider>
            </BaseLayout>
        )
    }

    render() {
        const { Component, pageProps, isLoaded } = this.props
        return <Container>{this.renderWindowIfLoaded()}</Container>
    }
}

export default MyApp
