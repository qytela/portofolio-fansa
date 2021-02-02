import React, { Fragment, memo, useState } from 'react'
import { FaArrowRight, FaList, FaArrowCircleLeft, FaArrowCircleRight, FaGithub, FaLinkedinIn, FaTelegramPlane, FaRegEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const EightPost = () => {
    const [indexTopDestination, setIndexTopDestination] = useState(0)
    const [showNavbar, setNavbar] = useState(false)

    const topDestinations = [
        <img src="/tenpost/top-destination-one.png" />,
        <img src="/tenpost/top-destination-two.png" />,
        <img src="/tenpost/top-destination-three.png" />
    ]

    const variantsNavbar = {
        open: {
            height: 'auto',
            boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        },
        close: { height: 0 }
    }

    const nextOrPreviousTopDestination = (index) => {
        if (index < 0) {
            setIndexTopDestination(topDestinations.length - 1)
        } else if (index > topDestinations.length - 1) {
            setIndexTopDestination(0)
        } else {
            setIndexTopDestination(index)
        }
    }

    return (
        <Fragment>
            <div className="h-screen py-10 font-poppins">

                <div className="flex justify-between items-center px-8 xl:px-44">
                    <div className="flex">
                        <img src="/plane.png" className="w-10 h-7 mr-3" />
                        <h3 className="text-2xl font-medium text-gray-600">Ankasa</h3>
                    </div>
                    <button className="px-8 py-3 rounded-xl text-white font-bold shadow-xl items-center justify-center focus:outline-none button not-mobile">Sign Up</button>
                    <div className="text-3xl text-gray-500 xl:hidden">
                        <FaList onClick={() => setNavbar(!showNavbar)} />
                    </div>
                </div>
                <motion.div
                    animate={showNavbar ? "open" : "close"}
                    variants={variantsNavbar}
                    transition={{ duration: 0.3 }}
                    className="p-4 px-8 xl:hidden overflow-hidden"
                >
                    <div className="mt-10">
                        <button className="px-8 py-3 rounded-xl text-white font-bold shadow-xl items-center justify-center focus:outline-none button">Sign Up</button>
                    </div>
                </motion.div>
                <div className="mt-28 xl:mt-20 px-8 xl:px-44">
                    <div className="text-3xl xl:text-5xl font-medium flex">
                        Find Your&nbsp;
                        <h1 className="text-blue-500">Flight</h1>
                    </div>
                    <h5 className="text-md xl:text-xl text-gray-500 mt-2">and explore the world with us</h5>
                </div>


                <div className="welcome-area-bg-right" />
                <div className="welcome-area-bg-left" />

                <div className="px-8 xl:px-44 content">

                    <div className="flex justify-between">
                        <div>
                            <h5 className="text-lg xl:text-xl text-blue-500 font-medium">TRENDING</h5>
                            <h1 className="text-xl xl:text-3xl font-medium">Trending destinations</h1>
                        </div>
                        <a href="#" className="text-lg xl:text-xl text-blue-500 font-medium">View All</a>
                    </div>

                    <div className="grid grid-cols-2 xl:grid-cols-5 gap-5 mt-5">
                        <div className="relative">
                            <img src="/tenpost/destination-one.png" />
                            <div className="w-32 flex justify-center px-2 py-1 rounded-full text-white background destination-airlines">
                                <div className="text-lg font-medium flex">
                                    15&nbsp;
                                    <h4 className="font-normal">Airlines</h4>
                                </div>
                            </div>
                            <div className="destination-title">
                                <h4 className="text-lg text-white font-medium">Tokyo,</h4>
                                <h4 className="text-2xl text-white font-medium">Japan</h4>
                            </div>
                            <div className="px-2 py-2 rounded-full text-white background destination-arrow-right">
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/tenpost/destination-one.png" />
                            <div className="w-32 flex justify-center px-2 py-1 rounded-full text-white background destination-airlines">
                                <div className="text-lg font-medium flex">
                                    15&nbsp;
                                    <h4 className="font-normal">Airlines</h4>
                                </div>
                            </div>
                            <div className="destination-title">
                                <h4 className="text-lg text-white font-medium">Tokyo,</h4>
                                <h4 className="text-2xl text-white font-medium">Japan</h4>
                            </div>
                            <div className="px-2 py-2 rounded-full text-white background destination-arrow-right">
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/tenpost/destination-one.png" />
                            <div className="w-32 flex justify-center px-2 py-1 rounded-full text-white background destination-airlines">
                                <div className="text-lg font-medium flex">
                                    15&nbsp;
                                    <h4 className="font-normal">Airlines</h4>
                                </div>
                            </div>
                            <div className="destination-title">
                                <h4 className="text-lg text-white font-medium">Tokyo,</h4>
                                <h4 className="text-2xl text-white font-medium">Japan</h4>
                            </div>
                            <div className="px-2 py-2 rounded-full text-white background destination-arrow-right">
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/tenpost/destination-one.png" />
                            <div className="w-32 flex justify-center px-2 py-1 rounded-full text-white background destination-airlines">
                                <div className="text-lg font-medium flex">
                                    15&nbsp;
                                    <h4 className="font-normal">Airlines</h4>
                                </div>
                            </div>
                            <div className="destination-title">
                                <h4 className="text-lg text-white font-medium">Tokyo,</h4>
                                <h4 className="text-2xl text-white font-medium">Japan</h4>
                            </div>
                            <div className="px-2 py-2 rounded-full text-white background destination-arrow-right">
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/tenpost/destination-one.png" />
                            <div className="w-32 flex justify-center px-2 py-1 rounded-full text-white background destination-airlines">
                                <div className="text-lg font-medium flex">
                                    15&nbsp;
                                    <h4 className="font-normal">Airlines</h4>
                                </div>
                            </div>
                            <div className="destination-title">
                                <h4 className="text-lg text-white font-medium">Tokyo,</h4>
                                <h4 className="text-2xl text-white font-medium">Japan</h4>
                            </div>
                            <div className="px-2 py-2 rounded-full text-white background destination-arrow-right">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>

                    <div className="mt-44">
                        <div className="relative">
                            <img src="/tenpost/destination-bg.png" className="destination-bg" />
                            <img src="/tenpost/destination-bg-mobile.png" className="mx-auto destination-bg-mobile" />
                            <div className="text-center top-destination">
                                <h1 className="text-md xl:text-3xl text-white">Top 10 destinations</h1>
                            </div>
                            <button className="text-3xl text-white focus:outline-none mobile-arrow-left" onClick={() => nextOrPreviousTopDestination(indexTopDestination - 1)}>
                                <FaArrowCircleLeft />
                            </button>
                            <div className="xl:hidden mobile-content-center mobile">
                                <motion.div
                                    key={indexTopDestination}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {topDestinations[indexTopDestination]}
                                </motion.div>
                            </div>
                            <div className="flex gap-5 mobile-content-center">
                                <img src="/tenpost/top-destination-one.png" className="not-mobile" />
                                <img src="/tenpost/top-destination-one.png" className="not-mobile" />
                                <img src="/tenpost/top-destination-one.png" className="not-mobile" />
                                <img src="/tenpost/top-destination-one.png" className="not-mobile" />
                                <img src="/tenpost/top-destination-one.png" className="not-mobile" />
                            </div>
                            <button className="text-3xl text-white focus:outline-none mobile-arrow-right" onClick={() => nextOrPreviousTopDestination(indexTopDestination + 1)}>
                                <FaArrowCircleRight />
                            </button>
                        </div>
                    </div>

                    <footer className="mt-44 grid grid-cols-1 xl:grid-cols-4">
                        <div className="text-left">
                            <div className="flex">
                                <img src="/plane.png" className="w-10 h-7 mr-3" />
                                <p className="text-xl font-medium">Ankasa</p>
                            </div>
                            <h4 className="text-md text-gray-500 mt-5">Find your Flight and explore the world with us. We will take care of the rest</h4>
                        </div>
                        <div className="xl:flex xl:justify-center mt-10 xl:mt-0">
                            <div className="xl:text-center">
                                <h4 className="text-xl font-medium">Features</h4>
                                <div className="text-left">
                                    <h4 className="text-md text-gray-500 mt-5"><a href="#">Find Ticket</a></h4>
                                    <h4 className="text-md text-gray-500 mt-5"><a href="#">My Booking</a></h4>
                                    <h4 className="text-md text-gray-500 mt-5"><a href="#">Chat</a></h4>
                                    <h4 className="text-md text-gray-500 mt-5"><a href="#">Notification</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="xl:flex xl:justify-center mt-10 xl:mt-0">
                            <div className="xl:text-center">
                                <h4 className="text-xl font-medium">Download Angkasa app</h4>
                                <a href="#"><img src="/tenpost/appstore.png" className="xl:mx-auto mt-5" /></a>
                                <a href="#"><img src="/tenpost/playstore.png" className="xl:mx-auto mt-5" /></a>
                            </div>
                        </div>
                        <div className="xl:flex xl:justify-center mt-10 xl:mt-0">
                            <div className="text-left xl:text-center">
                                <h4 className="text-xl font-medium">Follow Us</h4>
                                <div className="flex xl:justify-center mt-5">
                                    <a
                                        className="text-3xl m-1 p-1 text-gray-800 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-gray-800 hover:text-white"
                                        target="_blank"
                                        href="https://github.com/qytela"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        className="text-3xl m-1 p-1 text-blue-500 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-blue-500 hover:text-white"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/muhammad-julfansha"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                    <a
                                        className="text-3xl m-1 p-1 text-red-500 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-red-500 hover:text-white"
                                        target="_blank"
                                        href="mailto: julfanshahidayah@gmail.com"
                                    >
                                        <FaRegEnvelope />
                                    </a>
                                    <a
                                        className="text-3xl m-1 p-1 text-blue-500 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-blue-500 hover:text-white"
                                        target="_blank"
                                        href="https://t.me/callmeFansa"
                                    >
                                        <FaTelegramPlane />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 mb-5">
                            <h4 className="text-md text-gray-500">© Ankasa.  All Rights Reserved.</h4>
                        </div>
                    </footer>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(EightPost)