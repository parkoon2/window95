import React, { createContext } from 'react'

export const menuContext = createContext()
const { Provider, Consumer } = menuContext

export class MenuContextProvider extends React.Component {
    state = {
        active: false
    }

    toggle = () => {
        this.setState(prevState => ({ active: !prevState.active }))
    }

    render() {
        const value = {
            toggle: this.toggle,
            active: this.state.active
        }

        return <Provider value={value}>{this.props.children}</Provider>
    }
}

export const withMenuContext = Component =>
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
            return <Consumer>{args => <Component {...args} />}</Consumer>
        }
    }
