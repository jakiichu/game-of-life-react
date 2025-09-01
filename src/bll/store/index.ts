import {create} from 'zustand'
import tableGenerator from "@/bll/functions/table-generator";
import type {IStateMethods} from "./interface";
import {chunk, flatMapDeep} from "es-toolkit";

const useTableStore = create<IStateMethods>((set) => ({
    table: tableGenerator(20, 20),
    changeTableItem: (id: string) => set((state) => {
        const resultToFloat = flatMapDeep(state.table, item => [item]);
        resultToFloat.splice(resultToFloat.findIndex(value => value.id === id), 1, {
            id,
            value: !resultToFloat.find(value => value.id === id)?.value
        })

        return {
            ...state,
            table: chunk(resultToFloat, 20)
        }
    }),
}))

export default useTableStore
