// depencies
import { useEffect } from 'react'

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
import { formatTime } from '../../utils/formatTime'

//player-logic
import { useLoopLogic } from './playerHooks/loopHook'
import { useBackgroundLogic } from './playerHooks/backgroundHook'
import { useTimeDragLogic } from './playerHooks/timeDragHook'
import { useSkipLogic } from './playerHooks/skipHook'
import { useVolumeLogic } from './playerHooks/volumeHook'

//react-redux
import { useSelector, useDispatch } from 'react-redux'
import { putNewSongs } from '../../store/reducerSlices/getSongsSlice/getSongsSlice'

//assets
import { ReactComponent as Volume } from '../../assets/volume.svg' 

const Player = () => {
    const dispatch = useDispatch()

    //global-state
    const songs = useSelector(state => state.songs.songs)
    const currentSong = useSelector(state => state.songs.currentSong)
    const libraryIsOpen = useSelector(state => state.library.libraryIsOpen)
    const albumLibraryIsOpen = useSelector(state => state.library.albumLibraryIsOpen)
    

    //player-hoooks
    const { loop, loopHandler } = useLoopLogic()
    const { backgroundPlate, showPlateHandler, hidePlateHandler } = useBackgroundLogic()
    const { songDataTime, timeUpdateHandler, dragUpdateHandler, audioRef } = useTimeDragLogic()
    const { skipForwardSong, skipBackSong, setCurrentIndexOfSong, endAudio } = useSkipLogic(loop, audioRef)
    const { volumeHandler, volumeDuration, volumeMenuHandler, volumeIsOpen} = useVolumeLogic(audioRef)

    const { image, name, audio, id, plate, author } = currentSong
    const { current, duration } = songDataTime

    useEffect(() => {
        const indexOfCurrentSong = songs.findIndex(item => item.id === id)
        
        setCurrentIndexOfSong(indexOfCurrentSong)
        dispatch(putNewSongs(id))
    }, [currentSong, id])


    const anumationPlayerBody = `player__body ${libraryIsOpen ? 'player__body--smaller': ''} ${albumLibraryIsOpen ? 'player__body--top' : ''}`

    return(
        <section className="player">
            <div className="player__container container">
                <div className={anumationPlayerBody} >
                    {!Object.values(currentSong).length ? <Spinner /> : 
                        <SongAvatarPlate 
                            image={image} 
                            name={name} 
                            showPlateHandler={showPlateHandler} 
                            hidePlateHandler={hidePlateHandler}
                            backgroundPlate={backgroundPlate}
                            plate={plate}
                            author={author}
                            albumLibraryIsOpen={albumLibraryIsOpen}
                        />
                    }

                    <div className="song__functionality">
                        <div className="song__skipper">
                            <p style={{paddingRight: albumLibraryIsOpen ? 7 : 0}} className="song__skipper-time song__skipper-start">{formatTime(current || 0)}</p>
                                <div className="song__track">
                                    <input 
                                        min={0} 
                                        max={duration || 0} 
                                        className="song__track-range song-range" 
                                        type="range" 
                                        name="rangeSong"
                                        onChange={dragUpdateHandler}
                                        value={current}
                                    />
                                </div>
                            <p style={{paddingLeft: albumLibraryIsOpen ? 7 : 0}} className="song__skipper-time song__skipper-finish">{formatTime(duration || 0)}</p>
                        </div>
                        <FontAwesomeIcon 
                            className="song__infinity-icon infinity-icon"
                            icon={faInfinity}
                            size="lg"
                            onClick={loopHandler}
                            color={loop ? 'var(--color-gable-green)' : 'var(--color-black)'}
                        />
                        <div className="song__volume">
                            <input 
                                className={`song__volume-range song-range ${volumeIsOpen ? 'song__volume-range__active' : ''} `}
                                type="range" 
                                name="rangeVolume"
                                onChange={volumeHandler}
                                value={volumeDuration}
                            />
                            <Volume
                                onClick={volumeMenuHandler} 
                                className={`song__volume-button ${volumeIsOpen ? 'song__volume-button__active' : ''} `}
                                height="16"
                                width="16"
                            />
                        </div>
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