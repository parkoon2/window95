import Header from './Header'
import ActionBar from './ActionBar'
import { useRef } from 'react'
import useDrag from '../../hooks/useDrag'
const Layout = ({ title, onClose, x, y, children, flexDirection }) => {
    const wrapperRef = useRef()
    const targetRef = useRef()

    useDrag(wrapperRef, targetRef)

    return (
        <div
            // draggable
            className="window__layout"
            style={{
                top: y,
                left: x
            }}
            ref={wrapperRef}
        >
            <div className="layout__frame">
                <div className="frame__padding">
                    <Header _ref={targetRef} title={title} onClose={onClose} />
                    <ActionBar />
                    <div className="contents">{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Layout
