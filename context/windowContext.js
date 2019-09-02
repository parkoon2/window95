import React, { createContext } from 'react'
import uuidv1 from 'uuid/v1'
import Portfolio from '../components/portfolio/Portfolio'
import PortForm from '../components/portfolio/PortForm'
import Folder from '../components/window/Folder'
import About from '../components/about/Aboout'
import Google from '../components/internet/Google'
import ContactForm from '../components/contact/ContactForm'

export const windowContext = createContext()
const { Provider, Consumer } = windowContext

export class WindowContextProvider extends React.Component {
    state = {
        windows: [], // 최대 3개
        warning: false,
        warningMessage: ''
    }

    showWarning = message => {
        this.setState({
            warning: true,
            warningMessage: message
        })
    }

    hideWarning = () => {
        this.setState({
            warning: false,
            warningMessage: ''
        })
    }

    openPorfolioForm = () => {
        const id = uuidv1()
        const { windows } = this.state

        this.setState({
            windows: [
                ...windows,
                {
                    id,
                    component: (
                        <PortForm
                            title="문서작성"
                            onClose={() => this.close(id)}
                            x={333 + windows.length * 20}
                            y={100 + windows.length * 20}
                        />
                    )
                }
            ]
        })
    }
    openInternet = () => {
        const id = uuidv1()
        const { windows } = this.state

        this.setState({
            windows: [
                ...windows,
                {
                    id,
                    component: (
                        <Google
                            title="인터넷"
                            onClose={() => this.close(id)}
                            x={333 + windows.length * 20}
                            y={100 + windows.length * 20}
                        />
                    )
                }
            ]
        })
    }
    openAboutMe = () => {
        const id = uuidv1()
        const { windows } = this.state

        this.setState({
            windows: [
                ...windows,
                {
                    id,
                    component: (
                        <About
                            title="내 컴퓨터"
                            onClose={() => this.close(id)}
                            x={333 + windows.length * 20}
                            y={100 + windows.length * 20}
                        />
                    )
                }
            ]
        })
    }

    openFolder = (title, items) => {
        const id = uuidv1()
        const { windows } = this.state

        this.setState({
            windows: [
                ...windows,
                {
                    id,
                    component: (
                        <Folder
                            title={title}
                            items={items}
                            onClose={() => this.close(id)}
                            x={333 + windows.length * 20}
                            y={100 + windows.length * 20}
                        />
                    )
                }
            ]
        })
    }

    openPortfolio = detail => {
        const id = uuidv1()
        const { windows } = this.state

        this.setState({
            windows: [
                ...windows,
                {
                    id,
                    component: (
                        <Portfolio
                            detail={detail}
                            onClose={() => this.close(id)}
                            x={333 + windows.length * 20}
                            y={100 + windows.length * 20}
                        />
                    )
                }
            ]
        })
    }
    openContact = () => {
        const id = uuidv1()
        const { windows } = this.state

        this.setState({
            windows: [
                ...windows,
                {
                    id,
                    component: (
                        <ContactForm
                            title="편지쓰기"
                            onClose={() => this.close(id)}
                            x={333 + windows.length * 20}
                            y={100 + windows.length * 20}
                        />
                    )
                }
            ]
        })
    }

    close = id => {
        this.setState({
            windows: this.state.windows.filter(Portfolio => {
                console.log(Portfolio.id, id)
                return Portfolio.id !== id
            })
        })
    }

    render() {
        const { windows, warning, warningMessage } = this.state
        const value = {
            windows,
            warning,
            warningMessage,
            openPortfolio: this.openPortfolio,
            openFolder: this.openFolder,
            hideWarning: this.hideWarning,
            showWarning: this.showWarning,
            openPorfolioForm: this.openPorfolioForm,
            openAboutMe: this.openAboutMe,
            openInternet: this.openInternet,
            openContact: this.openContact
            // close: this.close
        }

        return <Provider value={value}>{this.props.children}</Provider>
    }
}

export const withwindowContext = Component =>
    class WrapperComponent extends React.Component {
        // static async getInitialProps(args) {
        //     const pageProps =
        //         Component.getInitialProps &&
        //         (await Component.getInitialProps(args))

        //     return {
        //         ...pageProps
        //     }
        // }
        render() {
            return (
                <Consumer>
                    {args => <Component {...args} {...this.props} />}
                </Consumer>
            )
        }
    }
