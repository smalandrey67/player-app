import { useState, useRef, useEffect } from 'react'

const SearchPanelLogic = () => {
    const [searchPanel, setSearchPanel] = useState(false)

    const searchPanelRef = useRef()

    useEffect(() => {
        
        if(searchPanel) searchPanelRef.current.focus()
        else searchPanelRef?.current?.blur()

    }, [searchPanel, searchPanelRef])


    const panelHandler = () => setSearchPanel(prev => !prev)
   
    return { searchPanel, setSearchPanel, panelHandler, searchPanelRef }
}

export { SearchPanelLogic }