import { useEffect, useState, useRef } from "react"
import { useTranslation } from "react-i18next"
import { i18next } from '../config/i18next'

import languages, { ILangauges } from '../config/languages'

export const FlagSelect = () => {

    const lng = localStorage.getItem('lng') !== null ? localStorage.getItem('lng') : 'us-US'
    const { t: translations } = useTranslation()
    const modalRef = useRef<HTMLDivElement>(null);

    const [openDropdown, setOpenDropdown] = useState(false)
    const [selectedItem, setSelectedItem] = useState<ILangauges>()

    function changeLanguage(item: ILangauges) {
        i18next.changeLanguage(item.value)
        setSelectedItem(item)
        setOpenDropdown(false)
        localStorage.setItem('lng', item.value)
    }

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node
        if (modalRef.current && !modalRef.current.contains(target) && !['IMG', 'BUTTON'].includes(target.nodeName)) {
            setOpenDropdown(false);
        }
    };

    useEffect(() => {
        setSelectedItem(languages.find(({ value }) => value == lng))
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [lng])

    return (
        <div className="relative w-max">
            <button onClick={() => setOpenDropdown(!openDropdown)} type="button" className="relative p-2 text-center text-2xl font-semibold text-gray-600 rounded-full">
                <img src={selectedItem?.flag} alt="" className="h-7 w-7" />
            </button>

            {
                openDropdown &&
                <div ref={modalRef} className="absolute z-10 mt-1 max-h-56 min-w-max right-0 overflow-auto rounded-md bg-white dark:bg-neutral-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                    {
                        languages.map((item) => (
                            <div onClick={() => changeLanguage(item)} key={item.value} className="text-gray-900 relative cursor-pointer select-none py-2 pl-3 pr-9 gap-4">
                                <div className="flex items-center">
                                    <img src={item.flag} alt="" className="h-5 w-5 flex-shrink-0" />
                                    <span className="font-normal ml-3 block truncate dark:text-white">{translations(`translate.${item.lang}`)}</span>
                                </div>

                                {item.value == selectedItem?.value &&
                                    <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-2">
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                }
                            </div>
                        ))
                    }
                </div>
            }
        </div>

    )
}