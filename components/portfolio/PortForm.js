import Layout from '../window/Layout'
import Header from '../window/Header'
import ActionBar from '../window/ActionBar'
import useFormValidation from '../../hooks/useFormValidation'
import validate from '../../helpers/validate'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Icon from '../Icon'

const INITIAL_VALUE = {
    title: '',
    body: '',
    tech: '',
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
        handleEndDateChange,
        handleKeyUp,
        deleteTag
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
                    <div className="tech__tags">
                        <ul>
                            {values.techs.map((tech, index) => (
                                <li
                                    key={index}
                                    onClick={() => deleteTag(index)}
                                >
                                    <u>{tech}</u>
                                    <Icon name="close" size="s" onCli />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <label>techs</label>
                    <input
                        type="text"
                        name="tech"
                        value={values.tech}
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                    />
                </div>

                <div className="form__images">
                    <label>image</label> <input type="text" />
                    <form
                        action="/photos/upload"
                        method="post"
                        encType="multipart/form-data"
                    >
                        <input type="file" name="photos" />
                        <input type="submit" />
                    </form>
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
