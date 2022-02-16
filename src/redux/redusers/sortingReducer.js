import {
    SORT_ALL,
    SORT_NEW,
    SORT_FAVORITES,
} from '../constans/sortingConstan'


const initialSortSongs = {
    sorting:  { all: false, favorites: false, new: false } 
}

export const sortingReducer = (state=initialSortSongs, action) => {
    switch(action.type){
        case SORT_ALL:
            return {...state, sorting: {all: true, new: false, favorites: false}}
        case SORT_NEW:
            return {...state, sorting: {new: true, all: false, favorites: false }}
        case SORT_FAVORITES:
            return {...state, sorting: {favorites: true, all: false, new: false}}
        default: 
            return state
    }
}