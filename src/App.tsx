import {type ReactNode} from 'react';
import Table from "@/ui/table/core";
import useTableStore from "@/bll/store";
import {useInterval} from "@siberiacancode/reactuse";
import {flattenDeep, uniq} from "es-toolkit";
import {fiendNeighbour} from "@/bll/functions/fiend-neighbour";
import {gameRules} from "@/bll/functions/game-rules";
import {concatItemToArray} from "@/bll/functions/concatItemToArray";


const App = (): ReactNode => {
    const {table, flatMap, changeTableItem} = useTableStore()

    const memoFlatMap = flatMap()

    const uniqGameFields = uniq(flattenDeep(memoFlatMap
        .filter(item => item.value)
        .map((item) => concatItemToArray(item, fiendNeighbour(item, memoFlatMap)))))


    const callbackEngine = () => {
        gameRules(uniqGameFields).forEach(item => changeTableItem(item.id, item.value))
    }

    const {toggle} = useInterval(callbackEngine, 300, {immediately: false})

    return (
        <>
            <button className='main-button' onClick={toggle}>toggle</button>
            <Table items={table}/>
        </>
    );
};

export default App;
