import { FC, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon, IoSearchOutline } from "react-icons/io5";
import { FlagSelect } from "./flagSelect";
import { useTranslation } from "react-i18next";

const AppBar: FC = () => {
    
    const modalRef = useRef<HTMLDivElement>(null);
    const { t: translations } = useTranslation()
    
    const [darkTheme, setDarkTheme] = useState<boolean>()
    const element = document.documentElement

    const [scrolling, setScrolling] = useState(false)
    const [openProfileDropdown, setOpenProfileDropdown] = useState(false)

    const changeTheme = () => {
        setDarkTheme(!darkTheme)
        localStorage.setItem('theme', !darkTheme ? 'dark' : 'light')
        if (!darkTheme) {
            element.classList.add('dark')
        } else {
            element.classList.remove('dark')
        }
    }

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node
        if (modalRef.current && !modalRef.current.contains(target) && target.nodeName != 'SPAN') {
            setOpenProfileDropdown(false);
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true)
        } else {
            setScrolling(false)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') == 'dark') {
            setDarkTheme(true)
            element.classList.add('dark')
        }
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('scroll', handleScroll)
        }
        
    }, [element.classList])

    return (
        <div className={`fixed w-full top-0 flex justify-between items-center px-4 md:px-16 py-2 md:py-4 z-50 ${scrolling ? 'backdrop-blur-md' : ''}`}>
            <div className="flex items-center gap-8">
                <Link to={'/'} className="text-2xl md:text-3xl font-bold">LOGO</Link>
                <div className="flex gap-6 text-xl font-bold">
                    <Link to={'/'} className="first-letter:uppercase">{translations('general.home')}</Link>
                    <Link to={'/movies'} className="first-letter:uppercase">{translations('general.movies')}</Link>
                    <Link to={'/series'} className="first-letter:uppercase">{translations('general.series')}</Link>
                </div>
            </div>
            <div className="flex items-center md:gap-2">
                <div className="flex items-center md:gap-2">
                    <IoSearchOutline className="text-2xl dark:text-slate-100 font-bold cursor-pointer"/>
                    <FlagSelect/>
                    <button onClick={changeTheme} className="p-2 text-center text-2xl font-semibold rounded-full">
                        {darkTheme ? <MdOutlineLightMode className="dark:text-slate-100"/> : <IoMoon />}
                    </button>
                </div>
                {/* Profile */}
                <div className="relative ml-3" id="user-menu-section">
                    <div>
                        <button onClick={() => setOpenProfileDropdown(!openProfileDropdown)} type="button" className="relative flex rounded-full bg-gray-800 text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </button>
                    </div>
                    <div ref={modalRef} hidden={!openProfileDropdown} className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-white dark:bg-neutral-700 dark:border-1 dark:outline-slate-50" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                        <Link to={'/'} className="block px-4 py-2 text-sm text-slate-800 dark:text-white" role="menuitem" id="user-menu-item-0">Your Profile</Link>
                        <Link to={'/'} className="block px-4 py-2 text-sm text-slate-800 dark:text-white" role="menuitem" id="user-menu-item-1">Settings</Link>
                        <Link to={'/'} className="block px-4 py-2 text-sm text-slate-800 dark:text-white" role="menuitem" id="user-menu-item-2">{translations('general.logout')}</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AppBar