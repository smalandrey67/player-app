//styles
import './_main.scss'


//components
import { Player } from '../player/player'
import { LibrarySongs } from '../librarySongs/librarySongs'

const Main = ({ songs, currentSong, setCurrentSong, setSongs, libraryIsOpen }) => {
    
    return(
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
    )
}

export { Main } 