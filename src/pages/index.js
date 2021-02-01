import 'aos/dist/aos.css'

import React, { Fragment, memo, useEffect } from 'react'
import { FaGithub, FaDribbble, FaTwitter, FaRegEnvelope } from 'react-icons/fa'
import AOS from 'aos'

const Home = () => {
    useEffect(() => {
        AOS.init({
            once: true
        })
    })

    const renderPortofolios = (
        Array.from(Array(4), (_, key) => (
            <div { ...{ key } } className="bg-gray-800 rounded-lg">
                <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    className="w-full rounded-t-lg"
                />
                <div className="p-4">
                    <p className="text-lg text-white font-bold font-nunito">Zwallet Web</p>
                    <p className="text-md text-white font-semibold font-nunito">ZWallet adalah aplikasi yang bertujuan untuk mempermudah penyimpanan uang secara virtual, dibek...</p>
                    <button className="flex gap-2 mt-5 shadow-md rounded-xl px-4 py-2 bg-blue-500 items-center button-scale">
                        <img src="http://apiar.online/icons/search.svg" width="18px" height="18px" />
                        <p className="text-md text-white font-bold font-nunito">Lihat</p>
                    </button>
                </div>
            </div>
        ))
    )

    return (
        <Fragment>
            <div className="min-h-screen bg-black px-4 py-10">
                <div className="container mx-auto max-w-4xl pt-44 md:pt-60" data-aos="fade-up" data-aos-duration="800">
                    <div className="text-center">
                        <div className="text-4xl text-white font-bold font-nunito md:flex justify-center">
                            Hi, Saya&nbsp;
                            <div className="text-blue-400">Muhammad Julfansha Hidayah</div>
                        </div>
                        <div className="text-lg text-gray-400 font-semibold font-nunito mt-5">Saya tertarik bereksperimen dengan hal-hal baru dan membuat aplikasi yang ada untuk meningkatkan keterampilan dan belajar bagaimana sebuah aplikasi bekerja. Saya ingin tetap up-to-date dengan teknologi modern.</div>
                        <div className="flex justify-center mt-5">
                            <a
                                className="text-3xl m-1 p-1 text-gray-200 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-gray-500 hover:text-white"
                            >
                                <FaGithub />
                            </a>
                            <a
                                className="text-3xl m-1 p-1 text-pink-600 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-pink-600 hover:text-white"
                            >
                                <FaDribbble />
                            </a>
                            <a
                                className="text-3xl m-1 p-1 text-blue-500 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-blue-500 hover:text-white"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                className="text-3xl m-1 p-1 text-green-500 rounded-full transition-colors duration-300 lg:m-2 lg:p-2 hover:bg-green-500 hover:text-white"
                            >
                                <FaRegEnvelope />
                            </a>
                        </div>
                        <div className="w-56 mx-auto mt-5">
                            <button className="py-4 container rounded-3xl text-white font-bold font-poppins button button-scale">Download CV</button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto pt-60"  data-aos="fade-left" data-aos-duration="800">
                    <p className="text-2xl font-bold text-white font-nunito uppercase title">Portofolio</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                        {renderPortofolios}
                    </div>
                </div>

                <div className="container mx-auto pt-20"  data-aos="fade-right" data-aos-duration="800">
                    <p className="text-2xl font-bold text-white font-nunito uppercase title">Gallery</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        <div className="bg-gray-800">
                            <div className="p-4">
                                <div className="bg-gray-800 bg-opacity-90 w-auto p-1 flex justify-center absolute my-2 mx-2">
                                    <div className="text-center">
                                        <p className="text-lg text-white font-bold font-nunito">24 Agustus 2019</p>
                                    </div>
                                </div>
                                <img src="/dilo-hackathon.jpeg" />
                                <div className="mt-5">
                                    <p className="text-2xl text-white font-bold font-nunito">DiLo Hackathon</p>
                                    <p className="text-md text-gray-300 font-semibold font-nunito">Juara 1 DiLo Hackathon, DiLo Jakarta membuat sebuah acara Hackathon Festival 2019 yang berlokasi di Gedung Kemenpora, kami membuat aplikasi Finansial Teknologi (Fintech) untuk Telkomsel yang diberi nama KakiLima dengan menggunakan layanan API dari BigBox.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800">
                            <div className="p-4">
                                <div className="bg-gray-800 bg-opacity-90 w-auto p-1 flex justify-center absolute my-2 mx-2">
                                    <div className="text-center">
                                        <p className="text-lg text-white font-bold font-nunito">23 September 2019</p>
                                    </div>
                                </div>
                                <img src="/bri-hackathon.jpeg" />
                                <div className="mt-5">
                                    <p className="text-2xl text-white font-bold font-nunito">BRI Hackathon</p>
                                    <p className="text-md text-gray-300 font-semibold font-nunito">Juara 1 BRI Hackathon, BRI Hackathon sebuah lomba membuat inovasi baru untuk Bank BRI, kami membuat aplikasi Finansial Teknologi (Fintech) untuk Bank BRI yang diberi nama BRIma.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800">
                            <div className="p-4">
                                <div className="bg-gray-800 bg-opacity-90 w-auto p-1 flex justify-center absolute my-2 mx-2">
                                    <div className="text-center">
                                        <p className="text-lg text-white font-bold font-nunito">11 Februari 2020</p>
                                    </div>
                                </div>
                                <img src="/garuda-hackathon.jpeg" />
                                <div className="mt-5">
                                    <p className="text-2xl text-white font-bold font-nunito">Garuda Indonesia Hackathon</p>
                                    <p className="text-md text-gray-300 font-semibold font-nunito">Finalis Garuda Innovation Challenge, Garuda Indonesia mengadakan sebuah lomba Hackathon yang dimana Tim Bayang (Tim Saya) dari 400 submission kami berhasil lolos mencapai 15 besar dengan berhadiahkan Jalan-Jalan ke Bali dan menginap disebuah Hotel milik Garuda Indonesia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 py-10">
                <div className="container mx-auto lg:px-14">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="ml-5 mr-5 lg:ml-0 lg:mr-0">
                            <p className="text-2xl text-white font-bold font-poppins lg:text-3xl">Sedang mencari Pekerja atau Freelancer?</p>
                            <p className="text-md text-white font-poppins mt-8">Jika kamu tertarik ingin mempekerjakan atau bekerja sama dengan saya, kamu bisa menghubungi saya dibawah ini.</p>
                            <div className="flex items-center gap-4 mt-5">
                                <button className="p-4 bg-white rounded-full icon">
                                    <img src="http://apiar.online/icons/call.svg" width="20px" height="20px" />
                                </button>
                                <button className="p-4 bg-white rounded-full icon">
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

export default memo(Home)