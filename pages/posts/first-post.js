import 'tailwindcss/tailwind.css'
import 'aos/dist/aos.css'

import React, { Fragment, memo, useEffect } from 'react'
import AOS from 'aos'

import styles from '../components/Styles.module.css'

const FirstPost = () => {
    useEffect(() => {
        AOS.init({
            once: true
        })
    })

    const renderPortofolio = (
        Array.from(Array(8), (_, key) => (
            <div { ...{ key } } className="bg-white p-5 shadow-3xl rounded-2xl">
                <img src="http://apiar.online/porto/zwallet.png" width="48px" height="48px" />
                <p className="text-lg font-semibold text-blue-500 font-poppins mt-2">Zwallet Web</p>
                <p className="text-md text-black font-poppins">ZWallet adalah aplikasi yang bertujuan untuk mempermudah penyimpanan uang secara virtual, dibek...</p>
                <div className="flex gap-3 mt-4">
                    <button className={`flex gap-2 shadow-md rounded-xl px-4 py-2 bg-blue-500 items-center ${styles.button_scale}`}>
                        <img src="http://apiar.online/icons/search.svg" width="18px" height="18px" />
                        <p className="text-md text-white font-semibold font-poppins">View</p>
                    </button>
                    <button className={`flex gap-2 shadow-md rounded-xl px-4 py-2 bg-gray-100 items-center ${styles.button_scale}`}>
                        <img src="http://apiar.online/icons/github.svg" width="18px" height="18px" />
                        <p className="text-md text-black font-semibold font-poppins">Github</p>
                    </button>
                </div>
            </div>
        ))
    )

    return (
        <Fragment>
            <div className="min-h-screen container mx-auto px-4">
                <nav className="flex py-4 mt-5" data-aos="fade-left" data-aos-duration="800">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-200 rounded-full">
                            <img src='http://apiar.online/icons/fire.svg' />
                        </div>
                        <p className="text-base font-poppins">Portofolio</p>
                        <p className="text-base font-poppins">Kontak Saya</p>
                    </div>
                </nav>

                <div className="pt-44" data-aos="fade-up" data-aos-duration="800">
                    <div className="flex">
                        <div className="flex flex-col w-full lg:w-6/12 xl:w-6/12 justify-between">
                            <div>
                                <p className="text-3xl font-bold text-blue-500 font-poppins name">M. Julfansha. H</p>
                                <p className="text-3xl font-medium text-black font-poppins mt-2">Fullstack Developer</p>
                                <p className="text-lg text-black font-poppins mt-5">Saya adalah seorang Fullstack Developer asal Jakarta yang memiliki pengalaman dari membuat aplikasi website maupun mobile. Saya juga menyukai hal baru dan mempelajarinya dengan cepat.</p>
                            </div>
                            <div className="container flex items-center gap-4 mt-5">
                                <button className={`p-4 bg-blue-200 rounded-full ${styles.icon}`}>
                                    <img src="http://apiar.online/icons/call.svg" width="20px" height="20px" />
                                </button>
                                <button className={`p-4 bg-blue-200 rounded-full ${styles.icon}`}>
                                    <img src="http://apiar.online/icons/linkedin.svg" width="20px" height="20px" />
                                </button>
                            </div>
                            <div className="w-56 mt-5">
                                <button className={`shadow-md bg-blue-500 py-4 container rounded-3xl text-white font-bold font-poppins ${styles.button_scale}`}>Download CV</button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img src="http://apiar.online/icons/about.svg" />
                        </div>
                    </div>
                </div>

                <div className="pt-44" data-aos="fade-left" data-aos-duration="800">
                    <p className={`text-2xl font-bold text-black font-poppins uppercase ${styles.title}`}>Portofolio</p>
                    <div className="mt-5">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {renderPortofolio}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-500 py-10 mt-10">
                <div className="container mx-auto lg:px-14">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="ml-5 mr-5 lg:ml-0 lg:mr-0">
                            <p className="text-2xl text-white font-bold font-poppins lg:text-3xl">Sedang mencari Pekerja atau Freelancer?</p>
                            <p className="text-md text-white font-poppins mt-8">Jika kamu tertarik ingin mempekerjakan atau bekerja sama dengan saya, kamu bisa menghubungi saya dibawah ini.</p>
                            <div className="flex items-center gap-4 mt-5">
                                <button className={`p-4 bg-white rounded-full ${styles.icon}`}>
                                    <img src="http://apiar.online/icons/call.svg" width="20px" height="20px" />
                                </button>
                                <button className={`p-4 bg-white rounded-full ${styles.icon}`}>
                                    <img src="http://apiar.online/icons/linkedin.svg" width="20px" height="20px" />
                                </button>
                            </div>
                            <p className="text-md text-white font-poppins mt-5">Designed by Fansa.</p>
                            <p className="text-md text-white font-poppins">Illustration made by IRA Design.</p>
                            <p className="text-md text-white font-poppins">Special Thanks to: Indosec, Api.</p>
                        </div>
                        <div className="place-self-center hidden lg:block">
                            <img src="http://apiar.online/icons/contact.svg" width="460px" height="460px" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(FirstPost)