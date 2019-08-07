import React from 'react'
import classnames from 'classnames'
import '../styles/icon.css'

export default function Icon({ name, size, title, styles, className = '' }) {
    return (
        <div className={`icon__container ${className}`} style={{ ...styles }}>
            <img
                className={classnames('icon', size)}
                src={`static/icons/${name}.ico`}
            />
            {title && <p className="title">{title}</p>}
        </div>
    )
}
