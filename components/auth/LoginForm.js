import Layout from '../window/Layout'
import Icon from '../Icon'
import Button from '../Button'
import { login } from '../../actions'

const LoginForm = ({ x, y, onClose, title }) => {
    return (
        <Layout
            noActionbar
            x="655px"
            y="328px"
            onClose={onClose}
            width="500px"
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
                    <div className="form__id">
                        <label>아이디:</label>
                        <input type="text"></input>
                    </div>
                    <div className="form__pwd">
                        <label>비밀번호:</label>
                        <input type="password"></input>
                    </div>
                </div>
                <div className="login__btns">
                    <div className="btns__ok">
                        <Button
                            title="확인"
                            onClick={async () => {
                                try {
                                    await login()
                                } catch (err) {
                                    console.error(err)
                                }
                            }}
                        ></Button>
                    </div>
                    <div className="btns__cancel">
                        <Button
                            title="취소"
                            onClick={() => {
                                alert('click')
                            }}
                        ></Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LoginForm
