import { 
    GETTING_SONGS, 
    GETTING_CURRENT_SONG, 
    PUT_NEW_SONGS, 
    PUT_NEW_CURRENT_SONG,
    FORMAT_ACTIVE_FAVORITES

} from "../constans/songsConstan"


const initialStateSongs = {
    songs: [],
    currentSong: {},
}

export const songsReducer = (state=initialStateSongs, action) => {
    switch(action.type){
        case GETTING_SONGS:
            return {...state, songs: action.payload.map(doc => ({...doc.data(), id: doc.id}))}
        case GETTING_CURRENT_SONG:
            return {...state, currentSong: state.songs[0]}
        case PUT_NEW_SONGS:
            return {...state, songs: state.songs.map(item => item.id === action.payload ? {...item, active: true} : {...item, active: false})}
        case PUT_NEW_CURRENT_SONG:
            return {...state, currentSong: action.payload}
        case FORMAT_ACTIVE_FAVORITES:
            return {...state, songs: state.songs.map(item => item.id === action.payload ? {...item, favorites: !item.favorites} : item)}
        default:
            return state
    }
}


