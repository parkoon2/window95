import Icon from './Icon'
import { useEffect, useContext } from 'react'
import { windowContext } from '../context/windowContext'

const Warning = ({ message }) => {
    const windowCtx = useContext(windowContext)

    useEffect(() => {
        const audio = new Audio('/static/assets/error.mp3')
        audio.volume = 0.5
        audio.play()

        document.addEventListener('keyup', okHandler)

        return () => {
            document.removeEventListener('keyup', okHandler)
        }
    }, [])

    const okHandler = ({ keyCode }) => {
        if (keyCode !== 13) return // enter only
        windowCtx.hideWarning()
    }
    return (
        <div className="warning">
            <div className="warning--frame">
                <header className="warning__header">
                    <div className="header__title">Warning</div>
                    <div
                        className="header__btns"
                        onClick={windowCtx.hideWarning}
                    >
                        <Icon size="s" name="close" />
                    </div>
                </header>
                <section className="warning__body">
                    <div className="warning__image">
                        <Icon name="warning" />
                    </div>
                    <div className="warning__message">{message}</div>
                </section>
                <footer className="warning__footer">
                    <div
                        className="footer__btn dotted"
                        onClick={windowCtx.hideWarning}
                    >
                        <span className="btn__text">OK</span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Warning
