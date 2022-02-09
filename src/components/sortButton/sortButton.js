//styles
import './_sortButton.scss'

const SortButton = ({sortingHandler, title, type}) => {
    return (
        <button 
            onClick={() => sortingHandler(type)}
            className={`library__sorting-${title} library__sorting-button`}
        >{title}</button>
    )
}

export { SortButton }