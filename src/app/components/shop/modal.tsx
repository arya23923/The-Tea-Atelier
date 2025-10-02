import { FC, useState } from "react";
import { Interface } from "readline";

interface tea {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

interface modal{
    isOpen : boolean;
    isClose : () => void;
    tea : Interface
}

const TeaModal:FC<modal> = ({isOpen, isClose, tea}) => {
    return(
        <div className={`${isOpen ? "block" : "hidden"}`}>
            <p>Hello</p>
        </div>
    )
}

export default TeaModal;