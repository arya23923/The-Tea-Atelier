import {FC} from 'react'
import Image from 'next/image';
import header_image from '@/../public/images/logo-site.png'
import menu from '@/../public/images/menu.png'

const Header : FC = () => {
    return(
        <div className='flex justify-center p-5'>
            <Image src={menu} alt='menu' className='justify-self-start w-10 h-10 '/>
            <Image className='p-1 w-25 h-auto justify-self-center md:w-40' src={header_image} alt='header_image' />
        </div>
    )
}

export default Header;


{/* <div className='flex justify-between p-3 text-xs min-w-80 items-center md:justify-around md:p-5 md:text-sm'>
                <a className='hover:underline p-5'>SHOP</a>
                <a className='hover:underline p-5'>INSPIRATION</a>
                <a className='hover:underline p-5'>CONTACT</a>
                <a className='hover:underline'><Image className='p-1 w-100 h-auto md:w-40' src={header_image} alt='header_image' /></a>
                <a className='hover:underline p-5'>SEARCH</a>
                <a className='hover:underline p-5'>ACCOUNT</a>
                <a className='hover:underline p-5'>CART</a>
            </div> */}
