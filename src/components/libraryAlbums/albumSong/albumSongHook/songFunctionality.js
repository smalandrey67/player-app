import { useDispatch } from 'react-redux'
import { putNewCurrentSong } from '../../../../store/reducerSlices/getSongsSlice/getSongsSlice'

import { updateFavoritesAsync } from '../../../../store/reducerSlices/getSongsSlice/updateFavoritesAsync'
import { updateAlbumSongs } from '../../../../store/reducerSlices/singersAlbumSlice/singersAlbumSlice'


export const useSongFunctionality = (song) => {
    const dispatch = useDispatch()

    const { image, name, author, favorites, id} = song

    const favoritesunction = (e) => {
        e.stopPropagation()
        
        dispatch(updateAlbumSongs({id}))
        dispatch(updateFavoritesAsync({id, favorites}))
    }

    const selectNewSongHandler = () => {
        dispatch(putNewCurrentSong(song))
    }

    return {
        favoritesunction,
        selectNewSongHandler,
        image, 
        name, 
        author,
        favorites,
    }
}
