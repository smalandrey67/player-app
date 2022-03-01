import { createSlice } from "@reduxjs/toolkit"
import data from '../../../localData/data.json'


const initialStateAlbums = {
    albums: data,
    currentModalDescription: {}
}


const singersAlbumSlice = createSlice({
    name: 'albums',
    initialState: initialStateAlbums,

    reducers: {
        activeAlbum(state, action){
            state.albums = state.albums.map(item => {
                if(item.idAlbum === action.payload.id){
                   return {...item, activeAlbum: !item.activeAlbum}
                }

                return {...item, activeAlbum: false}
            })
        },
        updateAlbumSongs(state, action){
            state.albums = state.albums.map(item => {
                item.songs.forEach(song => {
                    if(song.id === action.payload.id){
                        song.favorites = !song.favorites
                    } 
                })
                return item
            })  
        }, 
        putCerrentDescription(state, action){
            state.currentModalDescription = state.albums.find(item => item.idAlbum === action.payload.id)
        },
    }
})


export const { activeAlbum, updateAlbumSongs, putCerrentDescription } = singersAlbumSlice.actions

export default singersAlbumSlice.reducer