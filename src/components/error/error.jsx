//style
import './_error.scss'

//assets
import { ReactComponent as ErrorRobot } from '../../assets/error-robot.svg'

const Error = ({ titleError }) => {
    return(
        <div className="error">
            <div className="error__container container">
                <ErrorRobot height="250" width="250" />
                <p className="error__title">{titleError}</p>
            </div>
        </div>
    )
}

export { Error }