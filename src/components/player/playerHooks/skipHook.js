import { useDispatch, useSelector } from "react-redux"
import { putNewCurrentSong } from '../../../store/reducerSlices/getSongsSlice/getSongsSlice'
import { useState } from "react"

export const useSkipLogic = (loop, audioRef) => {
    const [currentIndexOfSong, setCurrentIndexOfSong] = useState(0)

    const dispatch = useDispatch()
    const songs = useSelector(state => state.songs.songs)

    //current-index-of-song
    const SKIP_FORWARD_INDEX = (currentIndexOfSong + 1) % songs.length
    const SKIP_BACK_INDEX = songs.length - 1
    const SKIP_BACK_INFINITY_INDEX = (currentIndexOfSong - 1) % songs.length


    const skipForwardSong = () => {
        dispatch(putNewCurrentSong(songs[SKIP_FORWARD_INDEX]))
    }
    
    const skipBackSong = () => {
        if((currentIndexOfSong - 1) % songs.length === -1){
            dispatch(putNewCurrentSong(songs[SKIP_BACK_INDEX]))
            return
        }
        dispatch(putNewCurrentSong(songs[SKIP_BACK_INFINITY_INDEX]))
    }

    const endAudio = () => {
        if(loop){
            audioRef.current.play()
            return
        }
        dispatch(putNewCurrentSong(songs[SKIP_FORWARD_INDEX]))   
    }

    return {
        skipForwardSong,
        skipBackSong,
        setCurrentIndexOfSong,
        endAudio,
    }
}