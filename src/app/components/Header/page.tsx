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
    const [logo, setLogo] = useState(inverted);
    const [search, setSearch] = useState(invert_search);

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
            <div className="hidden md:flex justify-around items-center p-5 text-white bg-transparent hover:text-black hover:bg-white" onMouseOver={() => {setLogo(header_image); setSearch(search_icon)}} onMouseOut={() => {setLogo(inverted); setSearch(invert_search)}}>
                <a href="#">SHOP</a>
                <a href="#">INSPIRATION</a>
                <a href="#">CONTACT</a>
                <a href="#"><Image className='' src={logo} alt='header_image'/></a>
                <a href="#" className='flex'>
                    <p className=''>SEARCH</p>
                    <Image src={search} className='w-7 p-1.5 pt-1' alt='search'/>
                </a>
                <a href="#">ACCOUNT</a>
                <a href="#">CART</a>
            </div>
        </header>
    )
}

export default Header;


