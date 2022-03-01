//styls
import './_authorModal.scss'

import { useSelector, useDispatch } from 'react-redux'
import { toggleModal } from '../../store/reducerSlices/libraryToggleSlice/libraryToggleSlice'

//assets
import { ReactComponent as CrossClose } from '../../assets/cross-close.svg'


export const AuthorModal = () => {
    const dispatch = useDispatch()
    const currentDescription = useSelector(state => state.albums.currentModalDescription)
    const modalIsOpen = useSelector(state => state.library.modalIsOpen)

    const closeModalHandler = () => {
        dispatch(toggleModal())
    }

    return(
        <div className={`modal ${modalIsOpen ? 'modal--active' : ' '}`}>
            <div className="modal__body">
                <div className="modal__content">
                    <div className="modal__top">
                        <div className="modal__avatar">
                            <img className="modal__avatar-image" src={currentDescription.authorImage} alt={currentDescription.author} />
                            <h2 className="modal__avatar-author">{currentDescription.author}</h2>
                        </div>
                        <CrossClose 
                            onClick={closeModalHandler}
                            className="modal__top-close"
                            height="18"
                            width="18"
                        />
                    </div>
                    <div className="modal__main">
                        <p className="modal__description">{currentDescription.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
