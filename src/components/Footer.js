import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import facebook from '../assets/images/sm/facebook.svg'
import instagram from '../assets/images/sm/instagram.svg'
import linkedin from '../assets/images/sm/linkedin.svg'
import twitter from '../assets/images/sm/twitter.svg'

const footerVariant = {
    hidden: { opacity: 0, x: -300 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 0.5 },
    },
}

function Footer() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
    useEffect(() => {
        if (inView) {
            controls.start('visible')
            console.log(inView)
        }
    }, [inView])

    return (
        <footer className='bg-light'>
            <div className='container'>
                <div className='summary pb-4 border-bottom border-white'>
                    <div className='row'>
                        <motion.div
                            className='col-md-6 pr-5'
                            ref={ref}
                            variants={footerVariant}
                            initial='hidden'
                            animate={controls}
                        >
                            <a
                                href='https://www.linkedin.com/in/ayush-dangol-39571218a/'
                                target='blank'
                            >
                                <h6 className='font-semibold text-primary mt-4 mb-2'>
                                    @AyushDangol
                                </h6>
                            </a>
                            <p className='text-white'>
                                Building a successful product is a challenge.
                                And I am always up for a challenge. I love to
                                work on the frontend and build beautiful UI with
                                great UX.
                            </p>
                        </motion.div>
                        <motion.div
                            className='col-md-3'
                            ref={ref}
                            variants={footerVariant}
                            initial='hidden'
                            animate={controls}
                        >
                            <h6 className='font-semibold text-primary mt-4 mb-3'>
                                Follow me
                            </h6>
                            <div className='d-flex'>
                                <a
                                    href='https://www.linkedin.com/in/ayush-dangol-39571218a/'
                                    target='blank'
                                >
                                    <img src={linkedin} alt='linkedin' />
                                </a>
                                <a
                                    href='https://www.facebook.com/ayush.dangol.58/'
                                    target='blank'
                                >
                                    <img
                                        src={facebook}
                                        alt='facebook'
                                        className='pl-3'
                                    />
                                </a>
                                <a
                                    href='https://www.instagram.com/portgas_d_ayush/'
                                    target='blank'
                                >
                                    <img
                                        src={instagram}
                                        alt='instagram'
                                        className='pl-3'
                                    />
                                </a>
                                <a
                                    href='https://twitter.com/AyushDangol4'
                                    target='blank'
                                >
                                    <img
                                        src={twitter}
                                        alt='twitter'
                                        className='pl-3'
                                    />
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            className='col-md-3'
                            ref={ref}
                            variants={footerVariant}
                            initial='hidden'
                            animate={controls}
                        >
                            <h6 className='font-semibold text-primary mt-4 mb-2'>
                                Important Links
                            </h6>
                            <ul className='text-white list-group'>
                                <li className='mt-1 mb-2'>
                                    <a href='#'>About Me</a>
                                </li>
                                <li className='mt-1 mb-2'>
                                    <a href='#'>Contact</a>
                                </li>
                                <li className='mt-1 mb-2'>
                                    <a href='#'>My Work</a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
                <div className='copyrights py-3 d-flex'>
                    <motion.p
                        className='h6 text-white'
                        ref={ref}
                        variants={footerVariant}
                        initial='hidden'
                        animate={controls}
                    >
                        Copyrights @2020 Ayush
                    </motion.p>
                    <motion.p
                        className='h6 text-white'
                        ref={ref}
                        variants={footerVariant}
                        initial='hidden'
                        animate={controls}
                    >
                        Designed By{' '}
                        <a
                            href='https://www.linkedin.com/in/ayush-dangol-39571218a/'
                            target='blank'
                        >
                            @Ayush
                        </a>
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
