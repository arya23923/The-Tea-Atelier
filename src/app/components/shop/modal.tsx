import { FC, useState } from "react";
import cross from '@/../public/images/cross.png'
import Image from "next/image";

import { Montserrat } from 'next/font/google'
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-cormorant", 
});
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

interface Tea {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

interface modal{
    isOpen : boolean;
    isClose : () => void;
    teainfo : Tea | null;
}

const TeaModal:FC<modal> = ({isOpen, isClose, teainfo}) => {
    return(
        <div className={`fixed inset-0 flex items-center justify-center max-h-screen backdrop-blur-sm bg-gray-20 md:z-50 ${isOpen ? "block" : "hidden"}`}>
            <div className="bg-white w-90 h-170 mt-22 overflow-y-scroll -ml-0 md:hidden pb-5">
                {teainfo && (
                    <div className={` flex flex-col justify-center items-center ${montserrat.className}`}>
                        <Image src={teainfo?.image} alt="tea info image" width={400} height={400} className="justify-self-center"/>
                        <Image src={cross} alt="cross" className="w-12 h-auto p-2 justify-self-end z-20 self-end -mt-90 pb-80 hover:cursor-pointer" onClick={isClose}/>
                        <p className={`text-4xl self-start p-5 pb-1 pt-2 font-light ${cormorant.className}`}>{teainfo.name}</p>
                        <p className="text-lg self-start p-5 pt-1 font-light">₹ {teainfo.price}</p>
                        <p className="text-sm p-5 pt-2">{teainfo.description}</p>
                        <button className="bg-orange-950 pt-3 pb-3 pr-5 pl-5 w-50 text-white" onClick={isClose}>ADD TO CART</button>
                    </div>
                )}
            </div>
            <div className="hidden md:block bg-white w-auto h-auto mt-10">
                {teainfo && (
                    <div className="flex flex-row">
                        <Image src={teainfo.image} alt="tea image" width={700} height={700}/>
                        <div className={`flex flex-col w-full p-3 pl-6 pb-10 ${montserrat.className}`}>
                            <Image src={cross} alt="cross" className="w-15 p-3 self-end" onClick={isClose}/>
                            <p className={`${cormorant.className} text-7xl font-light `}>{teainfo.name}</p>
                            <p className="text-xl pt-10 pb-10">₹ {teainfo.price}</p>
                            <p className="pt-10 pb-25 text-lg w-150">{teainfo.description}</p>
                            <button className="bg-orange-950 pt-3 pb-3 pr-5 pl-5 w-150 text-white hover:cursor-pointer hover:bg-orange-800" onClick={isClose}>ADD TO CART</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TeaModal;