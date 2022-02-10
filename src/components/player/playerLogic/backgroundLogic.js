import { useState } from 'react'
 
const BackgroundLogic = () => {
    const [backgroundPlate, setBackgroundPlate] = useState(false)

    const showPlateHandler = () => {
        if(window.innerWidth > 768){
            setBackgroundPlate(prev => !prev)
        }
    }   

    const hidePlateHandler = () => {
        if(window.innerWidth > 768){
            setBackgroundPlate(prev => !prev)
        }
    }

    return { 
        backgroundPlate, 
        showPlateHandler,
        hidePlateHandler,
    }
}

export { BackgroundLogic }