import { useSelector } from "react-redux"

export const useSortingFunctionality = (term) => {
    const songs = useSelector(state => state.songs.songs)
    const sorting = useSelector(state => state.sortingSongs.sorting) 

    const searchSong = () => {
        if(term.length > 0){
            return songs.filter(item => item.name.includes(term))
        }else if(sorting.favorites){
            return songs.filter(item => item.favorites)
        }else if(sorting.new){
            return songs.filter(item => item.recentlyAdded)
        }else if(sorting.all){
            return songs
        }
        return songs
    }
    const visibleItems = searchSong()

    return { visibleItems }
}
