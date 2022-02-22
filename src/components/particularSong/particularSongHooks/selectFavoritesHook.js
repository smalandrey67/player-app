import { useDispatch } from 'react-redux'
import { updateFavoritesAsync } from '../../../store/reducerSlices/getSongsSlice/updateFavoritesAsync'

export const useSelectFavoritesHook = (id, favorites) => {
    const dispatch = useDispatch()

    const favoritesFunction = async (e) => {
        e.stopPropagation()

        dispatch(updateFavoritesAsync({id, favorites,}))
    }

    return { favoritesFunction }
}

