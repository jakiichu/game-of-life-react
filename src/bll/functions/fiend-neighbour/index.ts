import type {ITableState} from "@/bll/interface";
import {neighboursIndexes} from "@/constant/neighbour-indexes";


const fiendNeighbour = (item: ITableState, flatMap: ITableState[]) => {
    const result = [] as ITableState[]

    neighboursIndexes.forEach(index => {
        const [x, y] = index
        const {rowIndex, colIndex} = item
        if ([rowIndex + x, colIndex + y].includes(-1)) return
        const fiendElement = flatMap.find(value => colIndex + y === value.colIndex && rowIndex + x === value.rowIndex)

        if (fiendElement)
            result.push(fiendElement)
    })
    return result
}

export {
    fiendNeighbour
}
