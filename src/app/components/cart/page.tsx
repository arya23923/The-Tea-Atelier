"use client"

import {FC, useState} from "react"
import Image from "next/image"
import cartCover from '@/../public/images/cart-page.jpg'

import { Cormorant } from "next/font/google";
import { Montserrat } from 'next/font/google'

// Importing the RootState type from the store definition.
import { RootState } from "@/lib/store";
// Importing the useSelector hook from react-redux to access the Redux store's state.
import { useSelector } from "react-redux";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-cormorant", 
});
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});


const Cart: FC = () => {
  const countState = useSelector((state: RootState) => state.counter.value);
  const Cart = useSelector((state: RootState) => state.counter.cart);

  console.log("Cart:", Cart);

    return(
        <div className={`${montserrat.className}`}>
            <Image src={cartCover} alt="cart cover" className=""/>
            <p className={`p-5 text-2xl md:text-6xl -mt-15 md:-mt-35 md:pl-28 ${cormorant.className}`}>Cart</p>
            {Cart.length > 0 && Cart.map((cart) => (
              <div key={cart.id}>{cart.description}</div>
            ))}
        </div>
    )
}

export default Cart;