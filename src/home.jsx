// depencies
import { useState, useEffect } from 'react'

//api
import { getSongs } from './api/api'

//styles
import './home.scss'

//components
import { Header } from './components/header/header'
import { Main } from './components/main/main'
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
            <Main 
                songs={songs} 
                setSongs={setSongs}
                currentSong={currentSong} 
                setCurrentSong={setCurrentSong}
                libraryIsOpen={libraryIsOpen}
            />
            {/* <Footer /> */}
        </CatchError> 
    )
}

export { Home }