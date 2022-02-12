// depencies
import { useState, useEffect } from 'react'

//api
import { getSongs } from './api/api'

//styles
import './home.scss'

//components
import { Header } from './components/header/header'
import { Player } from './components/player/player'
import { LibrarySongs } from './components/librarySongs/librarySongs'
import { Footer } from './components/footer/footer'

//hoc
import { CatchError } from './hoc/catchError'

const Home = () => {
    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState({})
    const [libraryIsOpen, setLibraryIsOpen] = useState(false)

    useEffect(() => {
        getSongs().then(data => {
            setSongs(data)
            setCurrentSong(data[0])
        })
    }, [])

    return(
        <CatchError>
            <Header setLibraryIsOpen={setLibraryIsOpen} />
            <main className="main">
                <Player 
                    currentSong={currentSong} 
                    libraryIsOpen={libraryIsOpen} 
                    setCurrentSong={setCurrentSong}
                    songs={songs}
                    setSongs={setSongs}
                />
                <LibrarySongs 
                    songs={songs} 
                    setCurrentSong={setCurrentSong} 
                    setSongs={setSongs}
                    libraryIsOpen={libraryIsOpen}
                />
            </main>
            <Footer />
        </CatchError> 
    )
}

export { Home }