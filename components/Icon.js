import React from 'react'
import classnames from 'classnames'
import '../styles/icon.css'

export const Canvas = ({ size }) => (
    <img className={classnames('icon', size)} src="static/icons/canvas.ico" />
)
export const Help = ({ size }) => (
    <img className={classnames('icon', size)} src="static/icons/help.ico" />
)
export const Find = ({ size }) => (
    <img className={classnames('icon', size)} src="static/icons/find.ico" />
)
export const Documents = ({ size }) => (
    <img
        className={classnames('icon', size)}
        src="static/icons/documents.ico"
    />
)
export const Programs = ({ size }) => (
    <img className={classnames('icon', size)} src="static/icons/programs.ico" />
)

export const ShutDown = ({ size }) => (
    <img
        className={classnames('icon', size)}
        src="static/icons/shut_down.ico"
    />
)
export const Run = ({ size }) => (
    <img className={classnames('icon', size)} src="static/icons/run.ico" />
)

export const Settings = ({ size }) => (
    <img className={classnames('icon', size)} src="static/icons/settings.ico" />
)
