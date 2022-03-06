// depencies
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'

import { playUpdate } from '../../store/reducerSlices/getSongsSlice/getSongsSlice'


const PlayerController = ({ currentSong, audioRef, skipBackSong, skipForwardSong }) => {
    const dispatch = useDispatch()
    const isPlay = useSelector(state => state.songs.isPlay)

    useEffect(() => {
        isPlay ? audioRef.current.play() : audioRef.current.pause()
    }, [isPlay, audioRef, currentSong])

    const playHandler = () => dispatch(playUpdate())
    
    return(
        <div className="player__controller">
            <FontAwesomeIcon 
                className="player__controller-icon left-icon" 
                icon={faAngleLeft} 
                size="2x"
                onClick={() => skipBackSong()}
            />
            <FontAwesomeIcon 
                className="player__controller-icon play-icon" 
                icon={isPlay ? faPause: faPlay}
                onClick={playHandler}
                size="2x"
            />
            <FontAwesomeIcon 
                className="player__controller-icon right-icon" 
                icon={faAngleRight}
                size="2x"
                onClick={() => skipForwardSong()}
            />
        </div>
    )
}

export { PlayerController }