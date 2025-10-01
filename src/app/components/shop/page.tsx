"use client"

import {FC, useState, useEffect} from "react"
import Image from "next/image"
import shop from "@/../public/images/shop-page.jpg"
import filter from '@/../public/images/filter.png'
import Filter from "./filter"

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
    const [sortedTea, setSortedTea] = useState<Tea[]>([]);
    const [filterprop, setFilterprop] = useState<boolean>(false);

    useEffect(() => {
        const fetchTea = async () => {
            try {
                const res = await fetch("/api/tea");
                const data : Tea[] = await res.json();
                setTea(data);
                setSortedTea(data);
            } catch(error) {
                console.error("could not fetch tea : ",error);
            } finally {
                setLoad(false);
            }
        }
        fetchTea();
    }, [])

    if (load) return <p>Loading teas...</p>;

    const filterTea = (min : number, max : number) => {
        setSortedTea(teas.filter((tea) => tea.price >= min && tea.price <= max));
    }

    return(
        <div>
            <Image src={shop} alt="shop-page image" className="w-screen z-0" />
            <p className={`z-20 -mt-17 p-5 text-2xl md:text-6xl md:-mt-40 md:ml-10 ${cormorant.className}`}>Browse our blends</p>
            <div className="flex p-5 ml-5 md:ml-10 md:mt-20 hover:cursor-pointer"  onClick={() => setFilterprop(true)}>
                <Image src={filter} className="w-10 h-10 p-2 md:w-11" alt="filter" />
                <p className={`text-lg p-2 ${montserrat.className} md:text-lg`}>Filter</p>
            </div>
            <Filter isOpen={filterprop} onClose={() => setFilterprop(false)} onApply={filterTea} />
            <div className="grid grid-cols-1 md:grid-cols-4 p-5 md:pt-20 justify-center items-center md:-mt-15">
                {sortedTea.map((tea) => (
                    <a href="#" key={tea.id} className={`p-5 relative flex flex-col justify-center items-center ${montserrat.className}`}>
                        <Image className="" height={400} width={400} src={tea.image} alt={tea.name} />
                        <p className="text-xl p-4">{tea.name}</p>
                        <p className="text-lg pb-10">For ₹ {tea.price}</p>
                    </a>
                ))}
            </div>
            
        </div>
    )
}

export default Shop;