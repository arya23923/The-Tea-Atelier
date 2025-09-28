"use client"

import {FC, useState, useEffect} from "react"
import Image from "next/image"
import shop from "@/../public/images/shop-page.jpg"

import { Cormorant } from "next/font/google";
import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-cormorant", 
});

interface Tea {
    id: number;
    name: string;
    price: number;
    image: string
}

const Shop : FC = () => {
    const [teas, setTea] = useState<Tea[]>([]);
    const [load, setLoad] = useState<boolean>(true);

    useEffect(() => {
        const fetchTea = async () => {
            try {
                const res = await fetch("/api/tea");
                const data : Tea[] = await res.json();
                setTea(data);
            } catch(error) {
                console.error("could not fetch tea : ",error);
            } finally {
                setLoad(false);
            }
        }
        fetchTea();
    }, [])

    if (load) return <p>Loading teas...</p>;

    return(
        <div>
            <Image src={shop} alt="shop-page image" className="w-screen z-0" />
            <p className={`z-20 -mt-17 p-5 text-2xl md:text-6xl md:-mt-40 md:ml-10 ${cormorant.className}`}>Browse our blends</p>
            <div className="grid grid-cols-1 md:grid-cols-4 p-5 md:pt-20 justify-center items-center md:mt-20">
                {teas.map((tea) => (
                    <a href="#" key={tea.id} className={`p-5 relative flex flex-col justify-center items-center ${montserrat.className}`}>
                        <Image className="" height={300} width={300} src={tea.image} alt={tea.name} />
                        <p className="text-xl p-4">{tea.name}</p>
                        <p className="text-lg pb-10">For ₹ {tea.price}</p>
                    </a>
                ))}
            </div>
                
        </div>
    )
}

export default Shop;