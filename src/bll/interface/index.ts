type IItems = ITableState[][]

interface ITableEntity {
    id: string
    value: boolean
}

interface ITableState extends ITableEntity {
    rowIndex: number
    colIndex: number
}


export type {
    ITableState,
    IItems,
    ITableEntity
}
