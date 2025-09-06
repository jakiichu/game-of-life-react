import {type ReactNode} from 'react';
import Table from "@/ui/table/core";
import useTableStore from "@/bll/store";
import type {ITableEntity, ITableState} from "@/bll/interface";
import {useInterval} from "@siberiacancode/reactuse";
import {flattenDeep, uniqBy} from "es-toolkit";

const fiendsItemsNew = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
]


const App = (): ReactNode => {
    const {table, flatMap, changeTableItem} = useTableStore()

    const concat = (a: ITableState, b: ITableState[]) => [a].concat(b)


    const fiendNeighbour = (item: ITableState) => {
        const result = [] as ITableState[]

        fiendsItemsNew.forEach(index => {
            const [x, y] = index
            const {rowIndex, colIndex} = item
            if ([rowIndex + x, colIndex + y].includes(-1)) {
                return
            }
            const fiendElement = flatMap().find(value => colIndex + y === value.colIndex && rowIndex + x === value.rowIndex)

            if (fiendElement)
                result.push(fiendElement)
        })
        return result
    }


    const uniqGameFields = uniqBy(flattenDeep(flatMap()
        .filter(item => item.value)
        .map((item) => concat(item, fiendNeighbour(item)))), item => item.id)


    const callbackEngine = () => {
        const neighbours: ITableEntity[] = uniqGameFields.map((item) => {
            const currentNeighbours = fiendNeighbour(item)
            return {
                id: item.id,
                value: item.value ? [2, 3].includes(currentNeighbours.filter(value => value.value).length) :
                    currentNeighbours.filter(value => value.value).length === 3
            }
        })

        neighbours.forEach(item => changeTableItem(item.id, item.value))
    }

    const {toggle} = useInterval(callbackEngine, 1000)

    return (<>

            <button onClick={toggle}>toggle</button>
            <Table items={table}/>
        </>
    );
};

export default App;
