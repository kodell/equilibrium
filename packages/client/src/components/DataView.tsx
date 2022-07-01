import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import { CoordinateData } from '../types'
import { LineGraph } from './LineGraph'

const SOCKET_PATH = process.env.NODE_ENV === 'development' ? 'localhost:3030' : '/'

export const DataView = () => {
    const [coords, setCoords] = useState<CoordinateData>([])

    useEffect(() => {
        const socket = io(SOCKET_PATH)
        socket.on("sine", ({ coordinates }) => {
            setCoords(coordinates)
        });
        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
    }, [])

    return <LineGraph data={coords} timeScale={30} />
}