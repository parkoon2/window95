import { useEffect } from 'react'

const useDrag = (container, target) => {
    let isMouseDown = false
    let pos1, pos2, pos3, pos4

    useEffect(() => {
        container.current.style.zIndex = getIndexOfPopupOnTop()
        target.current.addEventListener('mousedown', handleMouseDown)
        return () => {
            target.current.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    const handleMouseDown = e => {
        isMouseDown = true

        pos3 = e.clientX
        pos4 = e.clientY

        // call a function whenever the cursor moves:
        document.onmousemove = handleMouseMove
        document.onmouseup = handleMouseUp
    }

    const handleMouseMove = e => {
        if (!isMouseDown) return

        pos1 = pos3 - e.clientX
        pos2 = pos4 - e.clientY
        pos3 = e.clientX
        pos4 = e.clientY

        container.current.style.top = container.current.offsetTop - pos2 + 'px'
        container.current.style.left =
            container.current.offsetLeft - pos1 + 'px'
    }

    const handleMouseUp = () => {
        isMouseDown = false
        document.onmousemove = null
        document.onmouseup = null
    }

    const getIndexOfPopupOnTop = () =>
        ++[...document.querySelectorAll('.window__layout')]
            .map(el => el.style.zIndex * 1) // string to number
            .sort((a, b) => b - a)[0]
    // return Component
}

export default useDrag
