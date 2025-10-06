import {FC} from "react"
import Image from "next/image";
import signImage from '@/../public/images/signin.jpg'
import google from '@/../public/images/google.png'

import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const signPage : FC = () => {
    return(
        <div className={`${montserrat.className} flex`}>
            <Image src={signImage} alt="sign in image" className="hidden md:block h-screen w-auto"/>
            <div className="flex flex-col justify-between items-center w-full h-100 mt-30 md:mt-70 md:h-120">
                <p className="text-xl md:text-5xl">Create an account</p>
                <input type="text" placeholder="Enter email address" className="border border-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-sm bg-gray-400 md:w-100 text-white"></input>
                <input type="password" placeholder="Enter password" className="border border-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-sm bg-gray-400 md:w-100 text-white"></input>
                <button className="pt-3 pb-3 pr-5 pl-5 bg-blue-600 text-white rounded-sm">Sign In</button>
                <p className="hover:underline hover:cursor-pointer md:text-xl">Already a user ? Login here</p>
                <button className="flex w-60 justify-center p-5 space-x-3 border border-gray-800 pt-3 pb-3 pr-5 pl-5 rounded-sm mt-10 md:mt-0">
                    <Image src={google} alt="google" className="w-5 h-5"/>
                    <p>Login with google</p>
                </button>
            </div>
        </div>
    )
}

export default signPage;