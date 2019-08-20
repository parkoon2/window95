import Header from './Header'
import ActionBar from './ActionBar'
import { useRef } from 'react'
import useDrag from '../../hooks/useDrag'
import PropTypes from 'prop-types'
const Layout = ({
    title,
    onClose,
    x,
    y,
    children,
    flexDirection,
    noActionbar,
    background,
    width,
    height
}) => {
    const wrapperRef = useRef()
    const targetRef = useRef()

    useDrag(wrapperRef, targetRef)

    return (
        <div
            // draggable
            className="window__layout"
            style={{
                top: y,
                left: x,
                width,
                height
            }}
            ref={wrapperRef}
        >
            <div className="layout__frame">
                <div className="frame__padding">
                    <Header _ref={targetRef} title={title} onClose={onClose} />
                    {/* {!noActionbar && <ActionBar />} */}
                    <ActionBar />
                    <div
                        className="contents"
                        // style={{ background, height: noActionbar && '606px' }}
                        style={{ background }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
}

Layout.defaultProps = {
    noActionbar: false
}

export default Layout
