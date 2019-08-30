export const portfolioValidator = values => {
    let errors = {}
    if (!values.title) {
        errors.title = 'title is required'
    }

    if (!values.body) {
        errors.body = 'body is required'
    }

    if (values.techs && values.techs.length === 0) {
        errors.tech = 'tech is required at least one'
    }

    values.photos &&
        values.photos.forEach(photo => {
            if (
                !/([a-zA-Z0-9\s_\\.\-\(\):])+(.jpeg|.png|.gif)$/i.test(
                    photo.name
                )
            ) {
                errors.photo = 'only image available'
            }
        })

    if (!values.startDate) {
        errors.startDate = 'start date is required'
    }

    console.log(errors)
    return errors
}

export const contactValidator = values => {
    let errors = {}

    if (!values.name) {
        errors.name = '이름을 입력해 주세요'
    }

    if (!values.email) {
        errors.email = '이메일을 입력해 주세요'
    } else if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            values.email
        )
    ) {
        errors.email = '유효하지 않은 이메일 형식입니다.'
    }

    return errors
}
