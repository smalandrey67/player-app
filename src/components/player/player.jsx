// depencies
import { useEffect } from 'react'

// font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'

//components
import { PlayerController } from '../playerController/playerController'
import { Spinner } from '../spinner/spinner'

//styles
import './_player.scss'

//utils
import { formatTime } from '../../utils'
import { songFunctionality } from '../../utils'
import { formatSongs } from '../../utils'

//player-logic
import { LoopLogic } from './playerLogic/loopLogic'
import { BackgroundLogic } from './playerLogic/backgroundLogic'
import { TimeDragLogic } from './playerLogic/timeDragLogic'


const Player = ({ songs, currentSong, libraryIsOpen, setCurrentSong, setSongs }) => {
    const { loop, loopHandler } = LoopLogic()
    const { backgroundPlate, showPlateHandler, hidePlateHandler } = BackgroundLogic()
    const {
        songDataTime, 
        timeUpdateHandler, 
        dragUpdateHandler, 
        audioRef, 
        animationStyleTransform } = TimeDragLogic()


    const { image, name, audio, id, plate, author } = currentSong
    const { current, duration } = songDataTime

    useEffect(() => {
        const activeCurrentSong = formatSongs(songs, id, 'FORMAT_ACTIVE_SONG')
        
        setSongs(activeCurrentSong) 
    }, [currentSong, id])

    //get-current-index-of-song
    const currentIndexOfSong = songs.findIndex(item => item.id === id)

    const endAudio = () => {
        if(loop){
            audioRef.current.play()
        }else{
            setCurrentSong(songFunctionality(songs, currentIndexOfSong, 'SKIP_FORWARD'))
        }
    }

    //==========skip-functionality==========//
    const skipForwardSong = () => setCurrentSong(songFunctionality(songs, currentIndexOfSong, 'SKIP_FORWARD'))

    const skipBackSong = () => {
        if((currentIndexOfSong - 1) % songs.length === -1){
            setCurrentSong(songFunctionality(songs, currentIndexOfSong, 'SKIP_BACK'))
            return
        }
        setCurrentSong(songFunctionality(songs, currentIndexOfSong, 'SKIP_BACK_INFINITY'))     
    }

    return(
        <section className={`player`}>
            <div className="player__container container">
                <div className={`player__body ${libraryIsOpen ? 'player--smaller': ''}`}>
                    {!Object.values(currentSong).length ? <Spinner /> : 
                        <figure className="song__figure">
                            <div className="song__avatar">
                                <img 
                                    className="song__avatar-image" 
                                    src={image} 
                                    alt={name} 
                                    onMouseEnter={showPlateHandler} 
                                    onMouseLeave={hidePlateHandler} 
                                />
                                <img 
                                    className={`song__avatar-rock ${backgroundPlate ? 'song__avatar-rock_active' : ''}`}
                                    src={plate}
                                    alt={name} 
                                />
                            </div>
                            <figcaption className="song__figure">
                                <h3 className="song__figure-name">{name}</h3>
                                <p className="song__figure-author">{author}</p>
                            </figcaption>
                        </figure> 
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
                                        name="range"
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