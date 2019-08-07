import React, { createContext } from 'react'

export const iconContext = createContext()
const { Provider, Consumer } = iconContext

export class IconContextProvider extends React.Component {
    state = {
        pressed: false
    }

    toggle = () => {
        this.setState(prevState => ({ pressed: !prevState.pressed }))
    }

    render() {
        const value = {
            toggle: this.toggle,
            pressed: this.state.pressed
        }

        return <Provider value={value}>{this.props.children}</Provider>
    }
}

export const withIconContext = Component =>
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
