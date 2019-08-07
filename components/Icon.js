import React from 'react'
import classnames from 'classnames'
import '../styles/icon.css'

export default function Icon({ name, size, title }) {
    return (
        <div className="icon__container">
            <img
                className={classnames('icon', size)}
                src={`static/icons/${name}.ico`}
            />
            {title && <p className="title">{title}</p>}
        </div>
    )
}
