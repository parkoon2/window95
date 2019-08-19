const Button = ({ onClick, title, disabled }) => {
    const addUnderline = str => {
        return (
            <span>
                <u>{str[0]}</u>
                {str.slice(1, str.length)}
            </span>
        )
    }

    return (
        <div
            className="btn__container"
            onClick={() => {
                if (disabled) return

                onClick()
            }}
        >
            <div className="btn__title">{addUnderline(title)}</div>
        </div>
    )
}

export default Button
