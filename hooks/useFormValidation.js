import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { createPortfolio } from '../actions'
import { toastContext } from '../context/toastContext'

const useFormValidation = (initialState, validate, close) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    const toastCtx = useContext(toastContext)

    useEffect(() => {
        if (isSubmitting) {
            alert('여긴 아니지..')
            const noErrors = Object.keys(errors).length === 0

            if (noErrors) {
                values.status = values.endDate ? 'completed' : 'progress'
                alert(JSON.stringify(values, null, 2))

                if (values.photos.length !== 0) {
                    // 서버로 이미지 업로드를 위한 FormData 생성
                    const formData = new FormData()

                    const photoContrainer = []

                    values.photos.forEach(photo => {
                        formData.append('photos', photo.file)

                        photoContrainer.push(photo.file.name)
                    })

                    const filteredValue = Object.assign({}, values)
                    delete filteredValue.photos
                    delete filteredValue.tech
                    filteredValue.images = photoContrainer
                    formData.append('portfolio', JSON.stringify(filteredValue))

                    createPortfolio(formData)
                        .then(res => {
                            toastCtx.addToast(
                                '포트폴리오가 정상적으로 등록되었습니다.'
                            )
                            close()
                        })
                        .catch(err => console.error(err))
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
