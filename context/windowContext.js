import React, { createContext } from 'react'
import uuidv1 from 'uuid/v1'
import Popup from '../components/window/Popup'
import Folder from '../components/window/Folder'

export const popupContext = createContext()
const { Provider, Consumer } = popupContext

export class WindowContextProvider extends React.Component {
    state = {
        windows: [] // 최대 3개
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
                            onClose={() => this.closeWindow(id)}
                            x={100 + windows.length * 20}
                            y={100 + windows.length * 20}
                        />
                    )
                }
            ]
        })
    }

    openWindow = title => {
        const id = uuidv1()
        const { windows } = this.state

        this.setState({
            windows: [
                ...windows,
                {
                    id,
                    component: (
                        <Popup
                            title={title}
                            onClose={() => this.closeWindow(id)}
                            x={100 + windows.length * 20}
                            y={100 + windows.length * 20}
                        />
                    )
                }
            ]
        })
    }

    closeWindow = id => {
        this.setState({
            windows: this.state.windows.filter(popup => {
                console.log(popup.id, id)
                return popup.id !== id
            })
        })
    }

    render() {
        const value = {
            windows: this.state.windows,
            openWindow: this.openWindow,
            openFolder: this.openFolder
            // closeWindow: this.closeWindow
        }

        return <Provider value={value}>{this.props.children}</Provider>
    }
}

export const withPopupContext = Component =>
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
