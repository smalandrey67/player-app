export const formatSongs = (songs, id, type, favorites = false) => {
    switch(type){
        case 'FORMAT_ACTIVE_SONG':
            return songs.map(item => item.id === id ? {...item, active: true} : {...item, active: false})
        case 'FORMAT_ACTIVE_FAVORITES':
            return songs.map(item => item.id === id ? {...item, favorites: !favorites} : item)
        default:
            return songs
    }
}