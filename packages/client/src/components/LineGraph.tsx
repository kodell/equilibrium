import { Box, useDimensions } from "@chakra-ui/react";
import { useRef } from "react";
import { VictoryChart, VictoryTheme, VictoryLine, VictoryContainer } from "victory";
import { useStore } from "../store";

export const LineGraph = () => {
    const elementRef = useRef(null)
    const dimensions = useDimensions(elementRef, true)
    const { coordinates, timeScale } = useStore()
    const maxTime = Math.max(timeScale, coordinates.length)
    const minTime = Math.max(0, maxTime - timeScale)

    return (
        <Box ref={elementRef} margin='auto' width={{ md: '100vw', lg: '75vw' }} height='75vh'>
            <VictoryChart
                containerComponent={<VictoryContainer responsive={false} />}
                domain={{ x: [minTime, maxTime], y: [-1, 1] }}
                domainPadding={{ x: 10, y: 10 }}
                height={dimensions?.borderBox.height}
                theme={VictoryTheme.material}
                width={dimensions?.borderBox.width}
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
        </Box>
    )
}
