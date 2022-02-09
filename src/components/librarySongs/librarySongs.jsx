import { useState, useRef, useEffect } from 'react'

//components
import { ParticularSong } from '../particularSong/particularSong'
import { SortButton } from '../sortButton/sortButton'

//styles
import './_librarySongs.scss'

//font-awesomefaAddressBook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//utils
import { sortingSongs } from '../../utils'

//assets
import { ReactComponent as ImageSort } from '../../assets/arrow-up-a-z-solid.svg'
import { ReactComponent as NotFound } from '../../assets/not-found.svg'

const LibrarySongs = ({ songs, setCurrentSong, setSongs, libraryIsOpen }) => {
    const [term, setTerm] = useState('')
    const [searchPanel, setSearchPanel] = useState(false)
    const [sortPanel, setSortPanel] = useState(false)
    const [sorting, setSorting] = useState({all: false, favorites: false, new: false})

    const searchPanelRef = useRef()

    useEffect(() => {
        if(!libraryIsOpen || !searchPanel){
            setTerm('')
            setSearchPanel(false)
        }
    }, [libraryIsOpen, searchPanel])

    if(searchPanel){
        searchPanelRef.current.focus()
    }

    const sortingHandler = (type) => {
        const newSortingObject = sortingSongs(type, sorting)
        setSorting(newSortingObject)
    }

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
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder='search a song'
                        ref={searchPanelRef} 
                        value={term} 
                    />
                </div>

                <div className="library__right">
                    <FontAwesomeIcon 
                        icon={faSearch}
                        size="2x"
                        onClick={() => setSearchPanel(prev => !prev)}
                        color={searchPanel ? 'var(--color-te-papa-green)' : 'var(--color-black)'}
                        style={{marginRight: 10}}
                    />
                    <ImageSort 
                        height="28"
                        width="28" 
                        onClick={() => setSortPanel(prev => !prev)}
                        style={{fill: sortPanel ? 'var(--color-te-papa-green)' : 'var(--color-black)'}}
                    />
                </div>
            </div>

            <div className={`library__sorting ${sortPanel ? 'library__sorting-active' : ''}`}>
                <SortButton sortingHandler={sortingHandler} title="all" type="SORT_ALL" />
                <SortButton sortingHandler={sortingHandler} title="favorites" type="SORT_FAVORITES" />
                <SortButton sortingHandler={sortingHandler} title="new" type="SORT_NEW" />
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
                        <NotFound height="200" width="200"/>
                        <p className="library__warning-text">No results of it</p>
                    </div>
                }
            </div>
        </aside>
    )
}

export { LibrarySongs }