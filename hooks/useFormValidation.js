import { useState, useEffect } from 'react'
import axios from 'axios'

const useFormValidation = (initialState, validate) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0

            if (noErrors) {
                values.status = values.endDate ? 'completed' : 'progress'
                alert(JSON.stringify(values, null, 2))

                if (values.photos.length !== 0) {
                    // 서버로 이미지 업로드를 위한 FormData 생성
                    const formData = new FormData()

                    values.photos.forEach(photo =>
                        formData.append('photos', photo.file)
                    )

                    const filteredValue = Object.assign({}, values)
                    delete filteredValue.photos
                    delete filteredValue.tech
                    formData.append('portfolio', JSON.stringify(filteredValue))

                    axios({
                        method: 'post',
                        url: '/api/v1/portfolio',
                        data: formData
                        // config: {
                        //     headers: { 'Content-Type': 'multipart/form-data' }
                        // }
                    })
                        .then(function(response) {
                            //handle success
                            console.log('success', response)
                        })
                        .catch(function(response) {
                            //handle error
                            console.log('failure', response)
                        })
                }

                setSubmitting(false)
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])

    const handleFileUpload = file => {
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onload = () => {
            const url = reader.result
            const name = file.name

            const photo = {
                id: name + Date.now(),
                name,
                url,
                file
            }
            setValues({
                ...values,
                photos: values.photos.concat(photo)
            })
        }
    }

    const deleteFile = id => {
        setValues({
            ...values,
            photos: values.photos.filter(photo => photo.id !== id)
        })
    }

    const handleChange = e => {
        if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0])
            e.target.value = ''
            return
        }

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

    const handleKeyUp = e => {
        const keyCode = e.keyCode

        if (keyCode !== 13) return

        if (e.target.name === 'tech') {
            setValues({
                ...values,
                tech: '',
                techs: values.techs.concat(e.target.value)
            })
        }
    }

    const deleteTag = key => {
        setValues({
            ...values,
            techs: values.techs.filter((tech, index) => index !== key)
        })
    }

    const deleteAllTags = () => {
        setValues({
            ...values,
            techs: []
        })
    }

    return {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        isSubmitting,
        handleStartDateChange,
        handleEndDateChange,
        handleKeyUp,
        deleteTag,
        deleteFile,
        deleteAllTags
    }
}

export default useFormValidation
