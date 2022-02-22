// depencies
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

//styles
import './home.scss'

//components
import { Header } from './components/header/header'
import { Player } from './components/player/player'
import { LibrarySongs } from './components/librarySongs/librarySongs'
import { Footer } from './components/footer/footer'
import { LibraryAlbums } from './components/libraryAlbums/libraryAlbums'


//hoc
import { CatchError } from './hoc/catchError'

//redux
import { useDispatch } from 'react-redux'
import { getSongsSliceAsync } from './store/reducerSlices/getSongsSlice/getSongsSliceAsync'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongsSliceAsync())
    }, [dispatch])

    return(
        <CatchError>
            <Header/>
            <LibrarySongs />
            <Player />
            <LibraryAlbums />
        </CatchError> 
    )
}

export { Home }