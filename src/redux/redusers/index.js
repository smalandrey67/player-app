// depencies
import { combineReducers } from "redux";

//redusers
import { songsReducer } from './songsReducer'
import { libraryIsOpenReducer } from './libraryIsOpenReducer'
import { sortingReducer } from './sortingReducer'

export const allReducers = combineReducers({
    songsReducer,
    libraryIsOpenReducer,
    sortingReducer,
})