import React, { Fragment, memo } from 'react'

const EightPost = () => {
    return (
        <Fragment>
            <div className="min-h-screen">
                <div className="flex flex-col justify-center px-4 md:px-20 lg:px-32 banner-bg">
                    <div className="container mx-auto">
                        <div className="margin-banner">
                            <h1 className="text-4xl xl:text-6xl font-bold font-poppins">Simple App that</h1>
                            <div className="text-4xl xl:text-6xl font-bold font-poppins flex mt-2 lg:mt-5">
                                we&nbsp;
                                <h1 className="text-yellow-500">CREATE</h1>
                            </div>
                            <p className="w-full xl:w-2/4 text-md font-poppins mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur. Ante metus dictum at tempor.</p>
                            <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium font-poppins mt-5">KNOW US BETTER</button>
                        </div>
                    </div>
                </div>

                <div className="pt-20 px-4 xl:px-40">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Trend Analysis</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium font-poppins mt-5">READ MORE</button>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-2.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Site Optimization</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium font-poppins mt-5">DISCOVER MORE</button>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-3.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Email Design</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium font-poppins mt-5">MORE DETAIL</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:h-screen">
                    <div className="left-bg-decor">
                        <div className="container mx-auto px-4 md:px-20 lg:px-32 xl:px-0">
                            <div className="flex flex-col xl:flex-row mt-80 xl:ml-32">
                                <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/left-image.png" className="lg:w-3/5 xl:w-1/3 md:w-3/5 lg:h-3/5 xl:h-1/3 md:h-3/5" />
                                <div className="grid grid-cols-1 gap-y-20 mt-24 xl:mt-0 xl:ml-20">
                                    <div className="flex md:max-w-full xl:max-w-xl">
                                        <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                        <div className="ml-5">
                                            <h1 className="text-xl font-medium font-poppins">Vestibulum pulvinar rhoncus</h1>
                                            <p className="text-md text-gray-500 font-poppins">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                        </div>
                                    </div>
                                    <div className="md:max-w-full xl:max-w-xl flex">
                                        <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                        <div className="ml-5">
                                            <h1 className="text-xl font-medium font-poppins">Vestibulum pulvinar rhoncus</h1>
                                            <p className="text-md text-gray-500 font-poppins">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                        </div>
                                    </div>
                                    <div className="md:max-w-full xl:max-w-xl flex">
                                        <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                        <div className="ml-5">
                                            <h1 className="text-xl font-medium font-poppins">Vestibulum pulvinar rhoncus</h1>
                                            <p className="text-md text-gray-500 font-poppins">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-20 px-4 xl:px-44 mb-20 mx-auto">
                    <div className="max-w-2x mx-autol">
                        <div className="text-4xl font-bold font-poppins text-center justify-center lg:flex">
                            What They Think&nbsp;
                            <h1 className="text-yellow-500">About Us</h1>
                        </div>
                    </div>
                    <p className="text-lg text-gray-500 mx-auto text-center mt-5 w-3/4">Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio. Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                        <div className="bg-white shadow-3xl">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="min-h-screen">
                    <div className="justify-end flex">
                        <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/banner-bg.png" />
                    </div>
                    <div className="xl:absolute mt-10 xl:mt-0 xl:top-20 xl:left-40 xl:bottom-0 px-4 xl:px-0 flex flex-col justify-center">
                        <div className="font-poppins">
                            <h1 className="text-4xl lg:text-6xl font-bold font-poppins">Simple App that</h1>
                            <div className="text-4xl lg:text-6xl font-bold font-poppins flex mt-2 lg:mt-5">
                                we&nbsp;
                                <h1 className="text-yellow-500">CREATE</h1>
                            </div>
                        </div>
                        <p className="lg:w-2/5 text-md font-poppins mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur. Ante metus dictum at tempor.</p>
                        <div className="w-56 mt-10">
                            <button className="shadow-md bg-yellow-500 py-4 container rounded-full text-white font-bold font-poppins button-scale">KNOW US BETTER</button>
                        </div>
                    </div>
                </div>

                <div className="pt-20 px-4 xl:px-40">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Trend Analysis</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium font-poppins mt-5">READ MORE</button>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-2.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Site Optimization</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium font-poppins mt-5">DISCOVER MORE</button>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-3.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Email Design</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium font-poppins mt-5">MORE DETAIL</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-20 px-4 lg:px-40">
                    <div className="absolute left-0 hidden xl:block left-bg-decor">
                        <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/left-bg-decor.png" />
                    </div>
                    <div className="absolute left-40 hidden xl:block phone-image">
                        <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/left-image.png" />
                    </div>
                    <div className="flex justify-end md:justify-center lg:justify-end list">
                        <div className="grid grid-cols-1 gap-y-20">
                            <div className="md:max-w-full xl:max-w-xl flex">
                                <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                <div className="ml-5">
                                    <h1 className="text-xl font-medium font-poppins">Vestibulum pulvinar rhoncus</h1>
                                    <p className="text-md text-gray-500 font-poppins">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                </div>
                            </div>
                            <div className="md:max-w-full xl:max-w-xl flex">
                                <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                <div className="ml-5">
                                    <h1 className="text-xl font-medium font-poppins">Vestibulum pulvinar rhoncus</h1>
                                    <p className="text-md text-gray-500 font-poppins">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                </div>
                            </div>
                            <div className="md:max-w-full xl:max-w-xl flex">
                                <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                <div className="ml-5">
                                    <h1 className="text-xl font-medium font-poppins">Vestibulum pulvinar rhoncus</h1>
                                    <p className="text-md text-gray-500 font-poppins">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-60 px-4 xl:px-44 mb-20 mx-auto">
                    <div className="max-w-2x mx-autol">
                        <div className="text-4xl font-bold font-poppins text-center justify-center lg:flex">
                            What They Think&nbsp;
                            <h1 className="text-yellow-500">About Us</h1>
                        </div>
                    </div>
                    <p className="text-md text-gray-500 mx-auto text-center mt-5 w-3/4">Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio. Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                        <div className="bg-white shadow-3xl">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* <style jsx>{`
                .left-bg-decor {
                    top: 150%;
                }
                .phone-image {
                    top: 185%;
                }
                .list {
                    margin-top: 12%;
                }
            `}</style> */}
        </Fragment>
    )
}

export default memo(EightPost)