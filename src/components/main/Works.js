import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Slider from 'react-slick'
import travello from '../../assets/images/works/Travello-Thumbnail.png'

const workVariant = {
    hidden: { opacity: 0, x: -200 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.5, duration: 0.5 },
    },
}
const worksVariant = {
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

function Works() {
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

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        appendDots: (dots) => <ul>{dots}</ul>,
        customPaging: (i) => (
            <div className='ft-slick__dots--custom'>
                <div className='loading' />
            </div>
        ),
    }

    return (
        <section>
            <div className='container'>
                <motion.h1
                    className='heading text-center mb-3'
                    ref={ref}
                    variants={workVariant}
                    initial='hidden'
                    animate={controls}
                >
                    My Work
                </motion.h1>
                <motion.div
                    ref={ref}
                    variants={workVariant}
                    initial='hidden'
                    animate={controls}
                >
                    <Slider {...settings}>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 col-md-12 col-sm-12 m__auto'>
                                <motion.div
                                    className='workcard mt-5 p-4 bg-info'
                                    ref={ref}
                                    variants={worksVariant}
                                    initial='hidden'
                                    animate={controls}
                                >
                                    <h5 className='font-semibold text-white mb-3'>
                                        <span className='text-primary'>
                                            Travello
                                        </span>
                                        : A travel app
                                    </h5>
                                    <div className='workcard--content d-flex align-items-center'>
                                        <p className='text-white des description'>
                                            I designed a user interface of a
                                            mobile application for a travel
                                            company called Travello. As a
                                            designer my task was to showcase the
                                            brand identity and provide the best
                                            user-esperience in the application.
                                            The company offered a variety of
                                            exotic destinations and primarily
                                            promote Nepal. The target audience
                                            was college students. I wanted the
                                            application to convey a sense of
                                            faithfulness, while at the same time
                                            being down-to-earth.
                                        </p>
                                        <div className='thumbnail'>
                                            <img
                                                src={travello}
                                                alt='travello'
                                                className='rounded'
                                            />
                                        </div>
                                    </div>
                                    <div className='link__center d-flex align-items-center mt-3'>
                                        <a
                                            href='https://www.behance.net/gallery/100055445/Travello-Travel-App'
                                            target='blank'
                                            className='text-white des'
                                        >
                                            View full project
                                        </a>{' '}
                                        <i className='ic-arrow-right-circle-fill text-white ml-2'></i>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 col-md-12 col-sm-12 m__auto'>
                                <div
                                    className='workcard mt-5 p-4 bg-info'
                                    ref={ref}
                                    variants={worksVariant}
                                    initial='hidden'
                                    animate={controls}
                                >
                                    <h5 className='font-semibold text-white mb-3'>
                                        <span className='text-primary'>
                                            Travello
                                        </span>
                                        : A travel app
                                    </h5>
                                    <div className='workcard--content d-flex align-items-center'>
                                        <p className='text-white des description'>
                                            I designed a user interface of a
                                            mobile application for a travel
                                            company called Travello. As a
                                            designer my task was to showcase the
                                            brand identity and provide the best
                                            user-esperience in the application.
                                            The company offered a variety of
                                            exotic destinations and primarily
                                            promote Nepal. The target audience
                                            was college students. I wanted the
                                            application to convey a sense of
                                            faithfulness, while at the same time
                                            being down-to-earth.
                                        </p>
                                        <div className='thumbnail'>
                                            <img
                                                src={travello}
                                                alt='travello'
                                                className='rounded'
                                            />
                                        </div>
                                    </div>
                                    <div className='link__center d-flex align-items-center mt-3'>
                                        <a
                                            href='https://www.behance.net/gallery/100055445/Travello-Travel-App'
                                            target='blank'
                                            className='text-white des'
                                        >
                                            View full project
                                        </a>{' '}
                                        <i className='ic-arrow-right-circle-fill text-white ml-2'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 col-md-12 col-sm-12 m__auto'>
                                <div
                                    className='workcard mt-5 p-4 bg-info'
                                    ref={ref}
                                    variants={worksVariant}
                                    initial='hidden'
                                    animate={controls}
                                >
                                    <h5 className='font-semibold text-white mb-3'>
                                        <span className='text-primary'>
                                            Travello
                                        </span>
                                        : A travel app
                                    </h5>
                                    <div className='workcard--content d-flex align-items-center'>
                                        <p className='text-white des description'>
                                            I designed a user interface of a
                                            mobile application for a travel
                                            company called Travello. As a
                                            designer my task was to showcase the
                                            brand identity and provide the best
                                            user-esperience in the application.
                                            The company offered a variety of
                                            exotic destinations and primarily
                                            promote Nepal. The target audience
                                            was college students. I wanted the
                                            application to convey a sense of
                                            faithfulness, while at the same time
                                            being down-to-earth.
                                        </p>
                                        <div className='thumbnail'>
                                            <img
                                                src={travello}
                                                alt='travello'
                                                className='rounded'
                                            />
                                        </div>
                                    </div>
                                    <div className='link__center d-flex align-items-center mt-3'>
                                        <a
                                            href='https://www.behance.net/gallery/100055445/Travello-Travel-App'
                                            target='blank'
                                            className='text-white des'
                                        >
                                            View full project
                                        </a>{' '}
                                        <i className='ic-arrow-right-circle-fill text-white ml-2'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 col-md-12 col-sm-12 m__auto'>
                                <div
                                    className='workcard mt-5 p-4 bg-info'
                                    ref={ref}
                                    variants={worksVariant}
                                    initial='hidden'
                                    animate={controls}
                                >
                                    <h5 className='font-semibold text-white mb-3'>
                                        <span className='text-primary'>
                                            Travello
                                        </span>
                                        : A travel app
                                    </h5>
                                    <div className='workcard--content d-flex align-items-center'>
                                        <p className='text-white des description'>
                                            I designed a user interface of a
                                            mobile application for a travel
                                            company called Travello. As a
                                            designer my task was to showcase the
                                            brand identity and provide the best
                                            user-esperience in the application.
                                            The company offered a variety of
                                            exotic destinations and primarily
                                            promote Nepal. The target audience
                                            was college students. I wanted the
                                            application to convey a sense of
                                            faithfulness, while at the same time
                                            being down-to-earth.
                                        </p>
                                        <div className='thumbnail'>
                                            <img
                                                src={travello}
                                                alt='travello'
                                                className='rounded'
                                            />
                                        </div>
                                    </div>
                                    <div className='link__center d-flex align-items-center mt-3'>
                                        <a
                                            href='https://www.behance.net/gallery/100055445/Travello-Travel-App'
                                            target='blank'
                                            className='text-white des'
                                        >
                                            View full project
                                        </a>{' '}
                                        <i className='ic-arrow-right-circle-fill text-white ml-2'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 col-md-12 col-sm-12 m__auto'>
                                <div
                                    className='workcard mt-5 p-4 bg-info'
                                    ref={ref}
                                    variants={worksVariant}
                                    initial='hidden'
                                    animate={controls}
                                >
                                    <h5 className='font-semibold text-white mb-3'>
                                        <span className='text-primary'>
                                            Travello
                                        </span>
                                        : A travel app
                                    </h5>
                                    <div className='workcard--content d-flex align-items-center'>
                                        <p className='text-white des description'>
                                            I designed a user interface of a
                                            mobile application for a travel
                                            company called Travello. As a
                                            designer my task was to showcase the
                                            brand identity and provide the best
                                            user-esperience in the application.
                                            The company offered a variety of
                                            exotic destinations and primarily
                                            promote Nepal. The target audience
                                            was college students. I wanted the
                                            application to convey a sense of
                                            faithfulness, while at the same time
                                            being down-to-earth.
                                        </p>
                                        <div className='thumbnail'>
                                            <img
                                                src={travello}
                                                alt='travello'
                                                className='rounded'
                                            />
                                        </div>
                                    </div>
                                    <div className='link__center d-flex align-items-center mt-3'>
                                        <a
                                            href='https://www.behance.net/gallery/100055445/Travello-Travel-App'
                                            target='blank'
                                            className='text-white des'
                                        >
                                            View full project
                                        </a>{' '}
                                        <i className='ic-arrow-right-circle-fill text-white ml-2'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-8 col-md-12 col-sm-12 m__auto'>
                                <div
                                    className='workcard mt-5 p-4 bg-info'
                                    ref={ref}
                                    variants={worksVariant}
                                    initial='hidden'
                                    animate={controls}
                                >
                                    <h5 className='font-semibold text-white mb-3'>
                                        <span className='text-primary'>
                                            Travello
                                        </span>
                                        : A travel app
                                    </h5>
                                    <div className='workcard--content d-flex align-items-center'>
                                        <p className='text-white des description'>
                                            I designed a user interface of a
                                            mobile application for a travel
                                            company called Travello. As a
                                            designer my task was to showcase the
                                            brand identity and provide the best
                                            user-esperience in the application.
                                            The company offered a variety of
                                            exotic destinations and primarily
                                            promote Nepal. The target audience
                                            was college students. I wanted the
                                            application to convey a sense of
                                            faithfulness, while at the same time
                                            being down-to-earth.
                                        </p>
                                        <div className='thumbnail'>
                                            <img
                                                src={travello}
                                                alt='travello'
                                                className='rounded'
                                            />
                                        </div>
                                    </div>
                                    <div className='link__center d-flex align-items-center mt-3'>
                                        <a
                                            href='https://www.behance.net/gallery/100055445/Travello-Travel-App'
                                            target='blank'
                                            className='text-white des'
                                        >
                                            View full project
                                        </a>{' '}
                                        <i className='ic-arrow-right-circle-fill text-white ml-2'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </motion.div>
            </div>
        </section>
    )
}

export default Works
