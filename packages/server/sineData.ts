export class SineData {
    x: number = 0
    coordinates: Array<{x: number, y: number}> = []

    constructor() {
        this.addCoordinate()
    }

    addCoordinate() {
        this.coordinates.push({
            x: this.x,
            y: Math.sin(this.x),
        })
        this.x += 1
        return this.coordinates
    }
}