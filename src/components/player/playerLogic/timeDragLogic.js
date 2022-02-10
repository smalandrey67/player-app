import { useState, useRef } from 'react'

const TimeDragLogic = () => {
    const [songDataTime, setSongDataTime] = useState(
        {current: 0, duration: 0, animationTime: 0}
    )

    const audioRef = useRef()

    const timeUpdateHandler = (e) => {
        const { currentTime, duration } = e.target

        //animation-range-update
        const animationTime = Math.round((Math.round(currentTime) / Math.round(duration)) * 100)

        setSongDataTime(
            {...songDataTime, current: currentTime, duration, animationTime, }
        )
    }

    const dragUpdateHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        
        setSongDataTime(
            {...songDataTime, current: e.target.value}
        )
    }

    const animationStyleTransform = {
        transform: `translateX(${songDataTime.animationTime}%)`
    }
    
    return {
        songDataTime,
        timeUpdateHandler,
        dragUpdateHandler,
        audioRef,
        animationStyleTransform,
    }
}

export { TimeDragLogic }