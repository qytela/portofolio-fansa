import React, { Fragment, memo } from 'react'
import { FaGithub, FaDribbble, FaTwitter, FaRegEnvelope } from 'react-icons/fa'

const TwoPost = () => {
    return (
        <Fragment>
            <div className="min-h-screen py-10 px-3 bg-gray-100">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
                        <img src="https://braydentw.github.io/react-tailwind-portfolio/static/media/profile.7c4aed56.png" className="w-32 mx-auto shadow-xl rounded-full" />
                        <div className="text-center mt-5">
                            <p className="text-xl font-semibold text-gray-900 lg:text-2xl">M. Julfansha. H</p>
                            <p className="text-xs text-gray-500 pt-2 pb-4 w-auto inline-block border-b-2 lg:text-base">Front-End Developer/Designer</p>
                            <div className="flex align-center justify-center mt-4">
                                <a
                                    className="text-xl m-1 p-1 text-gray-800 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-gray-800 hover:text-white"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    className="text-xl m-1 p-1 text-pink-600 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-pink-600 hover:text-white"
                                >
                                    <FaDribbble />
                                </a>
                                <a
                                    className="text-xl m-1 p-1 text-blue-500 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-blue-500 hover:text-white"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    className="text-xl m-1 p-1 text-green-500 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-green-500 hover:text-white"
                                >
                                    <FaRegEnvelope />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto pt-16">
                    <p className="text-2xl font-bold text-center lg:text-4xl">About Me</p>
                    <p className="text-base text-center text-gray-600 leading-relaxed mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitaion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu futgiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(TwoPost)