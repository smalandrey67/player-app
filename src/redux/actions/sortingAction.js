import { 
    SORT_ALL,
    SORT_NEW,
    SORT_FAVORITES,
} from "../constans/sortingConstan"

const sortAllAction = () => {
    return {
        type: SORT_ALL,
    }
}

const sortNewAction = () => {
    return {
        type: SORT_NEW,
    }
}

const sortFavorites = () => {
    return {
        type: SORT_FAVORITES
    }
}

export {
    sortAllAction,
    sortNewAction,
    sortFavorites,
}