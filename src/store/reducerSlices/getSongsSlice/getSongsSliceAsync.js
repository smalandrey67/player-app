import { createAsyncThunk } from "@reduxjs/toolkit"
import { getDocs } from 'firebase/firestore'
import { userCollectionRef } from '../../../firebase'

export const getSongsSliceAsync = createAsyncThunk(
    'songs/getSongsSliceAsync',
     async function(_, {rejectWithValue}) {
        try {
            const responseOfSongs = await getDocs(userCollectionRef)
          
            const formattedDataOfSongs = responseOfSongs.docs.map(doc => ({...doc.data(), id: doc.id}))
    
            return formattedDataOfSongs
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
