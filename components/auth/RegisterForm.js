import Layout from '../window/Layout'
import Icon from '../Icon'
import Button from '../Button'
import { register } from '../../actions'
import { useState, useContext } from 'react'
import { toastContext } from '../../context/toastContext'

const INITIAL_VALUE = {
    id: '',
    password: '',
    passwordConfirm: '',
    term: '',
    username: ''
}

const RegisterForm = ({ x, y, onClose, title }) => {
    const [user, serUser] = useState(INITIAL_VALUE)

    const toastCtx = useContext(toastContext)

    const onInputChange = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        serUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmitForm = async () => {
        if (!user.id) return alert('아이디를 입력해주세요')
        if (!user.password) return alert('패스워드를 입력해주세요')
        if (!user.passwordConfirm) return alert('패스워드를 입력해주세요')
        if (user.password !== user.passwordConfirm)
            return alert('패스워드가 일치하지 않습니다')
        if (!user.username) return alert('사용자 이름을 입력해주세요')
        if (!user.term) return alert('가입에 동의를 해주세요')

        const newUser = {
            id: user.id,
            password: user.password,
            username: user.username
        }

        try {
            await register(newUser)
            toastCtx.addToast('사용자로 등록 되었습니다')
            onClose()
        } catch (err) {
            if (err.message) {
                alert(err.message)
            }
            console.error(err)
        }
    }

    return (
        <Layout
            noActionbar
            x="655px"
            y="328px"
            onClose={onClose}
            width="670px"
            height="278px"
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
                    <div className="form__input mb-7">
                        <label>아이디:</label>
                        <input
                            name="id"
                            type="text"
                            value={user.id}
                            onChange={onInputChange}
                        ></input>
                    </div>
                    <div className="form__input mb-7">
                        <label>비밀번호:</label>
                        <input
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={onInputChange}
                        ></input>
                    </div>
                    <div className="form__input mb-7">
                        <label>비밀번호 확인:</label>
                        <input
                            name="passwordConfirm"
                            type="password"
                            value={user.passwordConfirm}
                            onChange={onInputChange}
                        ></input>
                    </div>
                    <div className="form__input mb-7">
                        <label>사용자 이름:</label>
                        <input
                            name="username"
                            type="text"
                            value={user.username}
                            onChange={onInputChange}
                        ></input>
                    </div>
                    <div className="form__input mb-7">
                        <label>가입 동의:</label>
                        <input
                            name="term"
                            type="checkbox"
                            checked={user.term}
                            onChange={onInputChange}
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

export default RegisterForm
