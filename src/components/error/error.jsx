//depencies
import PropTypes from 'prop-types'


//style
import './_error.scss'

//assets
import { ReactComponent as ErrorRobot } from '../../assets/error-robot.svg'

function Error({ titleError }){
    return(
        <div className="error">
            <div className="error__container container">
                <ErrorRobot height="250" width="250" />
                <p className="error__title">{titleError}</p>
            </div>
        </div>
    )
}

Error.propTypes = {
    titleError: PropTypes.string,
}

export { Error }