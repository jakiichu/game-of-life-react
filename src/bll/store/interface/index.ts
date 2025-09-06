import type {IItems, ITableState} from "@/bll/interface";

interface IStateMethods {
    table: IItems
    changeTableItem: (id: string, changeValue?: boolean) => void
    flatMap: () => ITableState[]
}

export type {
    IStateMethods
}
