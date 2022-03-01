import { createSlice } from "@reduxjs/toolkit"

const initialStateLibrary = {
    libraryIsOpen: false,
    albumLibraryIsOpen: false,
    modalIsOpen: false
}

const libraryToggleSlice = createSlice({
    name: 'library', 
    initialState: initialStateLibrary,

    reducers: {
        toggleLibrary(state){
            state.libraryIsOpen = !state.libraryIsOpen
        },
        toggleAlbumLibrary(state){
            state.albumLibraryIsOpen = !state.albumLibraryIsOpen
        },
        toggleModal(state){
            state.modalIsOpen = !state.modalIsOpen
        }
    }
})

export const { toggleLibrary, toggleAlbumLibrary, toggleModal } = libraryToggleSlice.actions

export default libraryToggleSlice.reducer
