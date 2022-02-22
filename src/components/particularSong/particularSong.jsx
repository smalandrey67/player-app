//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

// styles
import './_particularSong.scss'

//hooks 
import { useSelectSongHook } from './particularSongHooks/selectSongHook'
import { useSelectFavoritesHook } from './particularSongHooks/selectFavoritesHook'

const ParticularSong = ({ song }) => {
    const { image, name, author, favorites, id, recentlyAdded, active } = song

    //ParticularSong-hooks
    const { selectSongHandler } = useSelectSongHook(id)
    const { favoritesFunction } = useSelectFavoritesHook(id, favorites)

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