"use client";

import {FC, useEffect, useState} from 'react'
import Image from 'next/image';
import header_image from '@/../public/images/logo-site.png'
import menu from '@/../public/images/menu.png'
import cart from '@/../public/images/shop.png'
import search_icon from '@/../public/images/search.png'

import { Montserrat } from 'next/font/google'
import Link from 'next/link';
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const Header : FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [logo, setLogo] = useState("/images/inverted-logo.png");
    const [search, setSearch] = useState("/images/invert-search.png");
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        const handlescroll = () => {
            if(window.scrollY > 50){
                setScroll(true);
                setLogo("/images/logo-site.png");
                setSearch("/images/search.png");
            } else {
                setScroll(false);
                setLogo("/images/inverted-logo.png"); 
                setSearch("/images/invert-search.png");
            }
        };
        window.addEventListener("scroll", handlescroll);
        return () => window.removeEventListener("scroll", handlescroll);
    }, []);

    return(
        <header className='relative z-40'>
            <div className={`flex justify-start p-5 md:hidden ${montserrat.className} z-20`}>
                <div className={`p-3 transition-all duration-300 ${open ? 'w-40 border-r border-r-gray-400 h-screen' : 'w-30'}`}>
                    <Image className='w-13 h-auto pl-3 pt-5' src={menu} alt='menu' onClick={() => setOpen(!open)}/>
                    {open && (<div className='flex flex-col justify-around h-100 text-sm hover:underline'>
                        <a>SHOP</a>
                        <a>INSPIRATION</a>
                        <a>CONTACT</a>
                        <a>ACCOUNT</a>
                    </div>)}
                </div>
                <Link href='/components/Homepage'><Image className={`w-30 ml-3 ${open ? 'w-30 h-30' : 'w-30'}`} src={header_image} alt='header_image' /></Link>
                <a href="#" className='inline'><Image src={cart} alt='cart image' className='w-15 h-8 self-center pr-3 ml-5 pl-3 mt-10' /></a>
                <a href="#" className='inline'><Image src={search_icon} className='w-12 h-10 self-center p-2 pr-3 pl-3 mt-10' alt='search'/></a>
            </div>
            <div className={`hidden md:flex justify-around items-center p-3 text-white backdrop-blur-xl fixed w-screen z-40 group hover:bg-white ${scroll ? "bg-white" : "backdrop-blur-xl"}`} onMouseOver={() => {setLogo("/images/logo-site.png"); setSearch("/images/search.png")}} onMouseOut={() => {
                if(scroll){
                    setLogo("/images/logo-site.png"); setSearch("/images/search.png"); 
                } else {
                    setLogo("/images/inverted-logo.png"); setSearch("/images/invert-search.png");
                }
            }}>
                <a href="#" className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black`}>SHOP</a>
                <a href="#" className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black`}>INSPIRATION</a>
                <a href="#" className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black`}>CONTACT</a>
                <Link href="/components/Homepage" className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"}`}><Image src={logo} width={170} height={150} alt='header_image'/></Link>
                <a href="#" className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} flex group-hover:text-black`}>
                    <p className=''>SEARCH</p>
                    <Image src={search} width={10} height={10} className='w-7 p-1.5 pt-1' alt='search'/>
                </a>
                <a href="#" className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black`}>ACCOUNT</a>
                <a href="#" className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black`}>CART</a>
            </div>
        </header>
    )
}

export default Header;


