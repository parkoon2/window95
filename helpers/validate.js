export default function validate(values) {
    let errors = {}
    if (!values.title) {
        errors.title = 'title is required'
    }

    if (!values.body) {
        errors.body = 'body is required'
    }

    if (values.techs.length === 0) {
        errors.tech = 'tech is required at least one'
    }

    values.photos.forEach(photo => {
        if (
            !/([a-zA-Z0-9\s_\\.\-\(\):])+(.jpeg|.png|.gif)$/i.test(photo.name)
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
