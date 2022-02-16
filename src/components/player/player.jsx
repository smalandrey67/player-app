// depencies
import { useEffect, useState } from 'react'

// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

//components
import { PlayerController } from '../playerController/playerController'
import { SongAvatarPlate } from '../songAvatarPlate/songAvatarPlate'
import { Spinner } from '../spinner/spinner'

//styles
import './_player.scss'

//utils
import { formatTime } from '../../utils'

//player-logic
import { LoopLogic } from './playerLogic/loopLogic'
import { BackgroundLogic } from './playerLogic/backgroundLogic'
import { TimeDragLogic } from './playerLogic/timeDragLogic'
import { SkipLogic } from './playerLogic/skipLogic'


//react-redux
import { useSelector, useDispatch } from 'react-redux'
import { putSongs, putCurrentSong } from '../../redux/actions/songsAction'


const Player = () => {
    const dispatch = useDispatch()

    const songs = useSelector(state => state.songsReducer.songs)
    const currentSong = useSelector(state => state.songsReducer.currentSong)
    const libraryIsOpen = useSelector(state => state.libraryIsOpenReducer.libraryIsOpen)

    //logic-of-that-component
    const { loop, loopHandler } = LoopLogic()
    const { backgroundPlate, showPlateHandler, hidePlateHandler } = BackgroundLogic()
    const { skipForwardSong, skipBackSong, setCurrentIndexOfSong, SKIP_FORWARD_INDEX } = SkipLogic()
    const { songDataTime, timeUpdateHandler, dragUpdateHandler, audioRef, animationStyleTransform } = TimeDragLogic()

    const { image, name, audio, id, plate, author } = currentSong
    const { current, duration } = songDataTime

    useEffect(() => {
        const indexOfCurrentSong = songs.findIndex(item => item.id === id)
        
        setCurrentIndexOfSong(indexOfCurrentSong)
        dispatch(putSongs(id))
    }, [currentSong, id])


    const endAudio = () => {
        if(loop){
            audioRef.current.play()
            return
        }
        dispatch(putCurrentSong(songs[SKIP_FORWARD_INDEX]))   
    }

    return(
        <section className="player">
            <div className="player__container container">
                <div className={`player__body ${libraryIsOpen ? 'player--smaller': ''}`}>

                    {!Object.values(currentSong).length ? <Spinner /> : 
                        <SongAvatarPlate 
                            image={image} 
                            name={name} 
                            showPlateHandler={showPlateHandler} 
                            hidePlateHandler={hidePlateHandler}
                            backgroundPlate={backgroundPlate}
                            plate={plate}
                            author={author}
                        />
                    }

                    <div className="song__functionality">
                        <div className="song__skipper">
                            <p className="song__skipper-time song__skipper-start">{formatTime(current || 0)}</p>
                                <div className="song__track">
                                    <input 
                                        min={0} 
                                        max={duration || 0} 
                                        className="song__track-range" 
                                        type="range" 
                                        name="rangeSong"
                                        onChange={dragUpdateHandler}
                                        value={current}
                                    />
                                    <div style={animationStyleTransform} className="song__track-animate"></div>
                                </div>
                            <p className="song__skipper-time song__skipper-finish">{formatTime(duration || 0)}</p>
                        </div>
                        <FontAwesomeIcon 
                            className="song__infinity-icon infinity-icon"
                            icon={faInfinity}
                            size="lg"
                            onClick={loopHandler}
                            color={loop ? 'var(--color-gable-green)' : 'var(--color-black)'}
                        />
                    </div>

                    <PlayerController 
                        audioRef={audioRef}
                        currentSong={currentSong}
                        skipBackSong={skipBackSong}
                        skipForwardSong={skipForwardSong}
                    />

                    <audio 
                        ref={audioRef} 
                        id="player-audio" 
                        src={audio}
                        onEnded={endAudio}
                        onTimeUpdate={timeUpdateHandler}
                        onLoadedMetadata={timeUpdateHandler}
                    />

                </div>
            </div>
        </section>
    )
}

export { Player }