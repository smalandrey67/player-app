//assets
import { ReactComponent as NotFound } from '../../assets/not-found.svg'

//styles
import './_noResult.scss'

const NoResult = () => {
    return(
        <div className="library__warning">
            <NotFound className="library__warning-image" height="200" width="200" />
            <p className="library__warning-text">No results of it</p>
        </div>
    )
}


export { NoResult }