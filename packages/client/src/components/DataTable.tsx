import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { useStore } from "../store";

export const DataTable = () => {
    const { coordinates, timeScale } = useStore()
    const rows = coordinates.map(({ x, y }) => (
        <Tr key={x}>
            <Td>{x}</Td>
            <Td>{y}</Td>
        </Tr>
    ))
    return (
        <TableContainer margin='auto' width={['100vw', '50vw']}>
            <Table>
                <Thead>
                    <Tr>
                        <Th>X</Th>
                        <Th>Y</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {rows}
                </Tbody>
            </Table>
        </TableContainer>
    )
}