import React, { createContext } from 'react'
import uuidv1 from 'uuid/v1'
import Portfolio from '../components/portfolio/Portfolio'
import Folder from '../components/window/Folder'

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
                        <Portfolio
                            onClose={() => this.close(id)}
                            x={100 + windows.length * 20}
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
                            x={100 + windows.length * 20}
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
                            x={100 + windows.length * 20}
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
            openPorfolioForm: this.openPorfolioForm
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
