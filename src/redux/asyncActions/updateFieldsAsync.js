import { db } from '../../firebase'
import { updateDoc, doc } from 'firebase/firestore'

export const updateFieldsAsync = (id, select) => {
    return dispatch => {
        try{
            const particularDoc = doc(db, 'songs', id)
            const newField = { favorites: !select }
            updateDoc(particularDoc, newField)

        }catch(error){
            console.error(error.stack)
        }
    }
}