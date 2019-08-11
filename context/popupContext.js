import React, { createContext } from 'react'
import uuidv1 from 'uuid/v1'
import Popup from '../components/popup/Popup'

export const popupContext = createContext()
const { Provider, Consumer } = popupContext

export class PopupContextProvider extends React.Component {
    state = {
        popups: [] // 최대 3개
    }

    openPopup = title => {
        const id = uuidv1()
        const { popups } = this.state

        this.setState({
            popups: [
                ...popups,
                {
                    id,
                    component: (
                        <Popup
                            title={title}
                            onClose={() => this.closePopup(id)}
                            x={100 + popups.length * 20}
                            y={100 + popups.length * 20}
                        />
                    )
                }
            ]
        })
    }

    closePopup = id => {
        this.setState({
            popups: this.state.popups.filter(popup => {
                console.log(popup.id, id)
                return popup.id !== id
            })
        })
    }

    render() {
        const value = {
            popups: this.state.popups,
            openPopup: this.openPopup
            // closePopup: this.closePopup
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
