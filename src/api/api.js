// depencies
import { updateDoc, doc, collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const userCollectionRef = collection(db, 'songs')

//get-songs-from-firebase
const getSongs = async () => {
    try{
        const data = await getDocs(userCollectionRef)
        const formattedDataOfSongs = data.docs.map(doc => ({...doc.data(), id: doc.id}))

        return formattedDataOfSongs    
    }catch(error){
        console.log(error.stack)
    }
}


//update-field-favorite
const updateDocument = async (id, select) => {
    try{
        const particularDoc = doc(db, 'songs', id)
        const newFiled = { favorites: !select}
        await updateDoc(particularDoc, newFiled)
    }catch(error){
        console.log(error.stack)
    }
}

export { updateDocument, getSongs }

