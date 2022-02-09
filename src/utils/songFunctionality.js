export const songFunctionality = (songs, currentIndexOfSong, type) => {
    switch(type){
        case 'SKIP_FORWARD':
            return songs[(currentIndexOfSong + 1) % songs.length]
        case 'SKIP_BACK':
            return songs[songs.length - 1]
        case 'SKIP_BACK_INFINITY':
            return songs[(currentIndexOfSong - 1) % songs.length]
        default:
            return songs[0]
    }
}
