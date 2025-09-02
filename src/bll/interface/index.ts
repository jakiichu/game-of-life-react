type IItems = ITableState[][]

interface ITableState {
    id: string
    value: boolean
    rowIndex: number
    colIndex: number
}

export type {
    ITableState,
    IItems
}
