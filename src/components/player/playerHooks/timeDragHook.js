import { useState, useRef } from 'react'

const useTimeDragLogic = () => {
    const [songDataTime, setSongDataTime] = useState(
        {current: 0, duration: 0}
    )

    const audioRef = useRef()

    const timeUpdateHandler = (e) => {
        const { currentTime, duration } = e.target

        setSongDataTime(
            {...songDataTime, current: currentTime, duration,}
        )
    }

    const dragUpdateHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        
        setSongDataTime(
            {...songDataTime, current: e.target.value}
        )
    }

 
    return {
        songDataTime,
        timeUpdateHandler,
        dragUpdateHandler,
        audioRef,
    }
}

export { useTimeDragLogic }