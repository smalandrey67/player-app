//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

// styles
import './_particularSong.scss'

//test
import { useDispatch, useSelector } from 'react-redux'
import { putSongs, putCurrentSong } from '../../redux/actions/songsAction'
import { updateFieldsAsync } from '../../redux/asyncActions/updateFieldsAsync'
import { formatFavorites } from '../../redux/actions/songsAction'

const ParticularSong = ({ song }) => {
    const dispatch = useDispatch()
    const songs = useSelector(state => state.songsReducer.songs)

    const { image, name, author, favorites, id, recentlyAdded, active } = song

    const selectSongHandler = () => {
        const newCurrentSong = songs.filter(item => item.id === id)

        dispatch(putSongs(id))
        dispatch(putCurrentSong(newCurrentSong[0]))
    }

    const favoritesFunction = async (e) => {
        e.stopPropagation()
    
        dispatch(formatFavorites(id))
        dispatch(updateFieldsAsync(id, favorites))
    }

    return(
        <article 
            onClick={selectSongHandler} 
            className={`song ${active ? 'song--active' : '' }` } 
        >
            <div className="song__container">
                <img className="song__image" src={image} alt={name} />
                <div className="song__information">
                    <p className="song__item song__item-name">{name}</p>
                    <p className="song__item song__item-author">{author}</p>
                </div>
            </div>
            
            <FontAwesomeIcon 
                icon={faHeart}
                size="lg"
                className={`song__favorites ${favorites ? 'song__favorites-active' : ''}`}
                onClick={favoritesFunction}
                color={favorites ? 'red' : 'black'}
            />

            {recentlyAdded && <div className="song__new">
                <span className="song__new-text" >new</span>
            </div>}

        </article>
    )
}

export { ParticularSong }