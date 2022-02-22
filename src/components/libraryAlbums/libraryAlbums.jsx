//styles
import "./_libraryAlbums.scss"

import { useDispatch, useSelector } from 'react-redux'
import { putNewCurrentSong } from '../../store/reducerSlices/getSongsSlice/getSongsSlice'
import { activeAlbum } from '../../store/reducerSlices/singersAlbumSlice/singersAlbumSlice'

//accets
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg'

//components
import { AlbumSong } from "./albumSong/albumSong"

export const LibraryAlbums = () => {
    const dispatch = useDispatch()
    const dataAlbums = useSelector(state => state.albums.albums)
    const albumLibraryIsOpen = useSelector(state => state.library.albumLibraryIsOpen)
  

    const openSongsHandler = (id) => {
        dispatch(activeAlbum({id}))
    }

    const selectNewSongHandler = (song) => {
        dispatch(putNewCurrentSong(song))
    }

    return(
        <section className={`albums ${albumLibraryIsOpen ? 'albums--active' : ''}`}>
            <div className="albums__container">
                {dataAlbums.map(item => {
                return(
                    <div key={item.idAlbum} className="albums__body">
                        <div onClick={() => openSongsHandler(item.idAlbum)} className="albums__header">
                            <div className="albums__avatar">
                                <img 
                                    className="albums__avatar-image" 
                                    src={item.authorImage} 
                                    alt={item.author} 
                                />
                                <p className="albums__avatar-author" >{item.author}</p>
                            </div>

                            <ArrowDown 
                                height="15"
                                className={`albums__arrow ${item.activeAlbum ? 'albums__arrow-active' : ''}` }
                            />
                        </div>
                        
                        {item.songs.map(song => <AlbumSong key={song.id} song={song} item={item} />)}
                    </div>
                )
                })}
            </div>
        </section>
    )
}