import React from 'react'
import App, { Container } from 'next/app'
import BaseLayout from '../components/layout/BaseLayout'
import Loading from '../components/Loading'

// import '../styles/main.scss'

import '../styles/reset.css'
import '../styles/index.css'
import Footer from '../components/shared/Footer'
import { MenuContextProvider } from '../context/menuContext'
import { PopupContextProvider } from '../context/popupContext'
import Popup from '../components/Pupup'
// import '../styles/common.css'

// import 'react-toastify/dist/ReactToastify.css'
class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        let isLoaded = false

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps, isLoaded }
    }

    renderWindowIfLoaded = () => {
        const { Component, pageProps, isLoaded } = this.props

        return isLoaded ? (
            <Loading />
        ) : (
            <BaseLayout>
                <PopupContextProvider>
                    <MenuContextProvider>
                        <Component {...pageProps} />
                        <Footer />
                    </MenuContextProvider>
                </PopupContextProvider>
            </BaseLayout>
        )
    }

    render() {
        const { Component, pageProps, isLoaded } = this.props
        return (
            <Container>
                {this.renderWindowIfLoaded()}
                {/* <Popup title={'hello1'} /> */}
            </Container>
        )
    }
}

export default MyApp
