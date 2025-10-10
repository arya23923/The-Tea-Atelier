"use client";

import {FC, useEffect, useState} from 'react'
import Image from 'next/image';
import header_image from '@/../public/images/logo-site.png'
import menu from '@/../public/images/menu.png'
import cart from '@/../public/images/shop.png'
import search_icon from '@/../public/images/search.png'
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { getUser, logout } from "@/lib/auth";
import {useRouter} from 'next/navigation';

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import SearchComp from './searchComp';

import { Montserrat } from 'next/font/google'
import Link from 'next/link';
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

interface User {
  name?: string;
  email?: string;
}

const Header : FC = () => {
    const countState = useSelector((state: RootState) => state.counter.value);
    const [open, setOpen] = useState<boolean>(false);
    const [logo, setLogo] = useState("/images/inverted-logo.png");
    const [search, setSearch] = useState("/images/invert-search.png");
    const [scroll, setScroll] = useState<boolean>(false);
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const hydrated = useIsHydrated();
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const [dropdown, setDropdown] = useState<boolean>(false);

    useEffect(() => {
        setUser(getUser());
    }, []);

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

    const handleLogin = () => {
        router.push('/login')
    }

    const handleSign = () => {
        router.push('/sign')
    }

     const handleLogout = () => {
        logout(); // remove from localStorage
        setUser(null);
    };


    return(
        <header>
            <div className={`flex justify-start p-5 md:hidden ${montserrat.className} bg-white z-40 pl-0`}>
                <div className={`p-3 transition-all duration-300 ${open ? 'w-60 border-r border-r-gray-400 h-screen fixed bg-white z-50' : 'w-30'}`}>
                    <Image className='w-13 h-auto p-2 ml-8 pt-8' src={menu} alt='menu' onClick={() => setOpen(!open)}/>
                    {open && (<div className='flex flex-col justify-around pl-3 h-100 text-sm hover:underline'>
                        <Link href='/components/shop'><p>SHOP</p></Link>
                        <p>INSPIRATION</p>
                        <p>CONTACT</p>
                        {user ? (
                            <button className='justify-self-center text-white bg-amber-900 pt-3 pb-3 pr-5 pl-5 w-full' onClick={handleLogout}>Log out</button>
                        ) : (
                            <div className='justify-between h-30'>
                                <button className='justify-self-center text-white bg-amber-900 pt-3 pb-3 pr-5 pl-5 w-full' onClick={handleLogin}>LOG IN</button>
                                <p className='pt-5' onClick={handleSign}>Not a user ? create account</p>
                            </div>
                        )}
                    </div>)}
                </div>
                <Link href='/components/Homepage'><Image className={`w-25 ml-8 shrink-0`} src={header_image} alt='header_image' /></Link>
                <Link href='/components/cart' className='inline'><Image src={cart} alt='cart image' className='w-15 h-8 self-center pr-3 ml-5 pl-3 mt-10' /></Link>
                <p className='mt-12 pr-3'>({hydrated ? countState : 0})</p>
                <a onClick={() => setSearchOpen(true)}><Image src={search_icon} className=' inline w-13 h-auto self-center p-2 pr-3 pl-3 mt-10' alt='search'/></a>
                <SearchComp isOpen={searchOpen} isClose={() => setSearchOpen(false)}/>
            </div>
            <div className={`hidden md:flex justify-around items-center p-3 text-white backdrop-blur-xl fixed w-screen z-40 group hover:bg-white ${scroll ? "bg-white" : "backdrop-blur-xl"}`} onMouseOver={() => {setLogo("/images/logo-site.png"); setSearch("/images/search.png")}} onMouseOut={() => {
                if(scroll){
                    setLogo("/images/logo-site.png"); setSearch("/images/search.png"); 
                } else {
                    setLogo("/images/inverted-logo.png"); setSearch("/images/invert-search.png");
                }
            }}>
                <Link href='/components/shop'>
                    <p className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black`}>SHOP</p>
                </Link>
                <p className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black`}>INSPIRATION</p>
                <p className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black`}>CONTACT</p>
                <Link href="/components/Homepage" className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"}`}><Image src={logo} width={170} height={150} alt='header_image'/></Link>
                <div className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} flex group-hover:text-black`} onClick={() => setSearchOpen(true)}>
                    <p>SEARCH</p>
                    <Image src={search} width={10} height={10} className='w-7 p-1.5 pt-1' alt='search'/>
                </div>
                <p className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black flex`} onClick={() => setDropdown(!dropdown)}>ACCOUNT</p>    
                <Link href='/components/cart' className={`relative after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-0 after:h-[2px] after:bg-black
                    after:transition-all after:duration-300 hover:after:w-full ${scroll ? "text-black" : "text-white"} group-hover:text-black flex`}>
                    <p>CART</p>
                    <p>({hydrated ? countState : 0})</p>
                </Link>
                {hydrated && dropdown && (
                    <div className='absolute mt-50 bg-white text-black p-5 justify-self-end h-30 justify-between -mr-280 border border-gray-700'>
                        {user ? (
                            <button className='justify-self-center text-white bg-amber-900 pt-3 pb-3 pr-5 pl-5 w-full' onClick={handleLogout}>LOG OUT</button>
                        ) : (
                            <div>
                                <button className='justify-self-center text-white bg-amber-900 pt-3 pb-3 pr-5 pl-5 w-full' onClick={handleLogin}>LOG IN</button>
                                <p onClick={handleSign} className='hover:cursor-pointer pt-3'>Not a user ? create an account</p>
                            </div>
                        )}
                    </div>
                ) }
                <SearchComp isOpen={searchOpen} isClose={() => setSearchOpen(false)}/>
            </div>
        </header>
    )
}

export default Header;


