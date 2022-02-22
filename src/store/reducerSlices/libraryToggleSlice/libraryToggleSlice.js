import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    libraryIsOpen: false,
    albumLibraryIsOpen: false,
}

const libraryToggleSlice = createSlice({
    name: 'library', 
    initialState: initialState,

    reducers: {
        toggleLibrary(state){
            state.libraryIsOpen = !state.libraryIsOpen
        },
        toggleAlbumLibrary(state){
            state.albumLibraryIsOpen = !state.albumLibraryIsOpen
        }
    }
})

export const { toggleLibrary, toggleAlbumLibrary } = libraryToggleSlice.actions

export default libraryToggleSlice.reducer
