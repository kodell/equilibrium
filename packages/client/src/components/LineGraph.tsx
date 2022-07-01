import { VictoryChart, VictoryTheme, VictoryLine, VictoryContainer } from "victory";
import { useStore } from "../store";

export const LineGraph = () => {
    const { coordinates, timeScale } = useStore()
    const maxTime = Math.max(timeScale, coordinates.length)
    const minTime = Math.max(0, maxTime - timeScale)

    return (

            <VictoryChart
                domain={{ x: [minTime, maxTime], y: [-1, 1] }}
                domainPadding={{ x: 10, y: 10 }}
                containerComponent={<VictoryContainer preserveAspectRatio="xMaxYMin"  />}
                theme={VictoryTheme.material}
                padding={{
                    top: 10,
                    bottom: 10,
                    left: 50,
                    right: 50,
                }}
            >
                <VictoryLine
                    interpolation='natural'
                    style={{
                        data: { stroke: "#040748" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={coordinates}
                />
            </VictoryChart>
    )
}
