import { IoSearchOutline } from "react-icons/io5";

export const SearchForm = () => {
    return (
        <form className="flex gap-2 px-4 py-2 border border-white rounded-full">
            <input type="text" placeholder="¿Qué peli buscas?" className="w-full h-full bg-transparent border-none outline-none placeholder:text-white text-md focus:outline-none"/>
            <IoSearchOutline className="text-2xl font-bold cursor-pointer dark:text-slate-100"/>            
        </form>
    )
}