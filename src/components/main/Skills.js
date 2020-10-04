import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import reactjs from '../../assets/images/skills/reactjs.svg'
import vue from '../../assets/images/skills/Vuejs.svg'
import js from '../../assets/images/skills/JS.svg'
import sass from '../../assets/images/skills/sassy.svg'
import git from '../../assets/images/skills/Gitbash.svg'
import figma from '../../assets/images/skills/FigmaTool.svg'
import teamplayer from '../../assets/images/skills/TeamPlayer.svg'

const skillVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 0.5 },
    },
}
const skillsVariant = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 0.5,
        },
    },
}
const skills1Variant = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.5,
            duration: 0.5,
        },
    },
}
const skills2Variant = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 2,
            duration: 0.5,
        },
    },
}

function Skills() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
    })
    useEffect(() => {
        if (inView) {
            controls.start('visible')
            console.log(inView)
        }
    }, [inView])

    return (
        <section className='text-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <motion.h1
                            className='h2 heading mb-5'
                            variants={skillVariant}
                            initial='hidden'
                            animate='visible'
                        >
                            Skills
                        </motion.h1>
                        <motion.div
                            className='skill mb-3'
                            variants={skillsVariant}
                            initial='hidden'
                            animate='visible'
                        >
                            <div className='skill--heading d-flex'>
                                <img
                                    src={reactjs}
                                    alt='react'
                                    className='ml-1'
                                />
                                <h5 className='ml-4 mr-1 font-semibold'>
                                    React Js
                                </h5>
                                <p className='ml-2 small text-primary'>
                                    Js framework
                                </p>
                            </div>
                            <p className='pl-5 ml-3'>
                                React makes it painless to create interactive
                                UIs. Design simple views for each state in your
                                application, and React will efficiently update
                                and render just the right components when your
                                data changes.
                            </p>
                        </motion.div>
                        <motion.div
                            className='skill mb-3 mt-5'
                            ref={ref}
                            variants={skillsVariant}
                            initial='hidden'
                            animate={controls}
                        >
                            <div className='skill--heading d-flex'>
                                <img src={vue} alt='react' className='ml-1' />
                                <h5 className='ml-4 mr-1 font-semibold'>
                                    Vue Js
                                </h5>
                                <p className='ml-2 small text-primary'>
                                    Js framework
                                </p>
                            </div>
                            <p className='pl-5 ml-3'>
                                Vue is a progressive framework for building user
                                interfaces. Unlike other monolithic frameworks,
                                Vue is designed from the ground up to be
                                incrementally adoptable.
                            </p>
                        </motion.div>
                        <motion.div
                            className='skill mb-3 mt-5'
                            ref={ref}
                            variants={skills1Variant}
                            initial='hidden'
                            animate={controls}
                        >
                            <div className='skill--heading d-flex'>
                                <img src={js} alt='react' className='ml-1' />
                                <h5 className='ml-4 mr-1 font-semibold'>
                                    Javascript
                                </h5>
                                <p className='ml-2 small text-primary'>
                                    Language
                                </p>
                            </div>
                            <p className='pl-5 ml-3'>
                                JavaScript, often abbreviated as JS, is a
                                programming language that conforms to the
                                ECMAScript specification. JavaScript is
                                high-level, often just-in-time compiled, and
                                multi-paradigm.
                            </p>
                        </motion.div>
                        <motion.div
                            className='skill mb-3 mt-5'
                            ref={ref}
                            variants={skills2Variant}
                            initial='hidden'
                            animate={controls}
                        >
                            <div className='skill--heading d-flex'>
                                <img src={sass} alt='react' className='ml-1' />
                                <h5 className='ml-4 mr-1 font-semibold'>
                                    Sass
                                </h5>
                                <p className='ml-2 small text-primary'>
                                    The cooler CSS
                                </p>
                            </div>
                            <p className='pl-5 ml-3'>
                                Sass lets you use features that don't exist in
                                CSS yet like variables, nesting, mixins,
                                inheritance and other nifty goodies that make
                                writing CSS fun again.
                            </p>
                        </motion.div>
                    </div>
                    <div className='col-md-6 offset-md-1'>
                        <motion.h1
                            className='h2 heading text-primary mb-5 skill--more'
                            variants={skillVariant}
                            initial='hidden'
                            animate='visible'
                        >
                            More Skills
                        </motion.h1>
                        <motion.div
                            className='skill mb-3'
                            variants={skillsVariant}
                            initial='hidden'
                            animate='visible'
                        >
                            <div className='skill--heading d-flex'>
                                <img src={git} alt='react' className='ml-1' />
                                <h5 className='ml-4 mr-1 font-semibold'>Git</h5>
                                <p className='ml-2 small text-primary'>
                                    Project management
                                </p>
                            </div>
                            <p className='pl-5 ml-3 p__right'>
                                Git is a distributed version-control system for
                                tracking changes in source code during software
                                development. It is designed for coordinating
                                work among programmers.
                            </p>
                        </motion.div>
                        <motion.div
                            className='skill mb-3 mt-5'
                            ref={ref}
                            variants={skillsVariant}
                            initial='hidden'
                            animate={controls}
                        >
                            <div className='skill--heading d-flex'>
                                <img src={figma} alt='react' className='ml-1' />
                                <h5 className='ml-4 mr-1 font-semibold'>
                                    Figma
                                </h5>
                                <p className='ml-2 small text-primary'>
                                    Designing & Prototyping tool
                                </p>
                            </div>
                            <p className='pl-5 ml-3 p__right'>
                                Figma is a vector graphics editor and
                                prototyping tool which is primarily web-based,
                                with additional offline features enabled by
                                desktop applications for macOS and Windows.
                            </p>
                        </motion.div>
                        <motion.div
                            className='skill mb-3 mt-5'
                            ref={ref}
                            variants={skills1Variant}
                            initial='hidden'
                            animate={controls}
                        >
                            <div className='skill--heading d-flex'>
                                <img
                                    src={teamplayer}
                                    alt='react'
                                    className='ml-1'
                                />
                                <h5 className='ml-4 mr-1 font-semibold'>
                                    Team Player
                                </h5>
                                <p className='ml-2 small text-primary'>
                                    Soft skills
                                </p>
                            </div>
                            <p className='pl-5 ml-3 p__right'>
                                A great team player because Together Everyone
                                Achieves More.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
