import PropTypes from 'prop-types'

const Button = ({ onClick, title, name, disabled }) => {
    const addUnderline = str => {
        return (
            <span>
                <u>{str[0]}</u>
                {str.slice(1, str.length)}
            </span>
        )
    }

    return (
        <button
            className="btn__container"
            style={
                disabled
                    ? {
                          color: '#ecf0f1'
                      }
                    : {}
            }
            onClick={() => {
                if (disabled) return

                onClick()
            }}
            name={name}
        >
            <div className="btn__title">{addUnderline(title)}</div>
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

export default Button
