"use client"

import {FC, useState, useEffect} from "react"
import Image from "next/image"
import shop from "@/../public/images/shop-page.jpg"

interface Tea {
    id: number;
    name: string;
    price: number;
    image: string
}

const Shop : FC = () => {
    const [tea, setTea] = useState<Tea[]>([]);
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
            <p className="z-20 -mt-15 p-5">Browse our blends</p>
        </div>
    )
}

export default Shop;