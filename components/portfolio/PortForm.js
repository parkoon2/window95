import Layout from '../window/Layout'
import Header from '../window/Header'
import ActionBar from '../window/ActionBar'
import useFormValidation from '../../hooks/useFormValidation'
import validate from '../../helpers/validate'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const INITIAL_VALUE = {
    title: '',
    body: '',
    techs: [],
    git: '',
    startDate: '',
    endDate: ''
}

const PortForm = () => {
    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        isSubmitting,
        handleStartDateChange,
        handleEndDateChange
    } = useFormValidation(INITIAL_VALUE, validate)

    return (
        <Layout>
            <div className="portfolio__form">
                <div className="form__title">
                    <label>title: </label>
                    <input
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.title && 'error-input'}
                        name="title"
                        type="text"
                    />
                    {errors.title && <p>{errors.title}</p>}
                </div>
                <div className="form__body">
                    <label>body: </label>
                    <input
                        value={values.body}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.passowrd && 'error-input'}
                        name="body"
                        type="body"
                    />
                    {errors.body && <p>{errors.body}</p>}
                </div>
                <div className="form__date">
                    <label>start date:</label>
                    <DatePicker
                        selected={values.startDate}
                        onChange={handleStartDateChange}
                    />
                    <span>~</span>
                    <DatePicker
                        selected={values.endDate}
                        onChange={handleEndDateChange}
                    />
                    {errors.date && <p>{errors.date}</p>}
                </div>

                <div className="form__tech">
                    <label>title</label> <input type="text" />
                </div>

                <div className="form__images">
                    <label>title</label> <input type="text" />
                </div>

                <div className="form__resources">
                    <h1>resources</h1>
                </div>

                <div className="form__submit">
                    <button
                        disabled={isSubmitting}
                        className="submit__ok"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    <button className="submit__cancel">Cancel</button>
                </div>
            </div>
        </Layout>
    )
}

export default PortForm
