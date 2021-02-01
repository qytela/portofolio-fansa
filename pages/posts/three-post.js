import 'tailwindcss/tailwind.css'

import React, { Fragment, memo } from 'react'

const ThreePost = () => {
    const renderGrid = (
        Array.from(Array(8), (_, key) => (
            <div { ...{ key } } className="bg-blue-500"><div className="h-24"></div></div>
        ))
    )

    return (
        <Fragment>
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="container mx-auto max-w-2xl px-4 md:px-0">
                    <div className="justify-center">
                        <div className="bg-white rounded-xl">
                            <div className="md:flex pt-4 md:pt-0">
                                <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc0Mjg2NjM5OTYxNDgyNzQ4/albert-einstein-gettyimages-517318510.jpg" className="w-40 rounded-full md:rounded-none md:rounded-tl-xl md:rounded-bl-xl mx-auto" />
                                <div className="p-4 flex flex-col justify-between text-center md:text-left">
                                    <p className="text-lg font-medium font-poppins">"Jadilah sukses jika ingin membahagiakan dirimu sendiri."</p>
                                    <div className="mt-5 md:-mt-0">
                                        <p className="text-md font-medium font-poppins text-gray-500">- Albert Einstein</p>
                                        <p className="text-md font font-medium font-poppins text-gray-500">Relativitas Umum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 px-4">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {renderGrid}
                    </div>
                </div>

                <div className="min-h-screen mt-10">
                    <div className="container mx-auto max-w-2xl">
                        <div className="bg-white p-8 flex justify-center">
                            <p>Center</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(ThreePost)