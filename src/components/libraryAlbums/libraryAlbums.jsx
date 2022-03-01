//styles
import "./_libraryAlbums.scss"

//accets
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg'

//components
import { AlbumSong } from "./albumSong/albumSong"
import { AuthorModal } from "../authorModal/authorModal"

//hooks
import { useFavoriteSong } from './libraryAlbumsHooks/favoriteSongHook'
import { useModalHook } from './libraryAlbumsHooks/modalHook'

import { ReactComponent as Details } from '../../assets/details.svg' 


export const LibraryAlbums = () => {
    const { openSongsHandler, dataAlbums, albumLibraryIsOpen} = useFavoriteSong()
    const { modalHendler } = useModalHook()

    return(
        <>
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

                                    <div className="albums__right">
                                        <Details 
                                            className="albums__right-show"
                                            onClick={(e) => modalHendler(item.idAlbum, e)}
                                            height="18"
                                            width="18"

                                        />
                                        <ArrowDown 
                                            height="15"
                                            className={`albums__right-arrow ${item.activeAlbum ? 'albums__right-arrow__active' : ''}` }
                                        />
                                    </div>
                                   
                                    
                                </div>
                                {item.songs.map(song => <AlbumSong key={song.id} song={song} item={item} />)}
                            </div>
                        )
                    })}
                </div>
            </section>
             <AuthorModal />
        </>

    )
}