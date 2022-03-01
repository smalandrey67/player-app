import { useDispatch, useSelector } from 'react-redux'

import { toggleModal } from '../../../store/reducerSlices/libraryToggleSlice/libraryToggleSlice'
import { putCerrentDescription } from '../../../store/reducerSlices/singersAlbumSlice/singersAlbumSlice'


export const useModalHook = () => {
    const dispatch = useDispatch()
    const modalIsOpen = useSelector(state => state.library.modalIsOpen)
    
    const modalHendler = (id, e) => {
        e.stopPropagation()
        dispatch(putCerrentDescription({id}))
        dispatch(toggleModal())
    }


    return {  modalHendler }
    
}