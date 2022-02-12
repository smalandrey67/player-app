import { useEffect } from 'react'

//components
import { ParticularSong } from '../particularSong/particularSong'
import { SortButton } from '../sortButton/sortButton'
import { Spinner } from '../spinner/spinner'
import { NoResult } from '../noResult/noResult'
import { SortPanel } from '../sortPanel/sortPanel'

//styles
import './_librarySongs.scss'

//librarySongs-logic
import { SearchPanelLogic } from './librarySongsLogic/searchPanelLogic'
import { SortPanelLogic } from './librarySongsLogic/sortPanelLogic'
import { SearchTermLogic } from './librarySongsLogic/searchTermLogic'
import { SortingObjectLogic } from './librarySongsLogic/sortingObjectLogic'

const LibrarySongs = ({ songs, setCurrentSong, setSongs, libraryIsOpen }) => {
    const { searchPanel, panelHandler, setSearchPanel, searchPanelRef } = SearchPanelLogic()
    const { sortPanel, sortHandler } = SortPanelLogic()
    const { term, setTerm, handlerTermChange} = SearchTermLogic()
    const { sorting, sortingHandler } = SortingObjectLogic()

    useEffect(() => {
        if(!libraryIsOpen || !searchPanel){
            setTerm('')
            setSearchPanel(false)
        }
    }, [libraryIsOpen, searchPanel])

    const searchSong = () => {
        if(term.length > 0){
            return songs.filter(item => item.name.includes(term))
        }else if(sorting.favorites){
            return songs.filter(item => item.favorites)
        }else if(sorting.new){
            return songs.filter(item => item.recentlyAdded)
        }else if(sorting.all){
            return songs
        }
        return songs
    }
    const visibleItems = searchSong()

    return(
        <aside className={`library ${libraryIsOpen ? 'library--active' : ''}`}>
             <div className="library__search">
                 
                <div className={`library__left ${searchPanel ? 'library__left-active' : ''} ` }>
                    <input 
                        className="library__left-input" 
                        type="text" 
                        onChange={handlerTermChange}
                        placeholder='search a song'
                        ref={searchPanelRef} 
                        value={term} 
                    />
                </div>

                <div className="library__right">
                    <SortPanel 
                        panelHandler={panelHandler}
                        sortHandler={sortHandler}
                        sortPanel={sortPanel}
                        searchPanel={searchPanel}
                    />
                </div>

            </div>

            <div className={`library__sorting ${sortPanel ? 'library__sorting-active' : ''}`}>
                <SortButton sortingHandler={sortingHandler} />
            </div>

            <div className="library__container">
                {visibleItems.lenght ||
                        visibleItems.map(song => 
                        <ParticularSong 
                            key={song.id}
                            song={song}
                            songs={songs}
                            setSongs={setSongs}
                            setCurrentSong={setCurrentSong}
                        />
                )}

                {visibleItems.length > 0 || <NoResult />}
            </div>
        </aside>
    )
}

export { LibrarySongs }