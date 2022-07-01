import { VictoryChart, VictoryTheme, VictoryLine, VictoryContainer } from "victory";
import { CoordinateData } from "../types";

export const LineGraph = ({ data }: { data: CoordinateData }) => {
    const maxTime = Math.max(30, data.length)
    const minTime = Math.max(0, maxTime - 30)

    return (
        <VictoryChart
            domain={{ x: [minTime, maxTime], y: [-1, 1] }}
            domainPadding={{ x: 10, y: 10 }}
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
                data={data}
            />
        </VictoryChart>
    )
}
