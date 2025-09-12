import type {IItems, ITableEntity, ITableState} from "@/bll/interface";


interface IStateMethods {
    tableSize: number
    setTableSize: (value: number) => void
    table: IItems
    changeTableItem: (items: ITableEntity[]) => void
    flatMap: () => ITableState[]
}

export type {
    IStateMethods
}
