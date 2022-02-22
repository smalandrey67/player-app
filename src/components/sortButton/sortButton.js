//styles
import './_sortButton.scss'


//test
import { useDispatch } from 'react-redux'
import { sortAll, sortNew, sortFavorites } from '../../store/reducerSlices/sortSongsSlice/sortSongsSlice'


const SortButton = () => {
    const dispatch = useDispatch()

    //change-array-of-sort

    const allSortHandler = () => dispatch(sortAll())

    const newSortHanlder = () => dispatch(sortNew())

    const favoritesSortHandler = () => dispatch(sortFavorites())


    return (
        <>
            <button 
                onClick={allSortHandler}
                className={`library__sorting-all library__sorting-button`}
            >all</button>

            <button
                onClick={favoritesSortHandler}
                className={`library__sorting-favorites library__sorting-button`}
            >favorites</button>

            <button
                onClick={newSortHanlder}
                className={`library__sorting-new library__sorting-button`}
            >new</button>  
        </>
    )
}

export { SortButton }