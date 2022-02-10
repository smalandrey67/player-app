import { useState, useRef } from 'react'

const SearchPanelLogic = () => {
    const [searchPanel, setSearchPanel] = useState(false)

    const searchPanelRef = useRef()

    if(searchPanel){
        searchPanelRef.current.focus()
    } 

    const panelHandler = () => setSearchPanel(prev => !prev)

    return { searchPanel, setSearchPanel, panelHandler, searchPanelRef}
}

export { SearchPanelLogic }