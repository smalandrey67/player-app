//styles
import './_sortButton.scss'


//test
import { useDispatch } from 'react-redux'
import { SORT_ALL, SORT_NEW, SORT_FAVORITES } from '../../redux/constans/sortingConstan'
import {sortAllAction, sortNewAction, sortFavorites,} from '../../redux/actions/sortingAction'


const SortButton = () => {
    const dispatch = useDispatch()

    //change-array-of-sort
    const allSortHandler = () => dispatch(sortAllAction())
     
    const newSortHanlder = () => dispatch(sortNewAction())

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