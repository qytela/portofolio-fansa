import React, { Fragment, memo } from 'react'

const NinePost = () => {
    return (
        <Fragment>
            <div className="h-screen font-poppins">
                <div className="welcome-area"></div>
                <div className="xl:h-screen container mx-auto px-4 md:px-20 xl:px-0 welcome-area-header">
                    <h1 className="text-4xl md:text-6xl font-bold">Simple App that</h1>
                    <div className="text-4xl md:text-6xl font-bold flex mt-2 lg:mt-5">
                        we&nbsp;
                        <h1 className="text-yellow-500">CREATE</h1>
                    </div>
                    <p className="w-full xl:w-2/5 sm:text-md md:text-xl lg:text-xl xl:text-lg mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum posuere lorem ipsum dolor sit amet consectetur. Ante metus dictum at tempor.</p>
                    <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium mt-5">KNOW US BETTER</button>
                </div>

                <div className="pt-20 xl:pt-0 px-4 md:px-40">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl font-medium">Trend Analysis</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium mt-5">READ MORE</button>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-2.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl font-medium">Site Optimization</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium mt-5">DISCOVER MORE</button>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl p-4">
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/features-icon-3.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl font-medium">Email Design</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                                <button className="bg-yellow-500 px-5 py-3 rounded-full text-md text-white font-medium mt-5">MORE DETAIL</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-40 xl:mb-0 xl:h-screen">
                    <div className="left-bg-decor"></div>
                    <div className="flex flex-col lg:flex-row px-4 left-phone-image">
                        <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/left-image.png" className="md:w-3/4 md:h-3/4 xl:w-auto xl:h-auto" style={{ zIndex: 9999 }} />
                        <div className="grid grid-cols-1 gap-y-20 mt-24 lg:mt-0 md:ml-10 xl:ml-32">
                            <div className="flex md:max-w-full lg:max-w-xl">
                                <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                <div className="ml-5">
                                    <h1 className="text-xl font-medium">Vestibulum pulvinar rhoncus</h1>
                                    <p className="text-md text-gray-500">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                </div>
                            </div>
                            <div className="flex md:max-w-full xl:max-w-xl">
                                <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                <div className="ml-5">
                                    <h1 className="text-xl font-medium">Vestibulum pulvinar rhoncus</h1>
                                    <p className="text-md text-gray-500">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                </div>
                            </div>
                            <div className="flex md:max-w-full xl:max-w-xl">
                                <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/about-icon-01.png" className="h-24" />
                                <div className="ml-5">
                                    <h1 className="text-xl font-medium">Vestibulum pulvinar rhoncus</h1>
                                    <p className="text-md text-gray-500">Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 lg:pt-20 xl:pt-0">
                    <div className="right-bg-decor"></div>
                    <div className="text-4xl font-bold text-center justify-center lg:flex">
                        What They Think&nbsp;
                        <h1 className="text-yellow-500">About Us</h1>
                    </div>
                    <p className="text-lg text-gray-500 mx-auto text-center mt-5 md:w-3/4">Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio. Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:px-32 gap-8 mt-10">
                        <div className="bg-white shadow-3xl" style={{ zIndex: 9999 }}>
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl font-medium">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl" style={{ zIndex: 9999 }}>
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl font-medium">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-3xl" style={{ zIndex: 9999 }}>
                            <img src="https://templatemo.com/templates/templatemo_540_lava_landing_page/assets/images/testimonial-author-1.png" className="mx-auto mt-10" />
                            <div className="mt-10 mb-10 text-center">
                                <h1 className="text-xl font-medium">Jonathan Smart</h1>
                                <p className="text-md text-gray-500 mt-5 w-3/4 mx-auto">Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:mt-60">
                    <div className="footer-bg">
                        <div className="container mx-auto max-w-2xl footer-container">
                            <div className="flex justify-center">
                                <div className="text-center">
                                    <div className="text-4xl text-white font-bold justify-center flex">
                                        More About&nbsp;
                                        <div className="text-yellow-400">Lava</div>
                                    </div>
                                    <p className="text-md text-white mt-5">Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in porta metus. Suspendisse blandit pulvinar ligula ut elementum.</p>
                                    <p className="text-md text-white mt-5">If you need this contact form to send email to your inbox, you may follow our contact page for more detail.</p>
                                    <p className="text-md text-white mt-32 md:mt-52">Copyright © 2020 Lava Landing Page | Designed by TemplateMo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(NinePost)