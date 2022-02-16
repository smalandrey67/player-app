//test
import { useSelector } from 'react-redux'

const SortingObjectLogic = () => {
    const sorting = useSelector(state => state.sortingReducer.sorting)
   
    return { sorting }
}
export { SortingObjectLogic }