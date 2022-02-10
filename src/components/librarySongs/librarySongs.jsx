import { useEffect } from 'react'

//components
import { ParticularSong } from '../particularSong/particularSong'
import { SortButton } from '../sortButton/sortButton'
import { Spinner, spinner } from '../spinner/spinner'

//styles
import './_librarySongs.scss'

//font-awesomefaAddressBook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//assets
import { ReactComponent as ImageSort } from '../../assets/arrow-up-a-z-solid.svg'
import { ReactComponent as NotFound } from '../../assets/not-found.svg'

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
                    <FontAwesomeIcon 
                        icon={faSearch}
                        size="lg"
                        onClick={panelHandler}
                        color={searchPanel ? 'var(--color-te-papa-green)': 'var(--color-white)'}
                        className="library__right-search"
                    />
                    <ImageSort 
                        height="18"
                        width="18" 
                        onClick={sortHandler}
                        style={{fill: sortPanel ? 'var(--color-te-papa-green)' : 'var(--color-white)'}}
                        className="library__right-sort"
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

                {visibleItems.length > 0 || 
                    <div className="library__warning">
                        <NotFound className="library__warning-image" height="200" width="200" />
                        <p className="library__warning-text">No results of it</p>
                    </div>
                }
            </div>
        </aside>
    )
}

export { LibrarySongs }