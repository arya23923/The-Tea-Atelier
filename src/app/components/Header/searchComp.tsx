import{FC, useEffect, useState} from "react"

import Image from "next/image";
import cross from '@/../public/images/cross.png'
import logo from '@/../public/images/logo-site.png'
import TeaModal from "../reusable/modal";

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
    const [modal, setModal] = useState<boolean>(false);
    const [propTea, setPropTea] = useState<Tea | null>(null);

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
        <div className= {`z-10 fixed inset-0 transition-all duration-500 w-full h-screen md:text-black bg-gray-100 overflow-scroll ${isOpen ? "translate-y-0" : "-translate-y-full"} `}>
            <Image src={logo} alt="logo" className="justify-self-center-safe w-25 h-auto self-center-safe mt-5 md:w-50"/>
            <Image src={cross} alt="cross" className="justify-self-end w-8 h-8 mr-10" onClick={isClose}/>
            <div className="flex justify-between p-5 mr-5 md:justify-center md:space-x-10">
                <input type="text" placeholder="What are you looking for" className="border border-gray-700 p-5 w-60 md:w-250" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {if(e.key == "Enter") {setQuery(query); match(query)}}}/>
                <button className="bg-amber-900 text-white w-25 text-sm md:w-30 hover:bg-amber-700" onClick={() => match(query)}>SEARCH</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                {query.trim() !== "" && sorted.length === 0 ? (
                    <p>No matches found</p>
                    ) : (
                    sorted.map((sort) => (
                        <a
                        className={`p-5 relative ml-10 justify-center items-center ${montserrat.className}`}
                        key={sort.id} onClick={() => {setModal(true); setPropTea(sort)}}
                        >
                            <Image
                            className="w-70 h-auto md:w-full"
                            height={400}
                            width={400}
                            src={sort.image}
                            alt={sort.name}
                            />
                            <p className="text-xl p-4 justify-self-center -ml-10">{sort.name}</p>
                            <p className="text-lg pb-10 justify-self-center -ml-10">For ₹ {sort.price}</p>
                        </a>
                    ))
                 )}
            </div>
            <TeaModal isOpen={modal} isClose={() => setModal(false)} teainfo={propTea} />
        </div>
        
    )
}

export default SearchComp;



