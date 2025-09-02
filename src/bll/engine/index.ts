import {useEffect, useRef, useState} from "react"
import Emitter from "mitt"

const mitt = Emitter()

const useEngine = (callback: () => void) => {
    const [isStart, setIsStart] = useState(false)
    const intervalRef = useRef<number>(null)

    const start = () => mitt.emit("start")
    const stop = () => mitt.emit("stop")

    useEffect(() => {
        const addEventStart = () => {
            if (intervalRef.current) return
            intervalRef.current = setInterval(() => {
                callback()
            }, 1000)
            setIsStart(true)
        }

        const addEventStop = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
            setIsStart(false)
        }

        mitt.on("start", addEventStart)
        mitt.on("stop", addEventStop)

        return () => {
            mitt.off("start", addEventStart)
            mitt.off("stop", addEventStop)
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    return {
        start,
        stop,
        isStart,
    }
}

export {useEngine}
