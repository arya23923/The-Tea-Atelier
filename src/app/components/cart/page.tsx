"use client"

import {FC} from "react"
import Image from "next/image"
import cartCover from '@/../public/images/cart-page.jpg'
import dustbin from '@/../public/images/dustbin.png'
import Link from "next/link"

import { Cormorant } from "next/font/google";
import { Montserrat } from 'next/font/google'

import { removeItem, updateQuantity } from "@/lib/features/CounterState/CounterSlice"
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";

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
  const Cart = useSelector((state: RootState) => state.counter.cart);
  const dispatch = useDispatch();

  const total = Cart?.reduce((sum, tea) => sum + tea.price * tea.quantity, 0) ?? 0;

    return(
        <div className={`${montserrat.className}`}>
            <Image src={cartCover} alt="cart cover" className=""/>
            <p className={`p-5 text-2xl md:text-6xl -mt-15 md:-mt-35 md:pl-28 ${cormorant.className}`}>Cart</p>
            <div className="md:hidden p-3">
                {Cart.length > 0 && Cart.map((cart) => (
                  <div key={cart.id} className="border-b-1 p-5 ">
                    <div className="flex justify-evenly">
                      <Image src={cart.image} alt="tea image" width={300} height={300} className="w-30 pl-0"/>
                      <div className={`p-5 self-center ${cormorant.className} text-2xl`}>{cart.name}</div>
                      <div className={`p-1 self-center w-full ${montserrat.className}`}>₹ {cart.price}</div>
                      <div className={`p-0 self-center w-full ${montserrat.className}`}>₹ {cart.price * cart.quantity}</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex border border-black justify-evenly w-35 mt-5 p-3 ml-0 self-center">
                          <div className="hover:cursor-pointer self-center" onClick={() => dispatch(updateQuantity({tea: cart, quantity : 1}))}>+</div>
                          <div className="self-center">{cart.quantity}</div>
                          <div className="hover:cursor-pointer self-center" onClick={() => dispatch(updateQuantity({tea: cart, quantity : -1}))}>-</div>
                      </div>
                      <Image src={dustbin} alt="dustbin" height={200} width={200} className="w-20 h-20 p-5 self-center mt-5 hover:cursor-pointer" onClick={() => dispatch(removeItem({tea : cart}))}/>
                    </div>
                  </div>
                ))}
            </div>
            <div className="hidden md:block md:mt-20">
              <div className={`flex justify-evenly border border-black p-5 ${montserrat.className}`}>
                <p className="">PRODUCT</p>
                <p className="ml-35">PRICE</p>
                <p className="ml-0">QUANTITY</p>
                <p className="">TOTAL</p>
                <p className=""></p>
              </div>
              {Cart.length > 0 && Cart.map((cart) => (
                <div className={`flex justify-evenly p-5 border-b border-black ${montserrat.className}`} key={cart.id}>
                  <div className="flex justify-self-start">
                    <Image src={cart.image} alt="image" height={200} width={200}/>
                    <p className={`${cormorant.className} md:text-2xl p-5 self-center w-20`}>{cart.name}</p>
                  </div>
                  <p className="self-center justify-self-center">₹ {cart.price}</p>
                  <div className="flex border border-black justify-evenly w-35 mt-5 p-3 self-center">
                        <div className="hover:cursor-pointer self-center" onClick={() => dispatch(updateQuantity({tea: cart, quantity : 1}))}>+</div>
                        <div className="self-center">{cart.quantity}</div>
                        <div className="hover:cursor-pointer self-center" onClick={() => dispatch(updateQuantity({tea: cart, quantity : -1}))}>-</div>
                    </div>
                  <p className="justify-self-center self-center">₹ {cart.price * cart.quantity}</p>
                  <Image src={dustbin} alt="dustbin" height={200} width={200} className="w-20 h-20 p-5 self-center mt-5 hover:cursor-pointer" onClick={() => dispatch(removeItem({tea : cart}))}/>
                </div>
              ))}
            </div>
            <p className="flex justify-center p-5 w-full font-bold">SUBTOTAL : ₹ {total}</p>
            <button className={`bg-red-900 content-center pt-3 pb-3 pr-5 pl-5 text-white w-80 ml-13 mb-10 hover:bg-red-800 md:ml-150 md:mt-10 ${montserrat.className}`}>CHECK OUT</button>
            <Link href='/components/shop' className={`${cormorant.className} text-2xl content-center underline p-5 ml-25`}>Continue shopping</Link>
        </div>
    )
}

export default Cart;