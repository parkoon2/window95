import React from 'react'
import App, { Container } from 'next/app'
import BaseLayout from '../components/layout/BaseLayout'
import Loading from '../components/Loading'

// import '../styles/main.scss'

import '../styles/reset.css'
import '../styles/main.css'
// import '../styles/common.css'

// import 'react-toastify/dist/ReactToastify.css'
class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Loading />

                {/* <BaseLayout>
                    <Component {...pageProps} />
                </BaseLayout> */}
            </Container>
        )
    }
}

export default MyApp
