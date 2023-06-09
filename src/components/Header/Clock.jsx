import React, { useState, useEffect } from "react"

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    let hours = time.getHours()
    let minutes = time.getMinutes()
    if (hours < 10) hours = "0" + hours
    if (minutes < 10) minutes = "0" + minutes

    let displayTime = `${hours}:${minutes}`
    return <>{displayTime}</>
}

export default Clock
