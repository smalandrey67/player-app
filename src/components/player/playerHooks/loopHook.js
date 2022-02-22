import { useState } from 'react'


const useLoopLogic = () => {
    const [loop, setLoop] = useState(false)

    const loopHandler = () => {
        setLoop(prevLoopStatus => !prevLoopStatus)
    }

    return { loop, loopHandler }
}

export { useLoopLogic }