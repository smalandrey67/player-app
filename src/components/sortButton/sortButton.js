//styles
import './_sortButton.scss'

const SortButton = ({sortingHandler}) => {
    return (
        <>
            <button 
                onClick={() => sortingHandler('SORT_ALL')}
                className={`library__sorting-all library__sorting-button`}
            >all</button>

            <button
                onClick={() => sortingHandler('SORT_FAVORITES')}
                className={`library__sorting-favorites library__sorting-button`}
            >favorites</button>

            <button
                onClick={() => sortingHandler('SORT_NEW')}
                className={`library__sorting-new library__sorting-button`}
            >new</button>  
        </>
    )
}

export { SortButton }