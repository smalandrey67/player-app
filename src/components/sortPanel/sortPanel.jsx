//styles
import './_sortPanel.scss'

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//assets
import { ReactComponent as ImageSort } from '../../assets/arrow-up-a-z-solid.svg'
import { ReactComponent as CrossClose } from '../../assets/cross-close.svg'


//test
import { useDispatch } from 'react-redux'
import { libraryIsOpenAction } from '../../redux/actions/libraryIsOpenAction'

const SortPanel = ({ panelHandler, sortHandler, sortPanel, searchPanel}) => {
    const dispatch = useDispatch()

    const libraryIsOpenHandler = () => dispatch(libraryIsOpenAction())
    
    return(
        <>
            <FontAwesomeIcon 
                icon={faSearch}
                size="lg"
                onClick={() => panelHandler()}
                color={searchPanel ? 'var(--color-te-papa-green)': 'var(--color-white)'}
                className="library__right-search library__right-functionality"
            />
           
            <ImageSort 
                height="18"
                width="18" 
                onClick={() => sortHandler()}
                style={{fill: sortPanel ? 'var(--color-te-papa-green)' : 'var(--color-white)'}}
                className="library__right-sort library__right-functionality"
            />

            <CrossClose 
                height="15"
                width="15"
                onClick={libraryIsOpenHandler} 
                className="library__right-close library__right-functionality"
            />
        </>
    )
}

export { SortPanel }