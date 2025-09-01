import {type ReactNode} from 'react';
import Table from "@/ui/table/core";
import useTableStore from "@/bll/store";


const App = (): ReactNode => {
    const {table} = useTableStore()

    return (
        <Table items={table}/>
    );
};

export default App;
