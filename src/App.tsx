import {type ReactNode} from 'react';
import Table from "@/ui/table/core";
import useTableStore from "@/bll/store";
import {useInterval} from "@siberiacancode/reactuse";
import {flattenDeep, uniq} from "es-toolkit";
import {fiendNeighbour} from "@/bll/functions/fiend-neighbour";
import {gameRules} from "@/bll/functions/game-rules";
import {concatItemToArray} from "@/bll/functions/concatItemToArray";
import {FunctionPanel} from "@/ui/function-panel/core";


const App = (): ReactNode => {
    const {table, flatMap, changeTableItem} = useTableStore()

    const memoFlatMap = flatMap()

    const uniqGameFields = uniq(flattenDeep(memoFlatMap
        .filter(item => item.value)
        .map((item) => concatItemToArray(item, fiendNeighbour(item, memoFlatMap)))))


    const callbackEngine = () => {
        changeTableItem(gameRules(uniqGameFields))
    }

    const {toggle, active, resume, pause} = useInterval(callbackEngine, 300, {immediately: false})
    return (
        <>
            <Table items={table} pause={pause} resume={resume}/>
            <FunctionPanel toggle={toggle} isActive={active}></FunctionPanel>
        </>
    );
};

export default App;
