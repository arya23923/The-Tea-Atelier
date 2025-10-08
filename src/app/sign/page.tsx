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
            <div className="flex flex-col justify-between items-center w-full h-100 mt-20 md:mt-60 md:h-150">
                <p className="text-xl md:text-5xl p-5">Create an account</p>
                <form action="" className="flex flex-col space-y-4 p-4">
                    <input type="text" placeholder="Enter first name" required className="border border-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-sm bg-gray-300 md:w-100 text-black"></input>
                    <input type="text" placeholder="Enter last name" required className="border border-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-sm bg-gray-300 md:w-100 text-black"></input>
                    <input type="email" placeholder="Enter email address" required className="border border-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-sm bg-gray-300 md:w-100 text-black"></input>
                    <input type="password" placeholder="Enter password" required className="border border-gray-400 pt-3 pb-3 pr-5 pl-5 rounded-sm bg-gray-300 md:w-100 text-black"></input>
                    <button className="pt-3 pb-3 pr-5 pl-5 bg-blue-600 text-white rounded-sm">Sign In</button>
                </form>
                <p className="hover:underline hover:cursor-pointer md:text-xl">Already a user ? Login here</p>
                <button type="submit" className="flex w-60 justify-center p-5 space-x-3 border border-gray-500 pt-3 pb-3 pr-5 pl-5 rounded-sm mt-10 md:mt-0">
                    <Image src={google} alt="google" className="w-5 h-5"/>
                    <p>Login with Google</p>
                </button>
            </div>
        </div>
    )
}

export default signPage;