import { createSlice } from "@reduxjs/toolkit"
import { getSongsSliceAsync } from './getSongsSliceAsync'
import { updateFavoritesAsync } from './updateFavoritesAsync'

const initialStateGetSogns = {
    songs: [],
    currentSong: {},
    currentModalDescription: {},
    status: null,
    error: null
}

const setBunchError = (action, state) => {
    state.status = 'rejected'
    state.error = action.payload
}

const getSongsSlice = createSlice({
    name: 'getSongs',
    initialState: initialStateGetSogns,

    reducers: {
        putNewCurrentSong(state, action){
            state.currentSong = action.payload
        },
        putNewSongs(state, action){
            const activeSongs = state.songs.map(item => {
                if(item.id === action.payload) return {...item, active: true}

                return {...item, active: false}
            })

            state.songs = activeSongs
        },
        updateSongs(state, action){
            const newFavoriteSongs = state.songs.map(item => {
                if(item.id === action.payload){
                    return {...item, favorites: !item.favorites}
                }
                return item
            })
            state.songs = newFavoriteSongs
        },
    },
    
    extraReducers: {
        [getSongsSliceAsync.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },

        [getSongsSliceAsync.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.songs = action.payload
            state.currentSong = action.payload[0]
        },

        [getSongsSliceAsync.rejected]: setBunchError,
        [updateFavoritesAsync.rejected]: setBunchError
    }
})

export const { putNewCurrentSong, putNewSongs, updateSongs } = getSongsSlice.actions

export default getSongsSlice.reducer