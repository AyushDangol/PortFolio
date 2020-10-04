import React, { useState } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'

export default function DarkmodeToggler() {
    const [isDarkMode, setIsDarkMode] = useState(true)
    return (
        <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
        />
    )
}
