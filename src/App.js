import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
    const [lightmode, setLightmode] = useState(false)

    return (
        <div className={'App' + (lightmode ? ' lightMode' : ' darkMode')}>
            <Navigation setLightmode={setLightmode} lightmode={lightmode} />
            <AnimatePresence>
                <Main lightmode={lightmode} />
            </AnimatePresence>
            <Footer />
        </div>
    )
}

export default App
