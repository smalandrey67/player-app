//styles
import './_header.scss'

//font-awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Header = ({ setLibraryIsOpen }) => {

    //change-status-library
    const libraryHandler = () => setLibraryIsOpen(prev => !prev)

    return(
        <header className="header">
            <div className="header__container container">
                <div className="header__body">
                    <h1 className="header__title">chillPop</h1>
                    <div className="header__functionality" onClick={libraryHandler}>
                        <p className="header__subtitle">Library</p>
                        <FontAwesomeIcon 
                            icon={faMusic} 
                            size="lg" 
                            className="header__button library-button"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export { Header }