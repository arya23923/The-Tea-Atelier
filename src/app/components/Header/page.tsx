import {FC} from 'react'
import Image from 'next/image';
import header_image from '@/../public/images/logo-site.png'

const Header : FC = () => {
    return(
        <>
            <ul className='flex justify-between p-3 text-xs items-center'>
                <li>SHOP</li>
                <li>INSPIRATION</li>
                <li>CONTACT</li>
                <li><Image className='p-1 w-100 h-auto' src={header_image} alt='header_image' /></li>
                <li>SEARCH</li>
                <li>ACCOUNT</li>
                <li>CART</li>
            </ul>
        </>
    )
}

export default Header;