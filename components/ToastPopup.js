import { useContext, useEffect } from 'react'
import { toastContext } from '../context/toastContext'
import Icon from './Icon'

const ToastPopup = () => {
    const toastCtx = useContext(toastContext)

    const renderToastPopups = toasts => {
        if (!toasts) return

        return toasts.map(t => (
            <div
                key={t.id}
                className="toast__container"
                style={{ bottom: `${t.y}px`, right: `${t.x}px` }}
                onClick={() => toastCtx.removeToast(t.id)}
            >
                <Icon name="signup" size="m"></Icon>
                <span className="toast__message">{t.message}</span>
                <div className="toast__close">
                    <Icon name="close" size="s"></Icon>
                </div>
            </div>
        ))
    }

    return <>{renderToastPopups(toastCtx.toasts)}</>
}
export default ToastPopup
