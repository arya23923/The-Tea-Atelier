import { FC, useState } from "react";
import cross from '@/../public/images/cross.png'
import Image from "next/image";

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
    console.log(teainfo);
    return(
        <div className={`fixed inset-0 flex items-center justify-center max-h-screen backdrop-blur-sm bg-gray-20 ${isOpen ? "" : "hidden"}`}>
            <div className="bg-white w-90 h-150 overflow-y-scroll -ml-5">
                <Image src={cross} alt="cross" className="w-12 h-auto p-2 justify-self-end" onClick={isClose}/>
                <Image src={teainfo?.image} alt="tea info image" width={300} height={300} className="justify-self-center"/>
            </div>
        </div>
    )
}

export default TeaModal;