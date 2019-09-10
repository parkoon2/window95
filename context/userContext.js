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

    isOwner = () => {
        if (this.state.user) {
            return this.state.user.role === 'owner'
        } else {
            return false
        }
    }

    render() {
        const value = {
            user: this.state.user,
            setUser: this.setUser,
            isOwner: this.isOwner
        }

        return <Provider value={value}>{this.props.children}</Provider>
    }
}
