import {create} from 'zustand'
import tableGenerator from "@/bll/functions/table-generator";
import type {IStateMethods} from "./interface";
import {chunk, flatMapDeep} from "es-toolkit";
import type {ITableEntity, ITableState} from "@/bll/interface";

const useTableStore = create<IStateMethods>((set, getState) => ({
    tableSize: 20,
    setTableSize: (value: number) => set(() => ({tableSize: value})),
    table: tableGenerator(20, 20),

    changeTableItem: (items: ITableEntity[]) => set((state) => {


        const resultToFloat = getState().flatMap()

        items.forEach(({id, value: changeValue}) => {
            const hasChange = changeValue !== undefined
            const newValue = resultToFloat.find(value => value.id === id) as ITableState

            resultToFloat.splice(resultToFloat.findIndex(value => value.id === id), 1, {
                ...newValue,
                value: hasChange ? changeValue : !newValue?.value
            })
        })


        return {
            ...state,
            table: chunk(resultToFloat, 20)
        }
    }),
    flatMap: () => flatMapDeep(getState().table, item => [item])
}))

export default useTableStore
