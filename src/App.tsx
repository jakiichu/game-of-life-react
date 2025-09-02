import {type ReactNode} from 'react';
import Table from "@/ui/table/core";
import useTableStore from "@/bll/store";
import {useEngine} from "@/bll/engine";
import type {ITableState} from "@/bll/interface";
import {compact, flatMapDeep, uniqBy} from "es-toolkit";

const fiendsItems = [-1, 0, 1]
const App = (): ReactNode => {
    const {table, flatMap} = useTableStore()

    const fiendNeighbour = (item: ITableState) => {


        return compact(fiendsItems.map(fiend => table?.[item.rowIndex - fiend]).map(col => {
            return col?.slice(item.colIndex > 0 ? 0 : item.colIndex, item.colIndex + 2)
        }))
    }

    const callbackEngine = () => {
        const finderNeighbour = flatMapDeep(flatMap().filter(item => item.value).map(fiendNeighbour), item => [item])
        console.log(uniqBy(finderNeighbour, item => item.id))
    }

    const {start, stop} = useEngine(callbackEngine)
    return (<>

            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <Table items={table}/>
        </>
    );
};

export default App;
