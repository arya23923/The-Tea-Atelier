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
        <div className={`fixed inset-0 flex items-center justify-center max-h-screen backdrop-blur-sm bg-gray-20 ${isOpen ? "" : "hidden"}`}>
            <div className="bg-white w-90 h-170 mt-22 overflow-y-scroll -ml-5 md:mt-50">
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
        </div>
    )
}

export default TeaModal;