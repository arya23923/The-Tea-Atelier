"use client"

import {FC, useState} from "react"
import Image from "next/image"
import cartCover from '@/../public/images/cart-page.jpg'

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
        <>
            <Image src={cartCover} alt="cart cover" className="w-full"/>
        </>
    )
}

export default Cart;