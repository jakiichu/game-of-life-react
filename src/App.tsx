import {type ReactNode} from 'react';
import Table from "@/ui/table/core";
import useTableStore from "@/bll/store";
import type {ITableState} from "@/bll/interface";
import {compact, flatMapDeep, uniq} from "es-toolkit";
import {useInterval} from "@siberiacancode/reactuse";

const fiendsItems = [-1, 0, 1]
const App = (): ReactNode => {
    const {table, flatMap} = useTableStore()


    const fiendNeighbour = (item: ITableState) => compact(fiendsItems.map(fiend => table?.[item.rowIndex - fiend])
        .map(col => col?.slice(item.colIndex > 0 ? 0 : item.colIndex, item.colIndex + 2)))


    const uniqCurrentNeighbour = uniq(flatMapDeep(flatMap()
        .filter(item => item.value)
        .map(fiendNeighbour), item => [item]))


    const callbackEngine = () => {
        console.log(uniqCurrentNeighbour)
    }

    const {toggle} = useInterval(callbackEngine, 1000)

    return (<>

            <button onClick={toggle}>toggle</button>
            <Table items={table}/>
        </>
    );
};

export default App;
