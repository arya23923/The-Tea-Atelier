"use client"

import {FC, useState, useEffect} from "react"
import Image from "next/image"
import shop from "@/../public/images/shop-page.jpg"
import filter from '@/../public/images/filter.png'
import Filter from "./filter"
import TeaModal from "../reusable/modal"

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
    description: string;
}

const Shop : FC = () => {
    const [teas, setTea] = useState<Tea[]>([]);
    const [load, setLoad] = useState<boolean>(true);
    const [sortedTea, setSortedTea] = useState<Tea[]>([]);
    const [filterprop, setFilterprop] = useState<boolean>(false);
    const [value, setValue] = useState<string>("A-Z");
    const [modalprop, setModalprop] = useState<boolean>(false);
    const [modalTea, setModaltea] =  useState<Tea | null>(null);

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

    const sortTea = (value : string) => {
        let sorted = [...teas]
        if(value == "A-Z") sorted = (teas.sort((a,b) => a.name > b.name ? 1 : -1))
        else if(value == "Z-A") sorted = (teas.sort((a,b) => a.name > b.name ? -1 : 1))
        else if(value == "low") sorted = (teas.sort((a,b) => a.price - b.price))
        else if(value == "high") sorted = (teas.sort((a,b) => b.price - a.price))
        setSortedTea(sorted)
    }

    return(
        <div>
            <Image src={shop} alt="shop-page image" className="w-screen z-0" />
            <p className={`z-20 -mt-17 p-5 text-2xl md:text-6xl md:-mt-40 md:ml-10 ${cormorant.className}`}>Browse our blends</p>
            <div className={`flex justify-between md:w-screen ${montserrat.className}`}>
                <div className={`flex p-5 ml-5 md:ml-10 md:mt-20 hover:cursor-pointer `}  onClick={() => setFilterprop(true)}>
                    <Image src={filter} className="w-10 h-10 p-2 -ml-7 md:ml-0 md:w-10" alt="filter" />
                    <p className={`text-sm p-2 ${montserrat.className}`}>Filter</p>
                </div>
                <div className="flex text-sm p-5 pl-7 mt-2">
                    <label className="w-14 md:mt-20">Sort by:</label>
                    <select name="sort" id="sort" className="-mt-3 mr-2 p-2 md:mt-17 md:mr-15" value={value} onChange={(e) => {setValue(e.target.value); sortTea(e.target.value)}}>
                        <option value="A-Z">Alphabetically, A-Z</option>
                        <option value="Z-A">Alphabetically, Z-A</option>
                        <option value="low">Price, low to high</option>
                        <option value="high">rice, high to low</option>
                    </select>
                </div>
            </div>
            <Filter isOpen={filterprop} onClose={() => setFilterprop(false)} onApply={filterTea} />
            <div className="grid grid-cols-1 md:grid-cols-4 md:ml-10 p-5 md:pt-20 justify-center items-center md:-mt-15 pl-0">
                {sortedTea.map((tea) => (
                    <a href="#" key={tea.id} className={`p-5 relative flex flex-col justify-center items-center ${montserrat.className}`} onClick={() => {setModaltea(tea); setModalprop(true)}}>
                        <Image className="" height={400} width={400} src={tea.image} alt={tea.name} />
                        <p className="text-xl p-4">{tea.name}</p>
                        <p className="text-lg pb-10">For ₹ {tea.price}</p>
                    </a>
                ))}
            </div>
            <TeaModal isOpen={modalprop} isClose={() => setModalprop(false)} teainfo={modalTea} />
        </div>
    )
}

export default Shop;