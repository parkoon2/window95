import { createContext } from 'react'

export const userConext = createContext(null)

const { Provider } = userConext

export class UserProvider extends React.Component {
    state = {
        user: ''
    }

    setUser = user => {
        this.setState({
            user
        })
    }

    render() {
        const value = {
            user: this.state.user,
            setUser: this.setUser
        }

        return <Provider value={value}>{this.props.children}</Provider>
    }
}
