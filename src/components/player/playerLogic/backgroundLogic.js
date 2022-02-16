import { useState, useEffect } from 'react'
 
const BackgroundLogic = () => {
    const [backgroundPlate, setBackgroundPlate] = useState(false)
   
    const showPlateHandler = () => {
        if(window.innerWidth > 768){
            setBackgroundPlate(prevBackgroundStatus => !prevBackgroundStatus)
        }
    }   

    const hidePlateHandler = () => {
        if(window.innerWidth > 768){
            setBackgroundPlate(prevBackgroundStatus => !prevBackgroundStatus)
        }
    }

    return { 
        backgroundPlate, 
        showPlateHandler,
        hidePlateHandler,
    }
}

export { BackgroundLogic }