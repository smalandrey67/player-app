import { getDocs } from 'firebase/firestore'
import { userCollectionRef } from '../../firebase'

import { songsAction, currentSongAction } from '../actions/songsAction'

export const songsAsync = () => {
    return dispatch => {
        try{
             getDocs(userCollectionRef)
                .then(data => {
                    dispatch(songsAction(data.docs))
                    dispatch(currentSongAction())
                }) 
        }catch(error){
             console.error(error.stack)
        }
    }
}