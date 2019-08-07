import React, { useContext } from 'react'
import classnames from 'classnames'
import '../styles/icon.css'
import { withIconContext, iconContext } from '../context/iconContext'

function Icon({ name, size, title, styles, className = '', pressed }) {
    const icon = useContext(iconContext)

    return (
        <div className={`icon__container ${className}`} style={{ ...styles }}>
            <img
                className={classnames('icon', size)}
                src={`static/icons/${name}.ico`}
            />
            {title && (
                <p
                    className={classnames('title', {
                        pressed
                    })}
                >
                    {title}
                </p>
            )}
        </div>
    )
}

export default withIconContext(Icon)
