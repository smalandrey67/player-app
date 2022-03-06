import { useDispatch, useSelector } from 'react-redux'
import { putNewCurrentSong } from '../../../../store/reducerSlices/getSongsSlice/getSongsSlice'

import { updateFavoritesAsync } from '../../../../store/reducerSlices/getSongsSlice/updateFavoritesAsync'
import { updateAlbumSongs } from '../../../../store/reducerSlices/singersAlbumSlice/singersAlbumSlice'
import { playUpdate } from '../../../../store/reducerSlices/getSongsSlice/getSongsSlice'
import { activeSong } from '../../../../store/reducerSlices/singersAlbumSlice/singersAlbumSlice'


export const useSongFunctionality = (song) => {
    const isPlay = useSelector(state => state.songs.isPlay)
    const dispatch = useDispatch()

    const { image, name, author, favorites, id} = song

    const favoritesunction = (e) => {
        e.stopPropagation()
        
        dispatch(updateAlbumSongs({id}))
        dispatch(updateFavoritesAsync({id, favorites}))
    }

    const selectNewSongHandler = () => {
        dispatch(activeSong({id}))
        dispatch(putNewCurrentSong(song))

        if(isPlay) return
        dispatch(playUpdate())
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
