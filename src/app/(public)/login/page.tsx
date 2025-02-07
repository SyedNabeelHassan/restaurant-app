import Image from "next/image"
import Link from "next/link"
import React from "react";

export default function Signin(){
    return(<div className="flex items-center  gap-20 flex">
        <div>
            <Image src={'/side-image.png'} alt="side-image" width={805} height={781} className="w-full md:h-1/2 my-8"/>
            </div>
        <form className="w-1/2 flex flex-col space-y-8 ">
            
            <div className="flex-col space-y-8">
                <h1 className="font-semibold">Login in to Exclusive</h1>
                <p className="text-sm ">Enter your details below</p>
                <input type="text" placeholder="username" className="border-0 focus:outline-none bg-transparent border-b-2 border-gray-400"></input>
            </div>
            <div className="mt-4">
                <input type="text" placeholder="password" className="border-0 focus:outline-none bg-transparent border-b-2 border-gray-400"></input>
            </div>
            <div className="w-1/2  flex space-x-12 ">
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-56 h-143 ">Login</button>
                <div className="text-nowrap mt-2">
                <Link href="" className="flex text-align">Forgot password?</Link>
                </div>
            </div>
            
        </form>
    </div>
    )

}