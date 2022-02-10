import { useState } from 'react'

const SortPanelLogic = () => {
    const [sortPanel, setSortPanel] = useState(false)

    const sortHandler = () => setSortPanel(prev => !prev) 

    return { sortPanel, sortHandler }
} 

export { SortPanelLogic }