"use client"

import { FC, useState } from "react";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Image from "next/image";
import cross from '@/../public/images/cross.png'

import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

interface prop{
    isOpen : boolean;
    onClose : () => void;
    onApply : (min : number, max : number) => void;
}

const Filter:FC<prop> = ({isOpen, onClose, onApply}) => {
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(150);

    const apply = () => {
        onApply(min, max);
        onClose();
    };

    return(
       <div className={`fixed inset-y-0 left-0 bottom-0 mt-40 transition-all duration-300 z-10 w-90 md:w-170 text-black bg-amber-100 p-5 ${montserrat.className} ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div onClick={onClose}><Image src={cross} alt="cross" className="w-10 h-auto justify-self-end"/></div>
            <div className="p-5 justify-center">
                <p className="p-5 text-xl">Price</p>
                <RangeSlider
                    className="single-thumb"
                    defaultValue={[0, 150]}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
                    min={0}
                    max={150}
                />
                <div className="flex flex-col p-5 pb-15 pt-10 md:flex-row">
                    <label className="text-lg">₹ <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} className="border border-black w-50 pr-5 pl-5 pt-3 pb-3 text-lg"/></label>
                    <p className="text-2xl p-5">-</p>
                    <label className="text-lg">₹ <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} className="border border-black w-50 pr-5 pl-5 pt-3 pb-3 text-lg"/></label>   
                </div>
                <button className="flex justify-center p-5 border ml-10 w-50 text-white border-amber-900 bg-amber-900" onClick={apply}>Apply</button>
            </div>
       </div>
    )
}

export default Filter;