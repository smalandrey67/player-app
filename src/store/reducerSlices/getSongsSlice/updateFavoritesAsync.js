import { createAsyncThunk } from "@reduxjs/toolkit"
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../../../firebase'

import { updateSongs } from './getSongsSlice'


export const updateFavoritesAsync = createAsyncThunk(
    'songs/updateFavoritesAsync',
     async function({id, favorites}, {rejectWithValue, dispatch}) {    
        try {
            const particularDoc = doc(db, 'songs', id)
            const newFiled = { favorites: !favorites }

            await updateDoc(particularDoc, newFiled)
                .catch((error) => {
                    throw new Error(error)
                })
            
            dispatch(updateSongs(id))
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)