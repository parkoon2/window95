import React from 'react'
import App, { Container } from 'next/app'
import BaseLayout from '../components/layout/BaseLayout'
import Loading from '../components/Loading'

// import '../styles/main.scss'

import '../styles/reset.css'
import '../styles/index.css'
import Footer from '../components/shared/Footer'
import { MenuContextProvider } from '../context/menuContext'
import { WindowContextProvider } from '../context/windowContext'
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
                <WindowContextProvider>
                    <MenuContextProvider>
                        <Component {...pageProps} />
                        <Footer />
                    </MenuContextProvider>
                </WindowContextProvider>
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
