"use client";

import {FC, useState} from 'react'
import Image from 'next/image';
import header_image from '@/../public/images/logo-site.png'
import menu from '@/../public/images/menu.png'
import search_icon from '@/../public/images/search.png'
import inverted from '@/../public/images/inverted-logo.png'
import invert_search from '@/../public/images/invert-search.png'

import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const Header : FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [logo, setLogo] = useState("/images/inverted-logo.png");
    const [search, setSearch] = useState("/images/invert-search.png");

    return(
        <header>
            <div className={`flex justify-start p-5 md:hidden ${montserrat.className}`}>
                <div className={`p-3 transition-all duration-300 ${open ? 'w-40 border-r border-r-gray-400 h-screen' : 'w-30'}`}>
                    <Image className='w-13 h-auto pl-3 pt-5' src={menu} alt='menu' onClick={() => setOpen(!open)}/>
                    {open && (<div className='flex flex-col justify-around h-100 text-sm hover:underline'>
                        <a>SHOP</a>
                        <a>INSPIRATION</a>
                        <a>CONTACT</a>
                        <a>ACCOUNT</a>
                        <a>CART</a>
                    </div>)}
                </div>
                <Image className={`w-30 ml-5 ${open ? 'w-30 h-30' : 'w-30'}`} src={header_image} alt='header_image' />
            </div>
            <div className="hidden md:flex justify-around items-center p-5 text-white bg-opacity-80 hover:text-black hover:bg-white fixed w-screen" onMouseOver={() => {setLogo("/images/logo-site.png"); setSearch("/images/search.png")}} onMouseOut={() => {setLogo("/images/inverted-logo.png"); setSearch("/images/invert-search.png")}}>
                <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full">SHOP</a>
                <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full">INSPIRATION</a>
                <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full">CONTACT</a>
                <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full"><Image src={logo} width={170} height={150} alt='header_image'/></a>
                <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full flex">
                    <p className=''>SEARCH</p>
                    <Image src={search} width={10} height={10} className='w-7 p-1.5 pt-1' alt='search'/>
                </a>
                <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full">ACCOUNT</a>
                <a href="#" className="relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full">CART</a>
            </div>
        </header>
    )
}

export default Header;


