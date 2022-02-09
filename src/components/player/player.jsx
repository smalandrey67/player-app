// depencies
import { useRef, useState, useEffect } from 'react'

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


const Player = ({ songs, currentSong, libraryIsOpen, setCurrentSong, setSongs }) => {
    const [loop, setLoop] = useState(false)
    const [songDataTime, setSongDataTime] = useState({current: 0, duration: 0, animation: 0})
    const [backgroundAvatar, setBackgroundAvatar] = useState(false)

    const audioRef = useRef()

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

    //==========update-time-functionality==========//
    const timeUpdate = (e) => {
        const { currentTime, duration } = e.target

        const animation = Math.round((Math.round(currentTime) / Math.round(duration)) * 100)

        setSongDataTime({...songDataTime, current: currentTime, duration, animation,})
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        
        setSongDataTime({...songDataTime, current: e.target.value})
    }


    //==========background-avatar-functionality==========//
    const showAvatarBackground = () => {
        if(window.innerWidth > 768){
            setBackgroundAvatar(prev => !prev)
        }
    }
    const hideAvatarBackground = () => {
        if(window.innerWidth > 768){
            setBackgroundAvatar(prev => !prev)
        }
    }

    const animationStyleTransform = {
        transform: `translateX(${songDataTime.animation}%)`
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
                                    onMouseEnter={showAvatarBackground} 
                                    onMouseLeave={hideAvatarBackground} 
                                />
                                <img 
                                    className={`song__avatar-rock ${backgroundAvatar ? 'song__avatar-rock_active' : ''}`}
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
                                        name="song-range"
                                        onChange={dragHandler}
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
                            onClick={() => setLoop(prev => !prev)}
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
                        onTimeUpdate={timeUpdate}
                        onLoadedMetadata={timeUpdate}
                    />

                </div>
            </div>
        </section>
    )
}

export { Player }