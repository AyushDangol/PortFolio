import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import profile from '../../assets/profile.pdf'

function Header() {
    const headerVariant = {
        hidden: {
            opacity: 0,
            y: -200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
            },
        },
    }
    const svgVariant = {
        hidden: { y: 0 },

        visible: {
            y: -20,
            transition: {
                delay: 2,
                duration: 1,
                type: 'Inertia',
                yoyo: Infinity,
            },
        },
    }
    return (
        <header>
            <div className='container'>
                <div className='row align-items-center d__reverse'>
                    <motion.div
                        className='col-md-6'
                        variants={headerVariant}
                        initial='hidden'
                        animate='visible'
                    >
                        <div className='intro'>
                            <p className=' des'>
                                Welcome To my portfolio website
                            </p>
                            <h1 className='my-3 font-bold '>
                                Hey folks, I’m{' '}
                                <p className='animate-text h1 font-bold d-inline'>
                                    <span className='text-primary'></span>
                                </p>
                            </h1>
                            <p className='mb-1  padding__right'>
                                Building a successful product is a challenge.
                                And I am always up for a challenge. I love to
                                work on the frontend and build beautiful UI with
                                great UX.
                            </p>
                            <a
                                className='btn btn-secondary mt-4 p-0 py-2 px-3'
                                href={profile}
                                target='blank'
                            >
                                Download resume
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        className='col-md-6'
                        variants={headerVariant}
                        initial='hidden'
                        animate='visible'
                    >
                        <div className='illustration'>
                            <motion.svg
                                variants={svgVariant}
                                width='100%'
                                viewBox='0 0 507 307'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M253.5 306.122C393.504 306.122 507 282.961 507 254.392C507 225.822 393.504 202.661 253.5 202.661C113.496 202.661 0 225.822 0 254.392C0 282.961 113.496 306.122 253.5 306.122Z'
                                    fill='#444950'
                                />
                                <g clip-path='url(#clip0)'>
                                    <path
                                        d='M427.24 264.143C424.611 274.145 415.4 280.396 415.4 280.396C415.4 280.396 410.45 270.43 413.079 260.428C415.708 250.426 424.919 244.175 424.919 244.175C424.919 244.175 429.869 254.141 427.24 264.143Z'
                                        fill='#3F3D56'
                                    />
                                    <path
                                        d='M423.253 262.027C415.89 269.295 415.066 280.39 415.066 280.39C415.066 280.39 426.18 279.701 433.543 272.433C440.905 265.165 441.729 254.071 441.729 254.071C441.729 254.071 430.616 254.759 423.253 262.027Z'
                                        fill='#3DD5C7'
                                    />
                                    <path
                                        d='M156.474 226.307H170.34L204.51 212.948C204.51 212.948 228.775 203.052 226.795 221.854C224.814 240.656 221.347 265.89 221.347 265.89C221.347 265.89 210.452 260.942 204.51 262.427C198.567 263.911 202.529 232.245 202.529 232.245C202.529 232.245 153.998 255.5 149.541 252.531C145.084 249.562 144.093 228.781 144.093 228.781L156.474 226.307Z'
                                        fill='#2F2E41'
                                    />
                                    <path
                                        opacity='0.1'
                                        d='M156.474 226.307H170.34L204.51 212.948C204.51 212.948 228.775 203.052 226.795 221.854C224.814 240.656 221.347 265.89 221.347 265.89C221.347 265.89 210.452 260.942 204.51 262.427C198.567 263.911 202.529 232.245 202.529 232.245C202.529 232.245 153.998 255.5 149.541 252.531C145.084 249.562 144.093 228.781 144.093 228.781L156.474 226.307Z'
                                        fill='black'
                                    />
                                    <path
                                        d='M178.32 182.921L195.101 207.011L234.223 239.666C234.223 239.666 270.374 248.078 265.421 254.015C260.469 259.953 230.261 248.078 230.261 248.078C230.261 248.078 185.196 215.422 183.711 212.948C182.225 210.474 165.883 187.219 165.883 187.219L178.32 182.921Z'
                                        fill='#EDBDC3'
                                    />
                                    <path
                                        opacity='0.1'
                                        d='M177.17 182.571L193.951 206.661L233.073 239.317C233.073 239.317 269.224 247.728 264.272 253.665C259.32 259.603 229.112 247.728 229.112 247.728C229.112 247.728 184.047 215.072 182.561 212.598C181.076 210.124 164.734 186.869 164.734 186.869L177.17 182.571Z'
                                        fill='#EDBDC3'
                                    />
                                    <path
                                        d='M168.359 163.469L179.254 184.745C179.254 184.745 176.778 195.136 172.816 196.125C168.854 197.115 152.017 183.261 152.017 183.261L168.359 163.469Z'
                                        fill='#292D3E'
                                    />
                                    <path
                                        opacity='0.1'
                                        d='M169.362 164.591L180.257 185.867C180.257 185.867 177.781 196.257 173.819 197.247C169.857 198.236 153.02 184.382 153.02 184.382L169.362 164.591Z'
                                        fill='#292D3E'
                                    />
                                    <path
                                        d='M301.27 215.291L304.489 228.555C304.525 228.703 304.519 228.858 304.473 229.003L289.874 274.584C289.816 274.764 289.698 274.92 289.54 275.024C289.381 275.128 289.192 275.174 289.003 275.156C288.814 275.137 288.637 275.054 288.502 274.921C288.367 274.788 288.282 274.613 288.26 274.425L286.241 256.668C286.227 256.55 286.24 256.431 286.276 256.318L299.676 215.23C299.732 215.059 299.843 214.91 299.991 214.807C300.139 214.704 300.316 214.652 300.497 214.659C300.677 214.666 300.85 214.731 300.99 214.845C301.129 214.96 301.228 215.116 301.27 215.291Z'
                                        fill='#2F2E41'
                                    />
                                    <path
                                        d='M300.087 216.411L303.058 227.792L290.182 269.354L287.211 256.489L300.087 216.411Z'
                                        fill='#F2F2F2'
                                    />
                                    <path
                                        d='M235.213 278.26C235.708 279.744 286.716 277.765 287.211 277.27C287.643 276.651 288.008 275.987 288.3 275.291C288.766 274.302 289.192 273.312 289.192 273.312L287.211 257.291L236.699 255.5C236.699 255.5 235.436 269.077 235.179 275.291C235.114 276.86 235.114 277.963 235.213 278.26Z'
                                        fill='#2F2E41'
                                    />
                                    <path
                                        opacity='0.1'
                                        d='M280.773 259.458L281.763 273.312H259.479V259.458H280.773Z'
                                        fill='black'
                                    />
                                    <path
                                        opacity='0.1'
                                        d='M252.051 263.911L252.184 263.885L251.555 269.849H239.175V263.911H252.051Z'
                                        fill='black'
                                    />
                                    <path
                                        opacity='0.1'
                                        d='M235.213 278.26C235.708 279.744 286.716 277.765 287.211 277.27C287.643 276.651 288.008 275.987 288.3 275.291H235.179C235.114 276.86 235.114 277.963 235.213 278.26Z'
                                        fill='black'
                                    />
                                    <path
                                        d='M175.787 156.542C188.095 156.542 198.072 146.574 198.072 134.277C198.072 121.98 188.095 112.011 175.787 112.011C163.48 112.011 153.503 121.98 153.503 134.277C153.503 146.574 163.48 156.542 175.787 156.542Z'
                                        fill='#EDBDC3'
                                    />
                                    <path
                                        d='M174.302 154.068C174.302 154.068 166.873 166.933 165.388 173.86C163.902 180.787 143.103 160.006 143.103 160.006L140.379 152.831C140.379 152.831 159.94 143.678 158.455 136.256C156.969 128.834 174.302 154.068 174.302 154.068Z'
                                        fill='#EDBDC3'
                                    />
                                    <path
                                        d='M178.263 192.662L198.567 219.38L247.098 255.5C247.098 255.5 282.259 262.922 274.335 268.364C266.412 273.807 243.632 263.416 243.632 263.416C243.632 263.416 194.605 237.193 184.206 226.307C173.806 215.422 154.493 197.115 154.493 197.115L178.263 192.662Z'
                                        fill='#EDBDC3'
                                    />
                                    <path
                                        d='M151.026 234.224L156.969 243.625L192.435 232.477C200.217 230.031 208.75 230.931 215.652 235.275C221.842 239.172 225.804 245.357 216.89 254.51C199.062 272.817 187.177 262.921 187.177 262.921C187.177 262.921 127.256 291.124 117.352 277.27C107.447 263.416 106.952 256.489 106.952 256.489C106.952 256.489 145.084 232.739 151.026 234.224Z'
                                        fill='#2F2E41'
                                    />
                                    <path
                                        d='M225.309 266.88C225.309 266.88 241.156 277.27 222.338 282.218C203.519 287.166 189.653 280.239 189.653 280.239C189.653 280.239 173.311 280.239 173.311 271.828C173.311 263.416 178.759 262.427 178.759 262.427L195.596 264.901C195.596 264.901 215.9 259.458 225.309 266.88Z'
                                        fill='#D0CDE1'
                                    />
                                    <path
                                        d='M194.069 128.676C195.585 129.351 197.089 130.151 198.738 130.347C200.387 130.543 202.265 129.968 203.045 128.503C203.467 127.712 203.515 126.782 203.535 125.886C203.594 123.169 203.398 120.232 201.674 118.129C200.578 116.791 198.977 115.947 197.842 114.642C197.028 113.706 196.487 112.572 195.904 111.478C193.696 107.335 190.427 103.354 185.884 102.159C183.987 101.661 181.997 101.685 180.036 101.713L168.595 101.874C166.744 101.9 164.864 101.93 163.091 102.466C159.409 103.578 156.728 106.672 154.272 109.631C152.435 111.845 150.593 114.081 149.214 116.605C147.237 120.289 146.238 124.417 146.311 128.596C146.296 129.668 146.434 130.737 146.722 131.769C147.059 132.716 147.477 133.633 147.97 134.508C150.116 138.719 151.39 143.978 148.973 148.039C153.171 146.326 157.324 144.08 160.092 140.493C161.331 138.888 162.302 137.01 163.953 135.832C165.604 134.654 168.293 134.552 169.352 136.281C169.716 136.98 169.904 137.757 169.898 138.545C169.976 139.843 169.974 141.19 170.524 142.367C171.075 143.545 172.386 144.495 173.638 144.143C175.794 143.536 175.588 140.229 177.248 138.727C178.51 137.587 180.455 137.805 182.076 137.287C183.964 136.684 185.38 135.05 186.187 133.241C186.801 131.866 186.792 128.269 187.953 127.524C189.408 126.59 192.719 128.075 194.069 128.676Z'
                                        fill='#2F2E41'
                                    />
                                    <path
                                        d='M138.61 150.484C139.613 150.217 140.668 150.22 141.669 150.492C144.848 151.345 151.975 153.602 153.503 157.037C155.483 161.49 162.416 168.417 162.416 168.417C162.416 168.417 171.826 177.818 169.845 184.25C167.864 190.683 160.436 198.104 160.436 198.104C160.436 198.104 162.416 228.781 152.512 236.698C142.608 244.614 138.646 239.172 138.646 246.594C138.646 254.015 107.943 277.27 102 262.922C102 262.922 104.971 236.203 103.981 226.802C103.005 217.537 104.434 159.729 138.61 150.484Z'
                                        fill='#292D3E'
                                    />
                                    <path
                                        d='M154.493 162.975C154.493 162.975 184.701 185.24 179.254 194.641C179.254 194.641 160.931 203.547 156.969 203.052C153.007 202.557 137.656 185.24 133.694 183.756C129.732 182.271 127.751 155.553 154.493 162.975Z'
                                        fill='#292D3E'
                                    />
                                    <path
                                        d='M289.457 113.738C302.968 113.738 313.921 102.794 313.921 89.2949C313.921 75.7955 302.968 64.852 289.457 64.852C275.946 64.852 264.993 75.7955 264.993 89.2949C264.993 102.794 275.946 113.738 289.457 113.738Z'
                                        fill='#F2F2F2'
                                    />
                                    <path
                                        d='M491.518 57.5502H354.425V28.8882H491.518V57.5502ZM355.029 56.9468H490.914V29.4916H355.029V56.9468Z'
                                        fill='#3F3D56'
                                    />
                                    <path
                                        d='M481.553 34.6207H345.064V62.6792H481.553V34.6207Z'
                                        fill='#3DD5C7'
                                    />
                                    <path
                                        d='M258.783 7.84435C259.951 7.84435 260.897 6.89879 260.897 5.73238C260.897 4.56598 259.951 3.62042 258.783 3.62042C257.616 3.62042 256.669 4.56598 256.669 5.73238C256.669 6.89879 257.616 7.84435 258.783 7.84435Z'
                                        fill='#3DD5C7'
                                    />
                                    <path
                                        d='M266.03 7.84435C267.198 7.84435 268.144 6.89879 268.144 5.73238C268.144 4.56598 267.198 3.62042 266.03 3.62042C264.863 3.62042 263.917 4.56598 263.917 5.73238C263.917 6.89879 264.863 7.84435 266.03 7.84435Z'
                                        fill='#3DD5C7'
                                    />
                                    <path
                                        d='M273.278 7.84435C274.445 7.84435 275.391 6.89879 275.391 5.73238C275.391 4.56598 274.445 3.62042 273.278 3.62042C272.11 3.62042 271.164 4.56598 271.164 5.73238C271.164 6.89879 272.11 7.84435 273.278 7.84435Z'
                                        fill='#3DD5C7'
                                    />
                                    <path
                                        d='M507 165.334H252.744V0H507V165.334ZM253.348 164.731H506.396V0.603411H253.348V164.731Z'
                                        fill='#3F3D56'
                                    />
                                    <path
                                        d='M506.698 9.15222H253.046V9.75563H506.698V9.15222Z'
                                        fill='#3F3D56'
                                    />
                                    <path
                                        d='M332.985 9.45392H332.381V165.267H332.985V9.45392Z'
                                        fill='#3F3D56'
                                    />
                                    <path
                                        d='M405.609 86.0613H361.22V92.0954H405.609V86.0613Z'
                                        fill='#F2F2F2'
                                    />
                                    <path
                                        d='M475.363 86.0613H430.974V92.0954H475.363V86.0613Z'
                                        fill='#F2F2F2'
                                    />
                                    <path
                                        d='M405.609 132.826H361.22V138.86H405.609V132.826Z'
                                        fill='#F2F2F2'
                                    />
                                    <path
                                        d='M475.514 108.84H361.371V114.874H475.514V108.84Z'
                                        fill='#F2F2F2'
                                    />
                                    <path
                                        d='M490.063 279.95H383.55V280.702H490.063V279.95Z'
                                        fill='#3F3D56'
                                    />
                                </g>
                                <defs>
                                    <clipPath id='clip0'>
                                        <rect
                                            width='405'
                                            height='284'
                                            fill='white'
                                            transform='translate(102)'
                                        />
                                    </clipPath>
                                </defs>
                            </motion.svg>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}

export default Header
