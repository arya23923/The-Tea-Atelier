import{FC, useEffect, useState} from "react"

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

        const matchedTeas = tea.filter((t) =>
            t.name.toLowerCase().includes(name_match.toLowerCase()) 
        );

        setSorted(matchedTeas);
    }

    return(
        <div className= {`transition-all h-screen bg-gray-700 ${isOpen ? "block translate-y-0" : "hidden -translate-y-full"} `}>
            <p>Hello</p>
        </div>
    )
}

export default SearchComp;