import React from 'react'
import App, { Container } from 'next/app'
import BaseLayout from '../components/layout/BaseLayout'
import Loading from '../components/Loading'

// import '../styles/main.scss'

import '../styles/reset.css'
import '../styles/main.css'
import Footer from '../components/shared/Footer'
import { MenuContextProvider } from '../context/menuContext'
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

    render() {
        const { Component, pageProps, isLoaded } = this.props
        return (
            <Container>
                {isLoaded ? (
                    <Loading />
                ) : (
                    <BaseLayout>
                        <MenuContextProvider>
                            <Component {...pageProps} />
                            <Footer />
                        </MenuContextProvider>
                    </BaseLayout>
                )}
            </Container>
        )
    }
}

export default MyApp
