import { useDispatch, useSelector } from "react-redux"

import { activeAlbum } from '../../../store/reducerSlices/singersAlbumSlice/singersAlbumSlice'


export const useFavoriteSong = () => {
    const dispatch = useDispatch()
    const dataAlbums = useSelector(state => state.albums.albums)
    const albumLibraryIsOpen = useSelector(state => state.library.albumLibraryIsOpen)
  
    const openSongsHandler = (id) => {
        dispatch(activeAlbum({id}))
    }

    return {
        openSongsHandler,
        dataAlbums,
        albumLibraryIsOpen,
    }
}