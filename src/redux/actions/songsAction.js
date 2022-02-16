import { 
    GETTING_SONGS, 
    GETTING_CURRENT_SONG,
    PUT_NEW_SONGS,
    PUT_NEW_CURRENT_SONG,
    SORT_SONGS,
    FORMAT_ACTIVE_FAVORITES
} from "../constans/songsConstan"

const songsAction = data => {
    return {
        type: GETTING_SONGS,
        payload: data
    }
}

const currentSongAction = () => {
    return {
        type: GETTING_CURRENT_SONG,
    }
}

const putSongs = data => {
    return {
        type: PUT_NEW_SONGS,
        payload: data,
    }
}

const putCurrentSong = data => {
    return {
        type: PUT_NEW_CURRENT_SONG,
        payload: data
    }
}

const sortSongs = data => {
    return {
        type: SORT_SONGS,
        payload: data
    }
}

const formatFavorites = data => {
    return {
        type: FORMAT_ACTIVE_FAVORITES,
        payload: data
    }
}


export {
    songsAction,
    currentSongAction,
    putSongs,
    putCurrentSong,
    sortSongs,
    formatFavorites,
}