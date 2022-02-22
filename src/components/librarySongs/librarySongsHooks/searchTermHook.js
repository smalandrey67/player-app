import { useState } from 'react'

export const useSearchTermHook = () => {
    const [term, setTerm] = useState('')

    const handlerTermChange = (e) => setTerm(e.target.value)

    return { term, setTerm, handlerTermChange } 
}
