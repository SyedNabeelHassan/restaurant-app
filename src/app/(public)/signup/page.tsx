import Image from "next/image"
import Link from "next/link"
import React from "react";

export default function Signup(){
    return(<div className="flex items-center  gap-20 flex">
        <div>
            <Image src={'/side-image.png'} alt="side-image" width={805} height={781} className="w-full md:h-1/2 my-8"/>
            </div>
        <form className="w-1/2 flex flex-col space-y-8 ">
            
            <div className="flex-col space-y-8">
                <h1 className="font-semibold">Create an account</h1>
                <p className="text-sm ">Enter your details below</p>
                <input type="text" placeholder="Name" className="border-0 focus:outline-none bg-transparent border-b-2 border-gray-400"></input>
            </div>
            <div className="mt-4">
                <input type="text" placeholder="Email or Phone number" className="border-0 focus:outline-none bg-transparent border-b-2 border-gray-400"></input>
            </div>
            <div className="mt-4">
                <input type="text" placeholder="password" className="border-0 focus:outline-none bg-transparent border-b-2 border-gray-400"></input>
            </div>
            <div className="w-1/2  flex  ">
                <button className="bg-orange-400 hover:bg-orange-400 text-white font-bold py-2 px-8 border border-blue-700  w-55 h-auto ">Create account</button>
                
               
                
            </div > 
            <div className="flex items-center space-x-2 px-7 border border-black py-2 px- w-55 h-auto flex">
  <Image src="/Icon-Google.png" alt="Google Icon" className="w-5 h-5" />
  <Link href="" className="text-black text-align text-nowrap">
    Sign up with Google
  </Link>
</div>

        </form>
    </div>
    )

}