import './_albumSong.scss'

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

//hooks
import { useSongFunctionality } from './albumSongHook/songFunctionality'

export const AlbumSong = ({ song, item }) => {
    const { favoritesunction, selectNewSongHandler, name, image, author, favorites  } = useSongFunctionality(song)

    return( 
        <div onClick={selectNewSongHandler} className={`particular ${item.activeAlbum ? 'particular--active' : ''}`}>
            <div className="particular__body">
                <div className="particular__song">
                    <img className="particular__song-image" src={image} alt={name} />
                    <div className="particular__song-hover">
                        <FontAwesomeIcon
                            icon={song.active ? faPause : faPlay} 
                            className="particular__song-play"
                        />
                    </div>
                </div>
                <div className="particular__description">
                    <p className="particular__description-item particular__description--name">{name}</p>
                    <p className="particular__description-item particular__description--author">{author}</p>
                </div>
            </div>

            <FontAwesomeIcon 
                icon={faHeart}
                size="lg"
                className={`particular__favorites ${favorites ? 'particular__favorites-active' : ''}`}
                onClick={favoritesunction}
                color={favorites ? 'red' : 'black'}
            />
        </div>  
    )
}