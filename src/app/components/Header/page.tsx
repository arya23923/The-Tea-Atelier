import {FC} from 'react'
import Image from 'next/image';
import header_image from '@/../public/images/logo-site.png'
import menu from '@/../public/images/menu.png'

const Header : FC = () => {
    return(
        <div className='grid grid-cols-3 gap-4'>
            <Image src={menu} alt='menu' className='w-20'/>
            <Image className='col-span-2' src={header_image} alt='header_image' />
        </div>
    )
}

export default Header;


{/* <>
            <ul className='flex justify-between p-3 text-xs items-center'>
                <li>SHOP</li>
                <li>INSPIRATION</li>
                <li>CONTACT</li>
                <li><Image className='p-1 w-100 h-auto' src={header_image} alt='header_image' /></li>
                <li>SEARCH</li>
                <li>ACCOUNT</li>
                <li>CART</li>
            </ul>
        </> */}