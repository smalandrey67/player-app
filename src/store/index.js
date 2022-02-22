import { configureStore } from '@reduxjs/toolkit'
import getSongsSliceReducer from './reducerSlices/getSongsSlice/getSongsSlice'
import libraryToggleReducer from './reducerSlices/libraryToggleSlice/libraryToggleSlice'
import sortSongsReducer from './reducerSlices/sortSongsSlice/sortSongsSlice'
import singersAlbumReducer from './reducerSlices/singersAlbumSlice/singersAlbumSlice'

export default configureStore({
    reducer: {
        songs: getSongsSliceReducer,
        library: libraryToggleReducer,
        sortingSongs: sortSongsReducer,
        albums: singersAlbumReducer, 
    }
})

