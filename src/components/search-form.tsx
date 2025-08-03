import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const query = e.currentTarget.search.value
        navigate(`/search?query=${query}`)
    }

    return (
        <form onSubmit={handleSubmit} className="w-full h-max flex gap-4 pl-4 border border-white rounded-full overflow-hidden">
            <button type="submit">
                <IoSearchOutline className="text-2xl font-bold cursor-pointer dark:text-slate-100"/>            
            </button>
            <input type="text" name="search" placeholder="¿Qué peli buscas?" className="w-full h-full px-2 text-xl py-1 bg-transparent border-none outline-none placeholder:text-white text-md focus:outline-none focus:bg-transparent autofill:bg-transparent"/>
        </form>
    )
}