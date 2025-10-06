import {FC} from "react"
import Image from "next/image";
import loginImage from '@/../public/images/login.jpg'
import google from '@/../public/images/google.png'

import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});


const loginPage : FC = () => {
    return(
        <div className={`${montserrat.className} flex`}>
            <Image src={loginImage} alt="sign in image" className="hidden md:block h-screen w-auto"/>
            <div className="flex flex-col justify-between items-center w-full h-100 mt-30 md:mt-60 md:h-140">
                <p className="text-xl md:text-5xl">Hello,</p>
                <p className="text-xl md:text-5xl">Welcome back!</p>
                <form action="" className="flex flex-col space-y-4">
                    <input type="email" placeholder="Enter email address" className="border border-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-sm bg-gray-300 md:w-100 md:mt-10 text-black"></input>
                    <input type="password" placeholder="Enter password" className="border border-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-sm bg-gray-300 md:w-100 text-black"></input>
                    <button className="pt-3 pb-3 pr-5 pl-5 bg-blue-600 text-white rounded-sm">Log In</button>
                </form>
                <p className="hover:underline hover:cursor-pointer md:text-xl md:mt-5">Not registered ? Create an account</p>
                <button className="flex w-60 justify-center p-5 space-x-3 border border-gray-800 pt-3 pb-3 pr-5 pl-5 rounded-sm mt-10 md:mt-5">
                    <Image src={google} alt="google" className="w-5 h-5"/>
                    <p>Login with Google</p>
                </button>
            </div>
        </div>
    )
}

export default loginPage