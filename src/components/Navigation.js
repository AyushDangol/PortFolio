import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import DarkmodeToffler from './utility/DarkmodeToggler'

import { motion } from 'framer-motion'

function Navigation({ lightmode, setLightmode }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const navVariant = {
        hidden: {
            opacity: 0,
            x: '-50vw',
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
            },
        },
    }
    return (
        <Navbar
            color='light'
            className={'sticky-top' + (lightmode ? ' invert' : ' night')}
            light
            expand='md'
        >
            <motion.div
                className='container'
                variants={navVariant}
                initial='hidden'
                animate='visible'
            >
                <NavbarBrand className='font-semibold text-primary h6 m-0'>
                    <a
                        href='https://www.linkedin.com/in/ayush-dangol-39571218a/'
                        target='blank'
                    >
                        @AyushDangol
                    </a>

                    <span
                        className='ml-4'
                        onClick={() => setLightmode((lightmode = !lightmode))}
                    >
                        <DarkmodeToffler />
                    </span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink
                                className='text-white font-semibold h6 m-0'
                                href='/components/'
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='text-white font-semibold h6 m-0'
                                href=''
                            >
                                My Work
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='text-white font-semibold h6 m-0'
                                href=''
                            >
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='text-white font-semibold h6 m-0'
                                href='https://github.com/AyushDangol'
                                target='blank'
                            >
                                GitHub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className='text-white font-semibold h6 m-0'
                                href='https://www.behance.net/ayushdangol'
                                target='blank'
                            >
                                Behance
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </motion.div>
        </Navbar>
    )
}

export default Navigation
