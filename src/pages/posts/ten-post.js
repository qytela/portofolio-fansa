import React, { Fragment, memo, useState } from 'react'
import { FaArrowRight, FaArrowCircleLeft, FaArrowCircleRight, FaGithub, FaLinkedinIn, FaTelegramPlane, FaRegEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const TenPost = () => {
    const destinations = [
        <img src="/tenpost/top-destination-one.png" />,
        <img src="/tenpost/top-destination-two.png" />,
        <img src="/tenpost/top-destination-three.png" />,
    ]

    const [currentIndex, setIndex] = useState(0)

    const x = newPage => {
        if (newPage < 0) {
            setIndex(destinations.length - 1)
        } else if (newPage > destinations.length - 1) {
            setIndex(0)
        } else {
            setIndex(newPage)
        }
    }

    return (
        <Fragment>
            <div className="h-screen font-poppins">
                <div className="flex justify-between items-center container mx-auto px-4 py-10">
                    <div className="flex">
                        <img src="/plane.png" className="w-10 h-7 mr-3" />
                        <p className="text-2xl font-medium font-poppins text-gray-600">Ankasa</p>
                    </div>
                    <button className="px-8 py-3 rounded-xl text-white font-bold shadow-xl items-center justify-center focus:outline-none button">Sign Up</button>
                </div>
                <div className="container mx-auto px-4 xl:px-0 header-text">
                    <div className="text-4xl xl:text-5xl font-medium flex">
                        Find Your&nbsp;
                        <h1 className="text-blue-500">Flight</h1>
                    </div>
                    <h4 className="text-md xl:text-lg text-gray-600 mt-5">and explore the world with us</h4>
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { x: 100, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                    }}
                    transition={{ duration: 1 }}
                    className="bg-right"></motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { x: -100, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                    }}
                    transition={{ duration: 1 }}
                    className="bg-left"></motion.div>

                <div className="container mx-auto px-4 xl:px-0 content">
                    <div className="flex justify-between">
                        <div>
                            <h5 className="text-md xl:text-lg text-blue-500 font-medium uppercase">Trending</h5>
                            <h2 className="text-xl xl:text-2xl font-bold">Trending destinations</h2>
                        </div>
                        <h5 className="text-md xl:text-lg text-blue-500 font-medium uppercase">View All</h5>
                    </div>
                    <div className="grid grid-cols-2 xl:grid-cols-5 gap-4 mt-10">
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
                </div>

                <div className="container mx-auto pt-40 px-4 xl:px-0">
                    <div className="relative">
                        <div className="xl:hidden destination-bg-mobile">
                            <img src="/tenpost/destination-bg-mobile.png" className="mx-auto" />
                        </div>
                        <div className="destination-bg">
                            <img src="/tenpost/destination-bg.png" className="mx-auto" />
                        </div>
                        <div className="top-destination-title">
                            <div className="flex justify-center">
                                <div className="text-center">
                                    {/* <h5 className="text-md xl:text-lg text-white font-medium">Top 10</h5> */}
                                    <h2 className="text-md xl:text-3xl text-white font-medium xl:mt-5">Top 10 destinations</h2>
                                </div>
                            </div>
                        </div>
                        <div className="top-destinations-mobile-left">
                            <div href="#" className="mt-14 text-white"><button className="focus:outline-none" onClick={() => x(currentIndex - 1)}><FaArrowCircleLeft /></button></div>
                        </div>
                        <div className="top-destinations-mobile-center">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {destinations[currentIndex]}
                            </motion.div>
                        </div>
                        <div className="top-destinations-mobile-right">
                            <div href="#" className="mt-14 text-white"><button className="focus:outline-none" onClick={() => x(currentIndex + 1)}><FaArrowCircleRight /></button></div>
                        </div>
                        <div className="grid grid-cols-5 gap-10 top-destinations">
                            <img src="/tenpost/top-destination-one.png" />
                            <img src="/tenpost/top-destination-one.png" />
                            <img src="/tenpost/top-destination-one.png" />
                            <img src="/tenpost/top-destination-one.png" />
                            <img src="/tenpost/top-destination-one.png" />
                        </div>
                        <div className="previous-before-top-destination">
                            <div className="flex justify-between">
                                <a href="#" className="mt-14 mr-5 text-white text-5xl"><FaArrowCircleLeft /></a>
                                <a href="#" className="mt-14 mr-5 text-white text-5xl"><FaArrowCircleRight /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-20 xl:pt-40 px-4 xl:px-0 container mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-4">
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
                            <div className="text-left">
                                <h4 className="text-xl font-medium">Follow Us</h4>
                                <div className="flex xl:justify-center mt-5">
                                    <a
                                        className="text-3xl m-1 p-1 text-gray-200 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-gray-500 hover:text-white"
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
                    </div>
                </div>

                <div className="pt-20 px-4 xl:px-0 pb-5 container mx-auto text-md text-gray-500">
                    <h4>© Ankasa.  All Rights Reserved.</h4>
                    {/* <h4>© Ankasa.  All Rights Reserved.</h4> */}
                </div>
            </div>
        </Fragment>
    )
}

export default memo(TenPost)