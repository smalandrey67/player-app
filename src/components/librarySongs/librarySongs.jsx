//components
import { ParticularSong } from '../particularSong/particularSong'
import { SortButton } from '../sortButton/sortButton'
import { NoResult } from '../noResult/noResult'
import { SortPanel } from '../sortPanel/sortPanel'

//styles
import './_librarySongs.scss'

//librarySongs-logic
import { useSearchPanelHook } from './librarySongsHooks/searchPanelHook'
import { useSortPanelHook } from './librarySongsHooks/sortPanelHook'
import { useSearchTermHook } from './librarySongsHooks/searchTermHook'
import { useSortingFunctionality } from './librarySongsHooks/sortingFunctionality'
import { useLibraryOpenHook } from './librarySongsHooks/libraryOpenHook'

const LibrarySongs = () => {
    //library-hooks
    const { searchPanel, panelHandler, setSearchPanel, searchPanelRef } = useSearchPanelHook()
    const { sortPanel, sortHandler } = useSortPanelHook()
    const { term, setTerm, handlerTermChange } = useSearchTermHook()
    const { visibleItems } = useSortingFunctionality(term)
    const { libraryIsOpen } = useLibraryOpenHook(setSearchPanel, setTerm, searchPanel)

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
                <SortButton />
            </div>
            <div className="library__container">
                {visibleItems.lenght ||
                        visibleItems.map(song => 
                        <ParticularSong 
                            key={song.id}
                            song={song}
                        />
                )}
                {visibleItems.length > 0 || <NoResult />}
            </div>
        </aside>
    )
}
export { LibrarySongs }