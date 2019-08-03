import React from 'react'
import NavBar from '../components/shared/NavBar'
import App, { Container } from 'next/app'
import BaseLayout from '../components/layout/BaseLayout'
import { ToastContainer } from 'react-toastify'

import '../styles/main.scss'

import '../styles/reset.css'
import '../styles/common.css'

import 'react-toastify/dist/ReactToastify.css'
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
                <BaseLayout>
                    <Component {...pageProps} />
                    <ToastContainer />
                </BaseLayout>
            </Container>
        )
    }
}

export default MyApp
