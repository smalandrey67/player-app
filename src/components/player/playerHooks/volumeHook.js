import { useState } from 'react'

export const useVolumeLogic = (audioRef) => {
    const [volumeDuration, setVolumeDuration] = useState(100)
    const [volumeIsOpen, setVolumeIsOpen] = useState(false)

    const volumeMenuHandler = () => {
        setVolumeIsOpen(prevMenuStatus => !prevMenuStatus)
    }

    const volumeHandler = (e) => {
        setVolumeDuration(e.target.value)
        audioRef.current.volume = e.target.value / 100
    }


    return {
        volumeHandler, 
        volumeDuration,
        volumeMenuHandler,
        volumeIsOpen
    }
}