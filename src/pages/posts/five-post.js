import 'tailwindcss/tailwind.css'

import React, { Fragment, memo } from 'react'
import { TextField } from '@material-ui/core'

const FivePost = () => {
    return (
        <Fragment>
            <div className="h-screen flex">
                <div className="w-7/12 h-full bg-blue-500">
                    <img src="/plane-bg.png" className="w-full h-full" />
                </div>
                <div className="p-8 mx-auto">
                    <div className="flex">
                        <img src="/plane.png" className="w-10 h-7 mr-3" />
                        <p className="text-2xl font-medium font-poppins text-gray-600">Ankasa</p>
                    </div>
                    <div className="pt-44">
                        <p className="text-3xl text-center font-medium font-poppins">Login Ankasa</p>
                        <div className="w-80 mt-10">
                            <div className="mt-5">
                                <TextField label="Email" fullWidth />
                            </div>
                            <div className="mt-5">
                                <TextField label="Password" fullWidth />
                            </div>
                        </div>
                        <div className="mt-5">
                            <button className="w-full px-4 py-4 rounded-xl text-white font-bold shadow-xl items-center justify-center button">Login</button>
                        </div>
                        <div className="mt-5">
                            <h1 className="text-md text-gray-600 text-center font-poppins">Don't have an account?&nbsp;
                                <a className="text-red-500" href="#">Register here</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                *:focus {
                    outline: none;
                }
                .button {
                    background: #2395FF;
                    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
                    border-radius: 10px;
                }
            `}</style>
        </Fragment>
    )
}

export default memo(FivePost)