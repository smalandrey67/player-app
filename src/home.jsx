// depencies
import { useEffect } from 'react'

//styles
import './home.scss'

//components
import { Header } from './components/header/header'
import { Player } from './components/player/player'
import { LibrarySongs } from './components/librarySongs/librarySongs'
import { Footer } from './components/footer/footer'

//hoc
import { CatchError } from './hoc/catchError'

import { songsAsync } from './redux/asyncActions/songsAsync'
import { useDispatch } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(songsAsync())
    }, [])

    return(
        <CatchError>
            <Header/>
            <main className="main">
                <Player />
                <LibrarySongs />
            </main>
            <Footer />
        </CatchError> 
    )
}

export { Home }