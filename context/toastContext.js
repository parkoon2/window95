import React, { createContext } from 'react'

export const toastContext = createContext()
const { Provider, Consumer } = toastContext

export class ToastProvider extends React.Component {
    toastCount = 0
    toastWidth = 415
    toastHeight = 77

    state = {
        toasts: []
    }

    addToast = message => {
        const timer = setTimeout(
            id => {
                this.removeToast(id)
            },
            3000,
            this.toastCount
        )

        const audio = new Audio('/static/assets/notification.wav')
        audio.volume = 0.7
        audio.play()

        this.setState(
            {
                toasts: [
                    ...this.state.toasts,
                    {
                        id: this.toastCount,
                        timer,
                        message,
                        x: 4,
                        y:
                            37 +
                            this.toastHeight * this.state.toasts.length +
                            this.state.toasts.length * 4
                    }
                ]
            },
            () => {}
        )
        ++this.toastCount
    }

    removeToast = id => {
        const foundIndex = this.state.toasts.findIndex(t => t.id === id)

        if (
            this.state.toasts[foundIndex] &&
            this.state.toasts[foundIndex].timer
        ) {
            clearTimeout(this.state.toasts[foundIndex].timer)
        }

        this.setState({
            toasts: this.state.toasts
                .filter(t => t.id !== id)
                .map((t, index) => {
                    return {
                        ...t,
                        y: 37 + this.toastHeight * index + index * 4
                    }
                })
        })
    }

    render() {
        const value = {
            removeToast: this.removeToast,
            addToast: this.addToast,
            toasts: this.state.toasts
        }

        return <Provider value={value}>{this.props.children}</Provider>
    }
}
