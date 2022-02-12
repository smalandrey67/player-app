import { useState } from 'react'

const SearchTermLogic = () => {
    const [term, setTerm] = useState('')

    const handlerTermChange = (e) => setTerm(e.target.value)

    return { term, setTerm, handlerTermChange } 
}
export { SearchTermLogic }