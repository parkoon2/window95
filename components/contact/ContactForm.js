import Layout from '../window/Layout'
import Icon from '../Icon'
import { useState, useContext } from 'react'
import Button from '../Button'
import useFormValidation from '../../hooks/useFormValidation'
import { contactValidator } from '../../helpers/validate'
import { fetchContact } from '../../actions'
import { toastContext } from '../../context/toastContext'

const INITIAL_VALUE = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

// https://www.google.com/search?rlz=1C1GCEU_koKR848KR848&biw=1366&bih=657&tbm=isch&sa=1&ei=WpJjXbSQN9GImAWbhor4Ag&q=window+95+send+mail&oq=window+95+send+mail&gs_l=img.3...69607.72020..72244...0.0..0.159.1658.0j13......0....1..gws-wiz-img.......35i39j0j0i30j0i10i30j0i8i30j0i24.OcYwUrkc8cI&ved=0ahUKEwi0pc6_iaDkAhVRBKYKHRuDAi8Q4dUDCAY&uact=5#imgrc=sknvPiMfnALjaM:
const ContactForm = ({ x, y, onClose }) => {
    const { handleBlur, values, handleChange, errors } = useFormValidation(
        INITIAL_VALUE,
        contactValidator
    )

    const toastCtx = useContext(toastContext)

    const sendEmail = async values => {
        alert(JSON.stringify(values, null, 2))
        try {
            const res = await fetchContact(values)
            toastCtx.addToast('메일이 정상적으로 전송 되었습니다')
            toastCtx.addToast(
                '메일이 전송되지 않았습니다. 다시 한 번 시도해주세요'
            )
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <Layout x={x} y={y} onClose={onClose} width="352px" height="510px">
            <div className="contact__container">
                <div className="contact__field">
                    <div className="field__name flex--col">
                        <span>
                            이름 <span className="required">*</span>
                        </span>
                        <input
                            name="name"
                            type="text"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        ></input>
                        <span className="name__error error">{errors.name}</span>
                    </div>
                    <div className="field__email flex--col">
                        <span>
                            이메일 <span className="required">*</span>
                        </span>
                        <input
                            name="email"
                            type="text"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        ></input>
                        <span className="name__error error">
                            {errors.email}
                        </span>
                    </div>
                    <div className="field__subject flex--col">
                        <span>제목</span>
                        <input
                            name="subject"
                            type="text"
                            value={values.subject}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="field__message flex--col">
                        <span>내용</span>
                        <textarea
                            name="message"
                            rows={12}
                            value={values.message}
                            onBlur={handleBlur}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="field__submit">
                        <Button
                            title="보내기"
                            onClick={() => {
                                if (Object.keys(errors).length === 0) {
                                    sendEmail(values)
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactForm
