import React, { useContext, useState, useRef, useEffect } from 'react'
import classnames from 'classnames'
import '../styles/icon.css'
import { withIconContext, iconContext } from '../context/iconContext'

function Icon({ name, size, title, styles, className = '' }) {
    // const icon = useContext(iconContext)

    const [pressed, setPress] = useState(false)
    const containerRef = useRef(null)

    const handleClickOutside = e => {
        console.log('containerRef,', containerRef)
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setPress(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            className={`icon__container ${className}`}
            style={{ ...styles }}
            onClick={() => setPress(!pressed)}
            ref={containerRef}
        >
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

export default Icon
