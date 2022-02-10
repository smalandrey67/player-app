import { useState } from 'react'


const LoopLogic = () => {
    const [loop, setLoop] = useState(false)

    const loopHandler = () => {
        setLoop(prev => !prev)
    }

    return { loop, loopHandler }
}

export { LoopLogic }