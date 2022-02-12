import { useState } from 'react'


const LoopLogic = () => {
    const [loop, setLoop] = useState(false)

    const loopHandler = () => {
        setLoop(prevLoopStatus => !prevLoopStatus)
    }

    return { loop, loopHandler }
}

export { LoopLogic }