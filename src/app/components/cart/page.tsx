"use client"

import {FC, useState} from "react"
import Image from "next/image"
import cartCover from '@/../public/images/cart-page.jpg'

import { Cormorant } from "next/font/google";
import { Montserrat } from 'next/font/google'

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
    id: number,
    name: string,
    price: number,
    image: string,
    description : string
}

interface teaArr {
    arr : Tea[];
}

const Cart: FC<teaArr> = ({arr}) => {
    return(
        <div className={`${montserrat.className}`}>
            <Image src={cartCover} alt="cart cover" className=""/>
            <p className={`p-5 text-2xl -mt-15 ${cormorant.className}`}>Cart</p>
        </div>
    )
}

export default Cart;