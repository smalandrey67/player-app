import { useState } from 'react'

//utils
import { sortingSongs } from '../../../utils/sortingSongs'

const SortingObjectLogic = () => {
    const [sorting, setSorting] = useState({all: false, favorites: false, new: false})

    const sortingHandler = (type) => {
        const newSortingObject = sortingSongs(type, sorting)
        setSorting(newSortingObject)
    }

    return { sorting, sortingHandler }
}

export { SortingObjectLogic }