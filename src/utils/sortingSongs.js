export const sortingSongs = (type, sorting) => {
    switch(type){
        case 'SORT_ALL':
            return {all: true, new: false, favorites: false}
        case 'SORT_NEW':
            return {new: true, all: false, favorites: false}
        case 'SORT_FAVORITES':
            return {favorites: true, new: false, all: false}
        default:
            return {...sorting}
    }
}
