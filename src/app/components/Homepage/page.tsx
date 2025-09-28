"use client"

import { FC, useState } from "react"
import homepage_image from '@/../public/images/home-page.jpg'

import { Inria_Serif } from 'next/font/google'

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // choose available weights
  style: ['normal', 'italic'],   // optional
});

const Home : FC = () => {
    return(
        <div className={`bg-[url(/images/home-page.jpg)] bg-cover md:bg-cover w-screen h-screen ${inriaSerif.className}`}>
            <div className="absolute inset-0 bg-white/20 z-0"></div>
            <p className='relative z-10 text-black flex justify-center items-center w-100 text-xl p-5 pt-25 md:text-2xl md:w-4xl md:h-100 md:ml-20 md:pt-70'>The Tea Atelier brings you handcrafted blends made with love from the lush tea gardens of of various parts of India. 
                Experience the richness and purity of India's finest, straight from nature to your cup.</p>
            <button className="relative z-10 flex justify-center bg-[#5A4D5D] text-white pt-3 pr-5 pl-5 pb-3 ml-5 rounded-lg">EXPLORE</button>
        </div>
    )
}

export default Home;