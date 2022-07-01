import create from 'zustand'
import { CoordinateData } from './types'

type StoreState = {
    coordinates: CoordinateData,
    viewMode: 'graph' | 'table',
    timeScale: number,
    setCoordinates: (coordinates: CoordinateData) => void,
    setTimeScale: (timeScale: number) => void,
    toggleViewMode: () => void,
}

export const useStore = create<StoreState>((set) => ({
    coordinates: [],
    timeScale: 30,
    viewMode: 'graph',
    setCoordinates: (coordinates) => set({ coordinates }),
    setTimeScale: (timeScale) => set({ timeScale }),
    toggleViewMode: () => set(({ viewMode }) => ({
        viewMode: viewMode === 'graph' ? 'table' : 'graph'
    }))
}))