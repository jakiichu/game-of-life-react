import type {IItems, ITableState} from "@/bll/interface";

interface IStateMethods {
    tableSize: number
    setTableSize: (value: number) => void
    table: IItems
    changeTableItem: (id: string, changeValue?: boolean) => void
    flatMap: () => ITableState[]
}

export type {
    IStateMethods
}
