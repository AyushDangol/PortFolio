import React from 'react'
import Contact from './main/Contact'
import Header from './main/Header'
import Mantra from './main/Mantra'
import Skills from './main/Skills'
import Works from './main/Works'
import ScrollToTop from './utility/ScrollToTop'

function Main({ lightmode }) {
    return (
        <div>
            <Header />
            <ScrollToTop />
            <Skills />
            <Works />
            <Contact lightmode={lightmode} />
            <Mantra />
        </div>
    )
}

export default Main
