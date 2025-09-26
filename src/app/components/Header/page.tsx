"use client";

import {FC, useState} from 'react'
import Image from 'next/image';
import header_image from '@/../public/images/logo-site.png'
import menu from '@/../public/images/menu.png'

const Header : FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <div className='flex justify-evenly p-5 md:hidden'>
            <Image className='w-15 h-20 pl-3 pt-5' src={menu} alt='menu'/>
            <div className='w-25' onClick={() => setOpen(!open)}>
                <Image className='' src={header_image} alt='header_image' />
            </div>
        </div>
    )
}

export default Header;


