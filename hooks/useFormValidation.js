import { useState, useEffect } from 'react'

const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0

            if (noErrors) {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleStartDateChange = date => {
        setValues({
            ...values,
            startDate: date
        })
    }
    const handleEndDateChange = date => {
        setValues({
            ...values,
            endDate: date
        })
    }

    const handleBlur = () => {
        const validationErrors = validate(values)
        setErrors(validationErrors)
    }

    const handleSubmit = () => {
        const validationErrors = validate(values)
        setErrors(validationErrors)

        setSubmitting(true)
    }

    return {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        isSubmitting,
        handleStartDateChange,
        handleEndDateChange
    }
}

export default useFormValidation
