import { useEffect } from 'react'
import { Select } from '@chakra-ui/react'
import styled from 'styled-components'
import { io } from 'socket.io-client'

import { useStore } from '../store'
import { DataTable } from './DataTable'
import { LineGraph } from './LineGraph'

const SOCKET_PATH = process.env.NODE_ENV === 'development' ? 'localhost:3030' : '/'

export const DataView = () => {
    const { setCoordinates, toggleViewMode, setTimeScale, timeScale, viewMode } = useStore()

    useEffect(() => {
        const socket = io(SOCKET_PATH)
        socket.on("sine", ({ coordinates }) => {
            setCoordinates(coordinates)
        });
        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
        });
    }, [])

    return (
        <>
            <StyledControls>
                {viewMode === 'graph' && (
                    <>
                        <label htmlFor='timescale'>
                            Timescale:
                        </label>
                        <Select id='timescale'
                            onChange={({ target: { value } }) => setTimeScale(parseInt(value))}
                            value={timeScale}
                            width={100}>
                            <option value={10}>10 sec</option>
                            <option value={30}>30 sec</option>
                            <option value={60}>60 sec</option>
                            <option value={90}>90 sec</option>
                        </Select>
                    </>
                )}
                <StyledButton onClick={toggleViewMode}>
                    {viewMode === 'graph' ? 'Show Table' : 'Show Graph'}
                </StyledButton>
            </StyledControls>
            {viewMode === 'graph' && <LineGraph />}
            {viewMode === 'table' && <DataTable />}
        </>
    )
}

const StyledControls = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
`

const StyledButton = styled.button`
    background-color: #040748;
    border: 0;
    color: #5ce4d3;
    border-radius: 3px;
    padding: 0.5rem;
`