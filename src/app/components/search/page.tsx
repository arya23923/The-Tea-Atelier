import{FC, useEffect, useState} from "react"

import Image from "next/image";
import cross from '@/../public/images/cross.png'
import logo from '@/../public/images/logo-site.png'

import { Montserrat } from 'next/font/google'
 
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

interface Tea{
    id: number,
    name: string,
    price: number,
    image: string,
    description : string;
}

interface SearchButton {
    isOpen : boolean,
    isClose : () => void;
}

const SearchComp:FC<SearchButton> = ({isOpen, isClose}) => {
    const [tea, setTea] = useState<Tea[]>([]);
    const [load, setLoad] = useState<boolean>(true);
    const [sorted, setSorted] = useState<Tea[]>([]);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        const fetchMatch = async () => {
            try{
                const res = await fetch('/api/tea');
                const data:Tea [] = await res.json();
                setTea(data);
            } catch(error) {
                console.error("could not fetch teas : ",error);
            } finally {
                setLoad(false);
            }
        }
        fetchMatch();
    }, [])

    // if(load) return(<>Loading....</>)

    const match = (name_match : string) => {
        if (!tea) return;

         if (query === "") {
            setSorted([]);  // or set back to tea if you want full list
            return;
        }

        const matchedTeas = tea.filter((t) =>
            t.name.toLowerCase().includes(name_match.toLowerCase()) 
        );

        setSorted(matchedTeas);
    }

    return(
        <div className= {`z-10 fixed inset-0  transition-all duration-500 w-full h-screen bg-gray-100 overflow-scroll ${isOpen ? "translate-y-0" : "-translate-y-full"} `}>
            <Image src={logo} alt="logo" className="justify-self-center-safe w-25 h-auto self-center-safe"/>
            <Image src={cross} alt="cross" className="justify-self-end w-8 h-8 mr-10" onClick={isClose}/>
            <div className="flex justify-between p-5 mr-5">
                <input type="text" className="border border-gray-700 p-5 w-60" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {if(e.key == "Enter") {setQuery(query); match(query)}}}/>
                <button className="bg-amber-900 text-white w-25 text-sm" onClick={() => match(query)}>SEARCH</button>
            </div>
            <div className="grid grid-cols-1">
                {sorted.map((sort) => (
                    <div className={`p-5 relative flex flex-col justify-center items-center ${montserrat.className} md:grid-cols-4`} key={sort.id}>
                        <Image className="w-70 h-auto" height={400} width={400} src={sort.image} alt={sort.name} />
                        <p className="text-xl p-4 md:text-black">{sort.name}</p>
                        <p className="text-lg pb-10 md:text-black">For ₹ {sort.price}</p>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default SearchComp;