export class SineData {
    x: number = 0
    coordinates: Array<{x: number, y: number}> = []
    costFactor: number = 1

    constructor() {
        this.addCoordinate()
    }

    addCoordinate() {
        // Apply a random adjustment to the cost factor to reflect some real world variation
        this.costFactor = (1 + this.costFactor + 2 * Math.random()) / 4
        this.coordinates.push({
            x: this.x,
            y: this.costFactor * Math.sin(this.x),
        })
        this.x += 1
        return this.coordinates
    }
}