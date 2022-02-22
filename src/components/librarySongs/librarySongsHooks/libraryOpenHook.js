import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

export const useLibraryOpenHook = (
    setSearchPanel,
    setTerm,
    searchPanel, 
) => {
   
    const libraryIsOpen = useSelector(state => state.library.libraryIsOpen)
  

    useEffect(() => {
        if(!libraryIsOpen || !searchPanel){
            setTerm('')
            setSearchPanel(false)
        }
    }, [libraryIsOpen, searchPanel])


    return { libraryIsOpen }
}