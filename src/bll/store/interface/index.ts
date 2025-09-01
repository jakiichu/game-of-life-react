import type {IItems} from "@/bll/interface";

interface IStateMethods {
    table: IItems
    changeTableItem: (id: string) => void
}

export type {
    IStateMethods
}
