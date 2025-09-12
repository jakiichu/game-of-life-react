import type {IItems} from "@/bll/interface";

interface ITableProps {
    items?: IItems;

    resume(): void

    pause(): void
}


export type {
    ITableProps
}
