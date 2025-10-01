"use client"

import { FC, useState } from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Image from "next/image";
import cross from '@/../public/images/cross.png'

interface prop{
    isOpen : boolean;
    onClose : () => void;
    onApply : (min : number, max : number) => void;
}

const Filter:FC<prop> = ({isOpen, onClose, onApply}) => {
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(150);

    const apply = () => {
        onApply(min, max)
    };

    return(
       <div className={`fixed inset-0 transition-all duration-300 z-50 w-70 bg-white p-5 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div onClick={onClose}><Image src={cross} alt="cross" className="w-10 h-auto justify-self-end"/></div>
       </div>
    )
}

export default Filter;