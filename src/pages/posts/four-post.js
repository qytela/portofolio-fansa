import React, { Fragment, memo } from 'react'

const FourPost = () => {
    return (
        <Fragment>
            <div className="py-5 px-4 md:px-20 container mx-auto">
                <p className="text-2xl font-bold font-nunito text-indigo-500">ZWallet</p>
            </div>

            <section className="flex mb-14">
                <div className="bg-landing hidden lg:block"></div>

                <div className="container mx-auto md:px-20">
                    <div className="md:flex lg:flex-row md:flex-row-reverse text-center md:text-left items-center justify-between">
                        <div className="flex justify-center lg:hidden">
                            <img src="http://apibang.ga/zwallet/assets/images/png-phone.webp" className="image-phone-mobile" />
                        </div>
                        <div className="flex flex-col md:w-6/12">
                            <p className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito">Awesome App</p>
                            <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito flex flex-row justify-center md:justify-start mt-2">
                                For Saving&nbsp;
                                <p className="text-blue-500">Time</p>.
                            </h1>
                            <div className="mt-5 flex md:flex-none justify-center md:justify-start">
                                <p className="text-md text-gray-600 font-nunito w-10/12 lg:w-10/12 md:w-full">We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
                            </div>
                            <div className="mt-5">
                                <button className="bg-blue-500 px-4 py-4 rounded-2xl text-white font-bold font-nunito">Sign Up</button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img src="http://apibang.ga/zwallet/assets/images/png-phone.webp" className="image-phone" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="justify-center p-10 bg-gray-100">
                <div className="flex flex-row justify-center">
                    <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito text-blue-500 flex">About&nbsp;
                        <p className="text-black">the Application</p>
                    </h1>
                </div>
                <p className="text-md text-center text-gray-600 font-nunito mt-5 mx-auto">We have some great features from the application and it’s totally free to use by all users around the world.</p>
                <div className="mt-5 flex flex-row justify-center">
                    <div className="md:w-10/12 lg:flex md:gap-5 grid gap-y-5">
                        <div className="bg-white p-5 shadow-3xl rounded-2xl">
                            <div className="flex flex-col items-center">
                                <img src="http://apibang.ga/zwallet/assets/images/icons/phone-border.svg" width="60px" height="60px" />
                                <p className="text-lg font-bold font-nunito mt-2">24/7 Support</p>
                                <p className="text-md text-center text-gray-600 font-nunito mt-5">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-3xl rounded-2xl">
                            <div className="flex flex-col items-center">
                                <img src="http://apibang.ga/zwallet/assets/images/icons/phone-border.svg" width="60px" height="60px" />
                                <p className="text-lg font-bold font-nunito mt-2">24/7 Support</p>
                                <p className="text-md text-center text-gray-600 font-nunito mt-5">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-3xl rounded-2xl">
                            <div className="flex flex-col items-center">
                                <img src="http://apibang.ga/zwallet/assets/images/icons/phone-border.svg" width="60px" height="60px" />
                                <p className="text-lg font-bold font-nunito mt-2">24/7 Support</p>
                                <p className="text-md text-center text-gray-600 font-nunito mt-5">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto lg:px-20 p-10">
                <div className="flex flex-row items-center justify-center md:justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito flex justify-center md:justify-start">100+&nbsp;
                            <p className="text-blue-500">Trusted&nbsp;</p>
                            <p className="text-black">Partners.</p>
                        </h1>
                        <p className="text-md text-center md:text-left font-nunito md:w-10/12 mt-5">We have reached global level and have 100+ brand partners around the globe.</p>
                    </div>
                    <div className="w-6/12 hidden lg:block md:block">
                        <img src="http://apibang.ga/zwallet/assets/images/icons/partner.svg" />
                    </div>
                </div>
                <img src="http://apibang.ga/zwallet/assets/images/icons/partner.svg" className="w-full lg:hidden md:hidden" />
            </section>

            <section className="justify-center p-10 bg-gray-100 px-4 md:px-20">
                <div className="container mx-auto lg:px-20">
                    <div className="lg:flex lg:flex-row-reverse text-center lg:text-left items-center justify-between">
                        <div className="flex justify-center lg:hidden">
                            <img src="http://apibang.ga/zwallet/assets/images/png-phone.webp" className="image-phone-mobile" />
                        </div>
                        <div className="flex flex-col lg:w-6/12">
                            <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito flex flex-row justify-center lg:justify-start mt-2">All The&nbsp;
                                <p className="text-blue-500">Great</p>
                            </h1>
                            <p className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito">Zwallet Features.</p>
                            <div className="mt-10">
                                <div className="grid gap-y-6 text-left">
                                    <div className="bg-white p-6 rounded-xl">
                                        <h1 className="text-md font-bold font-nunito flex"><p className="text-blue-500">1</p>. Small Fee</h1>
                                        <p className="text-md text-gray-800 font-nunito mt-5">We only charge 5% of every success transaction done in Zwallet app.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl">
                                        <h1 className="text-md font-bold font-nunito flex"><p className="text-blue-500">2</p>. Data Secured</h1>
                                        <p className="text-md text-gray-800 font-nunito mt-5">All your data is secured properly in our system and it’s encrypted.</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-xl">
                                        <h1 className="text-md font-bold font-nunito flex"><p className="text-blue-500">3</p>. User Friendly</h1>
                                        <p className="text-md text-gray-800 font-nunito mt-5">Zwallet come up with modern and sleek design and not complicated.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img src="http://apibang.ga/zwallet/assets/images/png-phone.webp" className="image-phone" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto lg:px-20 p-10">
                <div className="flex-row justify-center hidden lg:flex md:flex">
                    <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito flex">What Users are&nbsp;
                        <p className="text-blue-500">Saying.</p>
                    </h1>
                </div>
                <div className="lg:hidden md:hidden">
                    <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito text-center">What Users are</h1>
                    <h1 className="text-3xl lg:text-4xl md:text-4xl font-bold font-nunito text-blue-500 text-center">Saying.</h1>
                </div>
                <p className="text-md text-center text-gray-600 font-nunito mt-5 mx-auto">We have some great features from the application and it’s totally free to use by all users around the world.</p>
                <div className="mt-5 flex flex-row justify-center">
                    <div className="md:w-10/12 lg:flex md:gap-5 grid gap-y-5">
                        <div className="bg-white p-5 shadow-3xl rounded-2xl">
                            <div className="flex flex-col items-center">
                                <img src="http://apibang.ga/zwallet/assets/images/cristine.png" width="60px" height="60px" />
                                <p className="text-lg font-bold font-nunito mt-2">Sherina Chaw</p>
                                <p className="text-md text-center text-gray-600 font-nunito mt-5">“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-3xl rounded-2xl">
                            <div className="flex flex-col items-center">
                                <img src="http://apibang.ga/zwallet/assets/images/cristine.png" width="60px" height="60px" />
                                <p className="text-lg font-bold font-nunito mt-2">Sherina Chaw</p>
                                <p className="text-md text-center text-gray-600 font-nunito mt-5">“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
                            </div>
                        </div>
                        <div className="bg-white p-5 shadow-3xl rounded-2xl">
                            <div className="flex flex-col items-center">
                                <img src="http://apibang.ga/zwallet/assets/images/cristine.png" width="60px" height="60px" />
                                <p className="text-lg font-bold font-nunito mt-2">Sherina Chaw</p>
                                <p className="text-md text-center text-gray-600 font-nunito mt-5">“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-blue-500 py-10">
                <div className="container mx-auto lg:px-16">
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
            <style jsx>{`
                .image-phone {
                    height: 800px;
                    margin-right: 70px;
                }
                .image-phone-mobile {
                    height: 550px;
                }
                .bg-landing {
                    position: absolute;
                    width: 45%;
                    height: 500px;
                    z-index: -1;
                    background: url('http://apibang.ga/zwallet/assets/images/home-bg.webp');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    right: 0;
                    top: 0;
                }
            `}</style>
        </Fragment>
    )
}

export default memo(FourPost)