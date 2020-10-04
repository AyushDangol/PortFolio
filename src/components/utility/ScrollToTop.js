import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'

function ScrollToTop() {
    const { y: pageYOffset } = useWindowScroll()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (pageYOffset > 180) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [pageYOffset])

    const ScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    if (!visible) {
        return false
    }
    return (
        <div
            className='scroll-to-top d-flex align-items-center justify-content-center'
            onClick={ScrollToTop}
        >
            <i className='icon ic-arrow-up font-bold text-primary'></i>
        </div>
    )
}

export default ScrollToTop
