import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const SOCKET_PATH = process.env.NODE_ENV === 'development' ? 'localhost:3030' : '/'

type CoordinateData = Array<{x: number, y: number}>

export const DataView = () => {
    const [coords, setCoords] = useState<CoordinateData>([])

    useEffect(() => {
        const socket = io(SOCKET_PATH)
        socket.on("sine", (data) => {
            setCoords(data)
        });
        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
    }, [])

    return <pre>{JSON.stringify(coords, null, 2)}</pre>
}