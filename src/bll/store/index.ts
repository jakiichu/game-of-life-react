import {create} from 'zustand'
import tableGenerator from "@/bll/functions/table-generator";
import type {IStateMethods} from "./interface";
import {chunk, flatMapDeep} from "es-toolkit";
import type {ITableState} from "@/bll/interface";

const useTableStore = create<IStateMethods>((set, getState) => ({
    tableSize: 20,
    setTableSize: (value: number) => set(() => ({tableSize: value})),
    table: tableGenerator(20, 20),

    changeTableItem: (id: string, changeValue?: boolean) => set((state) => {
        const hasChange = changeValue !== undefined

        const resultToFloat = flatMapDeep(state.table, item => [item]);
        const newValue = resultToFloat.find(value => value.id === id) as ITableState


        resultToFloat.splice(resultToFloat.findIndex(value => value.id === id), 1, {
            ...newValue,
            value: hasChange ? changeValue : !newValue?.value
        })

        return {
            ...state,
            table: chunk(resultToFloat, 20)
        }
    }),
    flatMap: () => flatMapDeep(getState().table, item => [item])
}))

export default useTableStore
