//api
import { updateDocument } from '../../api/api'

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

// styles
import './_particularSong.scss'

//utils
import { formatSongs } from '../../utils'

const ParticularSong = ({ songs, setCurrentSong, setSongs, song }) => {

    const { image, name, author, favorites, id, recentlyAdded, active } = song

    const selectSongHandler = () => {
        const newCurrentSong = songs.filter(item => item.id === id)

        //get a new array with sorting objects with new fields new
        const activeCurrentSong = formatSongs(songs, id, 'FORMAT_ACTIVE_SONG')
       
        setCurrentSong(newCurrentSong[0])
        setSongs(activeCurrentSong) 
    }

    const favoritesFunction = async (e) => {
        e.stopPropagation()
    
        //get a new array with sorting objects with new fields favorites
        const activeFavoritesSongs = formatSongs(songs, id, 'FORMAT_ACTIVE_FAVORITES', favorites)
      
        setSongs(activeFavoritesSongs)
        await updateDocument(id, favorites)
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