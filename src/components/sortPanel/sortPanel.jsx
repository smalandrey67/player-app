//styles
import './_sortPanel.scss'

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//assets
import { ReactComponent as ImageSort } from '../../assets/arrow-up-a-z-solid.svg'

const SortPanel = ({ panelHandler, sortHandler, sortPanel, searchPanel}) => {
    return(
        <>
            <FontAwesomeIcon 
                icon={faSearch}
                size="lg"
                onClick={() => panelHandler()}
                color={searchPanel ? 'var(--color-te-papa-green)': 'var(--color-white)'}
                className="library__right-search"
            />
            <ImageSort 
                height="18"
                width="18" 
                onClick={() => sortHandler()}
                style={{fill: sortPanel ? 'var(--color-te-papa-green)' : 'var(--color-white)'}}
                className="library__right-sort"
            />
        </>
    )
}

export { SortPanel }