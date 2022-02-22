import { useState } from 'react'

export const useSortPanelHook = () => {
    const [sortPanel, setSortPanel] = useState(false)

    const sortHandler = () => setSortPanel(prev => !prev) 

    return { sortPanel, sortHandler }
} 