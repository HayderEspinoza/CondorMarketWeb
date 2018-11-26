export const config = {
    api: 'http://localhost:3000/api',
    name: 'Condor Market',
}

export const REGEX = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    number: /^[0-9]+$/,
    string_number: /[.,+?^${}()|[\]\\a-zA-Z& )]/g,
}