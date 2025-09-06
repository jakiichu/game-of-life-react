import {create} from 'zustand'
import tableGenerator from "@/bll/functions/table-generator";
import type {IStateMethods} from "./interface";
import {chunk, flatMapDeep} from "es-toolkit";
import type {ITableState} from "@/bll/interface";

const useTableStore = create<IStateMethods>((set, getState) => ({
    table: tableGenerator(20, 20),

    changeTableItem: (id: string, changetValue?: boolean) => set((state) => {
        const hasChange = changetValue !== undefined

        const resultToFloat = flatMapDeep(state.table, item => [item]);
        const newValue = resultToFloat.find(value => value.id === id) as ITableState


        resultToFloat.splice(resultToFloat.findIndex(value => value.id === id), 1, {
            ...newValue,
            value: hasChange ? changetValue : !newValue?.value
        })

        return {
            ...state,
            table: chunk(resultToFloat, 20)
        }
    }),
    flatMap: () => flatMapDeep(getState().table, item => [item])
}))

export default useTableStore
