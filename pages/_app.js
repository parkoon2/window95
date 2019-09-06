import React from 'react'
import App, { Container } from 'next/app'
import BaseLayout from '../components/layout/BaseLayout'
import Loading from '../components/Loading'
import Google from '../components/internet/Google'
import ToastPopup from '../components/ToastPopup'
// import '../styles/main.scss'

import '../styles/reset.css'
import '../styles/index.css'
import Footer from '../components/shared/Footer'
import { MenuContextProvider } from '../context/menuContext'
import { WindowContextProvider } from '../context/windowContext'
import ContactForm from '../components/contact/ContactForm'
import { ToastProvider } from '../context/toastContext'
import LoginForm from '../components/auth/LoginForm'
// import '../styles/common.css'

// import 'react-toastify/dist/ReactToastify.css'
class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        let isLoaded = false
        console.log('getInitialProps in _app.js')
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps, isLoaded }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: false })
        }, 3000)
    }
    _

    renderWindowIfLoaded = () => {
        const { Component, pageProps, isLoaded } = this.props

        return isLoaded ? (
            <Loading />
        ) : (
            <BaseLayout>
                <ToastProvider>
                    <WindowContextProvider>
                        <MenuContextProvider>
                            <Component {...pageProps} />
                            <Footer />
                            <ToastPopup />
                        </MenuContextProvider>
                    </WindowContextProvider>
                </ToastProvider>
            </BaseLayout>
        )
    }

    render() {
        const { Component, pageProps, isLoaded } = this.props
        return <Container>{this.renderWindowIfLoaded()}</Container>
    }
}

export default MyApp
