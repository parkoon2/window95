import Layout from '../window/Layout'
import Icon from '../Icon'
import Button from '../Button'
import { login } from '../../actions'
import { useState, useContext } from 'react'
import { toastContext } from '../../context/toastContext'

const INITIAL_USER = {
    id: '',
    password: ''
}

const LoginForm = ({ x, y, onClose, title }) => {
    const [user, setUser] = useState(INITIAL_USER)
    const { addToast } = useContext(toastContext)

    const handleInputChange = e => {
        const target = e.target
        const { name, value } = target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmitForm = async () => {
        try {
            const res = await login(user)
            const { token, user } = res
            onClose()
            addToast('로그인에 성공했습니다')

            // 로그인 성공
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
        } catch (err) {
            if (err.message) {
                alert(err.message)
            }
        }
    }

    return (
        <Layout
            noActionbar
            x="655px"
            y="328px"
            onClose={onClose}
            width="516px"
            height="217px"
            title={title}
        >
            <div className="login__container">
                <div className="login__image">
                    <Icon name="login" size="xlg"></Icon>
                </div>
                <div className="login__form">
                    <p className="form__title">
                        관리자로 로그인하기 위해 아이디와 <br />
                        패스워드를 입력해주세요.
                    </p>
                    <div className="form__input">
                        <label>아이디:</label>
                        <input
                            type="text"
                            name="id"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="form__input">
                        <label>비밀번호:</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div className="login__btns">
                    <div className="btns__ok">
                        <Button
                            title="확인"
                            onClick={handleSubmitForm}
                        ></Button>
                    </div>
                    <div className="btns__cancel">
                        <Button title="취소" onClick={onClose}></Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LoginForm
