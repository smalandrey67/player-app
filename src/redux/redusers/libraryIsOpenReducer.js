import { OPEN_LIBRARY } from "../constans/libraryIsOpenConstant"

const initialStateSongs = {
    libraryIsOpen: false,
}

export const libraryIsOpenReducer = (state=initialStateSongs, action) => {
    switch(action.type){
        case OPEN_LIBRARY:
            return {...state, libraryIsOpen: !state.libraryIsOpen}
        default:
            return state
    }
}


