import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const mantraVariant = {
    hidden: { opacity: 0, x: -300 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 0.5 },
    },
}

function Mantra() {
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
        <section>
            <motion.h1
                className='heading text-center'
                ref={ref}
                variants={mantraVariant}
                initial='hidden'
                animate={controls}
            >
                EAT, SLEEP, <span className='text-primary'>DESIGN & DEV</span>{' '}
                REPEAT
            </motion.h1>
        </section>
    )
}

export default Mantra
