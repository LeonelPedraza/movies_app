export interface ILangauges {
    lang: string,
    flag: string,
    value: string
}

const langauges: ILangauges[] = [
    {
        lang: 'eng',
        flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
        value: 'us-US'
    },
    {
        lang: 'es',
        flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg',
        value: 'es-ES'
    }
]

export const system_language = localStorage.getItem('lng') !== null ? localStorage.getItem('lng') : 'us-US'

export default langauges