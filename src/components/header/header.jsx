//styles
import './_header.scss'


//font-awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faCompactDisc } from '@fortawesome/free-solid-svg-icons'


//redux
import { useDispatch, useSelector } from 'react-redux'
import { toggleLibrary, toggleAlbumLibrary } from '../../store/reducerSlices/libraryToggleSlice/libraryToggleSlice'

const Header = () => {
    const dispatch = useDispatch()
    const albumLibraryIsOpen = useSelector(state => state.library.albumLibraryIsOpen)
    const libraryIsOpen = useSelector(state => state.library.libraryIsOpen)

    const libraryHandler = () => {
        if(albumLibraryIsOpen){
            dispatch(toggleAlbumLibrary())
        }
        dispatch(toggleLibrary())
    }

    const albumLibraryHandler = () => {
        if(libraryIsOpen){
            dispatch(toggleLibrary())
        }
        dispatch(toggleAlbumLibrary())
    }
    
    return(
        <header className="header">
            <div className="header__container container">
                <div className="header__body">
                    <h1 className="header__title">chillPop</h1>
                    <div className="header__functionality">
                     
                        <FontAwesomeIcon 
                            icon={faMusic} 
                            size="2x" 
                            className="header__button library-music"
                            onClick={libraryHandler}
                        />

                        <FontAwesomeIcon 
                            icon={faCompactDisc} 
                            size="2x" 
                            className="header__button library-albums"
                            onClick={albumLibraryHandler}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header }