import { useDispatch, useSelector } from "react-redux"
import { putNewSongs, putNewCurrentSong } from '../../../store/reducerSlices/getSongsSlice/getSongsSlice'

export const useSelectSongHook = (id) => {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.songs.songs)

    const selectSongHandler = () => {
        const newCurrentSong = songs.filter(item => item.id === id)
    
        dispatch(putNewSongs(id))
        dispatch(putNewCurrentSong(newCurrentSong[0]))
    }


    return {selectSongHandler}
}