"use client";

import {FC, useState} from 'react'
import Image from 'next/image';
import header_image from '@/../public/images/logo-site.png'
import menu from '@/../public/images/menu.png'

const Header : FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <div className='grid grid-cols-3 gap-4 p-5'>
            <Image className='w-13 pl-3 pt-5' src={menu} alt='menu'/>
            <div className='col-span-2 w-30' onClick={() => setOpen(!open)}>
                <Image src={header_image} alt='header_image' />
            </div>
            {open && 
                (<div>
                    <a href="">SHOP</a>
                    <a href="">INSPIRATION</a>
                    <a href="">CONTACT</a>
                    <a href="">SEARCH</a>
                    <a href="">ACCOUNT</a>
                    <a href="">CART</a>
                </div>) }
        </div>
    )
}

export default Header;


