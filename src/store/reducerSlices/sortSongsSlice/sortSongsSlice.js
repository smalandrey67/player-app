import { createSlice } from "@reduxjs/toolkit"

const initialStateSort = {
    sorting:  { all: false, favorites: false, new: false } 
}

const sortSongsSlice = createSlice({
    name: 'sorting',
    initialState: initialStateSort,

    reducers: {
        sortAll(state){
            state.sorting = { all: true, new: false, favorites: false }
        },
        sortNew(state){
            state.sorting = { new: true, all: false, favorites: false }
        },
        sortFavorites(state){
            state.sorting = { favorites: true, all: false, new: false }
        }
    }
})


export default sortSongsSlice.reducer
export const { sortAll, sortNew, sortFavorites } = sortSongsSlice.actions