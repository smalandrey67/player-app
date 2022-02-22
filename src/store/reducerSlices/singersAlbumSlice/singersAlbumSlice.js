import { createSlice } from "@reduxjs/toolkit"
import data from '../../../localData/data.json'


const initialStateAlbums = {
    albums: data
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
        }
    }
})


export const { activeAlbum, updateAlbumSongs } = singersAlbumSlice.actions

export default singersAlbumSlice.reducer