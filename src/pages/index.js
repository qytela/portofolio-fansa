import React, { Fragment, memo, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaRegEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Home = () => {
    const portofolios = [
        {
            name: 'Dilaundri',
            description: 'Aplikasi dilaundri bisa menjadi opsi atas pakaian kamu yang menumpuk tapi kamu gak punya waktu untuk mencucinya, hal itu tidak menjadi alasan untuk kamu semakin pusing tujuh keliling dalam menjalani hari. Tidak bisa dipungkiri bahwa perkembangan teknologi semakin mumpuni di masa sekarang, khususnya di bidang laundry pakaian. Perkembangan tersebut menciptakan inovasi yang cocok banget untuk kamu yang males gerak alias mager dalam mencuci pakaian sendiri atau bahkan mencari jasa laundry secara langsung. Perkembangan teknologi dan inovasi pastinya diikuti dengan kelebihan dan keuntungan yang menyertainya.',
            icon: '/dilaundri-icon.png',
            url: 'https://play.google.com/store/apps/details?id=com.dilaundri'
        },
        {
            name: 'BNI Lelang Agunan',
            description: 'Dengan menggunakan aplikasi ini anda dapat mendapatkan informasi agunan baik rumah, tanah dll yang status penjualannya di lelang, baik dari searching location maupun kategori.',
            icon: '/bni-icon.png',
            url: 'https://play.google.com/store/apps/details?id=com.newbnilelang'
        },
        {
            name: 'KlikCoaching',
            description: 'Dengan menggunakan aplikasi ini anda dapat mendapatkan informasi agunan baik rumah, tanah dll yang status penjualannya di lelang, baik dari searching location maupun kategori.',
            icon: '/klikcoaching-icon.png',
            url: 'https://klikcoaching.com'
        },
        {
            name: 'Komunkasi Langit',
            description: 'Dengan menggunakan aplikasi ini anda dapat mendapatkan informasi agunan baik rumah, tanah dll yang status penjualannya di lelang, baik dari searching location maupun kategori.',
            icon: '/komulang-icon.png',
            url: 'http://komunikasilangit.com'
        },
        {
            name: 'KumpulModal',
            description: 'Kumpulmodal adalah aplikasi penggalangan modal usaha bagi pedagang kaki lima, yang menghubungkan Anda sebagai Investor dengan mendanai usaha pedagang kaki lima di Indonesia. Dengan Kumpulmodal, Anda telah membuat dampak sosial dan mendapatkan penghasilan.',
            icon: '/kumpulmodal-icon.png',
            url: 'https://play.google.com/store/apps/details?id=com.kumpulmodal'
        }
    ]

    const renderPortofolios = (
        portofolios.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
                <img src={item.icon} width="60px" height="60px" />
                <div className="mt-5">
                    <p className="text-lg text-white font-bold font-nunito">{item.name}</p>
                    <p className="text-md text-gray-200 font-semibold font-nunito">{item.description.length > 200 ? `${item.description.slice(0, 200)}...` : item.description}</p>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        target="_blank"
                        href={item.url}
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="flex gap-2 mt-5 shadow-md rounded-xl px-4 py-2 bg-blue-500 items-center focus:outline-none"
                        >
                            <img src="/search.svg" width="18px" height="18px" />
                            <p className="text-md text-white font-bold font-nunito">Lihat</p>
                        </motion.button>
                    </motion.a>
                </div>
            </div>
        ))
    )

    return (
        <Fragment>
            <div className="min-h-screen bg-black px-4 py-10">
                <motion.div
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="opacity-0 container mx-auto max-w-4xl pt-44 md:pt-60"
                >
                    <div className="text-center">
                        <div className="text-4xl text-white font-bold font-nunito md:flex justify-center">
                            Hi, Saya&nbsp;
                            <div className="text-blue-400">Muhammad Julfansha Hidayah</div>
                        </div>
                        <div className="text-lg text-gray-400 font-semibold font-nunito mt-5">Saya tertarik bereksperimen dengan hal-hal baru dan membuat aplikasi yang ada untuk meningkatkan keterampilan dan belajar bagaimana sebuah aplikasi bekerja. Saya ingin tetap up-to-date dengan teknologi modern.</div>
                        <div className="flex justify-center mt-5">
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
                        <div className="w-56 mx-auto mt-5">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="py-4 container rounded-3xl text-white font-bold font-poppins button focus:outline-none"
                            >
                                Download CV
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { x: -500, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                    }}
                    transition={{ duration: 1 }}
                    className="container mx-auto pt-60"
                >
                    <p className="text-2xl font-bold text-white font-nunito uppercase title">Portofolio</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                        {renderPortofolios}
                    </div>
                </motion.div>

                <motion.div
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="opacity-0 container mx-auto pt-20"
                >
                    <p className="text-2xl font-bold text-white font-nunito uppercase title">Gallery</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800"
                        >
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
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }} 
                            className="bg-gray-800"
                        >
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
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }} 
                            className="bg-gray-800"
                        >
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
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="bg-gray-800 py-10">
                <div className="container mx-auto lg:px-14">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="ml-5 mr-5 lg:ml-0 lg:mr-0">
                            <p className="text-2xl text-white font-bold font-poppins lg:text-3xl">Sedang mencari Pekerja atau Freelancer?</p>
                            <p className="text-md text-white font-poppins mt-8">Jika kamu tertarik ingin mempekerjakan atau bekerja sama dengan saya, kamu bisa menghubungi saya dibawah ini.</p>
                            <div className="flex items-center gap-4 mt-5">
                                <motion.a
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    className="p-4 bg-white rounded-full"
                                    href="tel:+62895336835534"
                                >
                                    <img src="/call.svg" width="20px" height="20px" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    className="p-4 bg-white rounded-full"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/muhammad-julfansha"
                                >
                                    <img src="/linkedin.svg" width="20px" height="20px" />
                                </motion.a>
                            </div>
                            <p className="text-md text-white font-poppins mt-5">Designed by Fansa.</p>
                            <p className="text-md text-white font-poppins">Illustration made by IRA Design.</p>
                            <p className="text-md text-white font-poppins">Special Thanks to: Indosec, Api.</p>
                        </div>
                        <div className="place-self-center hidden lg:block">
                            <img src="/contact.svg" width="460px" height="460px" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Home)