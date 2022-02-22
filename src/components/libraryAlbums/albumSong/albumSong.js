import './_albumSong.scss'

import { useDispatch } from 'react-redux'
import { putNewCurrentSong } from '../../../store/reducerSlices/getSongsSlice/getSongsSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons'


import { updateFavoritesAsync } from '../../../store/reducerSlices/getSongsSlice/updateFavoritesAsync'
import { updateAlbumSongs } from '../../../store/reducerSlices/singersAlbumSlice/singersAlbumSlice'


export const AlbumSong = ({ song, item }) => {
    const dispatch = useDispatch()
    const { image, name, author, favorites, id } = song

    const favoritesunction = (e) => {
        e.stopPropagation()
        
        dispatch(updateAlbumSongs({id}))
        dispatch(updateFavoritesAsync({id, favorites}))
    }

    const selectNewSongHandler = () => {
        dispatch(putNewCurrentSong(song))
    }

    return( 
        <div onClick={selectNewSongHandler} className={`particular ${item.activeAlbum ? 'particular--active' : ''}`}>
            <div className="particular__body">
                <div className="particular__song">
                    <img className="particular__song-image" src={image} alt={name} />
                    <div className="particular__song-hover">
                        <FontAwesomeIcon
                            icon={faPlay} 
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