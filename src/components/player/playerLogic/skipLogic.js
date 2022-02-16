import { useDispatch, useSelector } from "react-redux"
import { putSongs, putCurrentSong } from '../../../redux/actions/songsAction'
import { useState } from "react"


export const SkipLogic = () => {
    const [currentIndexOfSong, setCurrentIndexOfSong] = useState(0)

    const dispatch = useDispatch()
    const songs = useSelector(state => state.songsReducer.songs)

    //current-index-of-song
    const SKIP_FORWARD_INDEX = (currentIndexOfSong + 1) % songs.length
    const SKIP_BACK_INDEX = songs.length - 1
    const SKIP_BACK_INFINITY_INDEX = (currentIndexOfSong - 1) % songs.length


    const skipForwardSong = () => {
        dispatch(putCurrentSong(songs[SKIP_FORWARD_INDEX]))
    }
    
    const skipBackSong = () => {
        if((currentIndexOfSong - 1) % songs.length === -1){
            dispatch(putCurrentSong(songs[SKIP_BACK_INDEX]))
            return
        }
        dispatch(putCurrentSong(songs[SKIP_BACK_INFINITY_INDEX]))
    }

    return {
        skipForwardSong,
        skipBackSong,
        setCurrentIndexOfSong,
        SKIP_FORWARD_INDEX
    }
}